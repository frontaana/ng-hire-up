import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ABOUT_CRITERIA_REGISTRY, EDUCATION_CRITERIA_REGISTRY, EXPERIENCE_CRITERIA_REGISTRY, HEADER_CRITERIA_REGISTRY, JOB_CRITERIA_REGISTRY, SKILLS_CRITERIA_REGISTRY } from '../../configs';

// Импортируем наши справочники по разделам из shared
// Замени путь '@ng-hire-up/shared' на твой реальный алиас, если он отличается

// Местные интерфейсы для управления состоянием отображения (UI State)
interface CriterionUiItem {
  id: string;
  text: string;
  status: 'success' | 'warning' | 'error';
  icon: string; // Класс иконки (например, 'icon-check', 'icon-cross')
}

interface SectionUiUiCard {
  id: string;
  name: string;
  icon: string;        // Иконка самого раздела (например, папка, заголовок)
  statusText: string;  // "Ошибки", "Рекомендации" или "Всё верно"
  statusType: 'success' | 'warning' | 'error';
  criteria: CriterionUiItem[];
}

@Component({
  selector: 'lib-resume-screener-page',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './resume-screener-page.component.html',
  styleUrl: './resume-screener-page.component.scss',
})
export class ResumeScreenerPageComponent {
  
  // 1. Сигнал для хранения ID раскрытого в данный момент раздела (null — все закрыты)
  readonly expandedSectionId = signal<string | null>('header');

  // 2. Симулируем сырые результаты проверки резюме, которые пришли бы от бэкенда или сервиса
  // Массив содержит ID критерия и флаг isValid (пройдено / не пройдено)
  readonly scanResults = signal<Array<{ id: string; isValid: boolean }>>([
    // Шапка
    { id: 'fullName', isValid: true },
    { id: 'telegramUsername', isValid: true },
    { id: 'telegramLink', isValid: false }, // minor -> warning
    { id: 'cityLocation', isValid: false }, // critical -> error
    { id: 'metroStation', isValid: true },
    { id: 'mobilityStatus', isValid: true },
    { id: 'nameAlphabet', isValid: true },
    { id: 'emailAddress', isValid: true },
    { id: 'preferredContact', isValid: true },
    { id: 'citizenshipStatus', isValid: true },
    { id: 'resumeFreshness', isValid: true },
    // Желаемая должность
    { id: 'stackInTitle', isValid: true },
    { id: 'employmentTypes', isValid: true },
    { id: 'targetJobTitle', isValid: true },
    { id: 'workFormats', isValid: true },
    // Опыт работы
    { id: 'jobTitleFormat', isValid: true },
    { id: 'telegramInExperience', isValid: true },
    { id: 'keywordsCoverage', isValid: false }, // minor -> warning
    { id: 'totalExperienceYears', isValid: true },
    // Образование
    { id: 'hasHigherEducation', isValid: true },
    { id: 'graduationYearNotFuture', isValid: true },
    { id: 'graduationYearFreshness', isValid: true },
    // Навыки
    { id: 'englishLevel', isValid: true },
    { id: 'skillsCount', isValid: true },
    { id: 'skillsKeywordsCoverage', isValid: true },
    // Обо мне
    { id: 'phoneInAbout', isValid: true },
    { id: 'telegramInAbout', isValid: true },
    { id: 'techStackInAbout', isValid: true },
  ]);

  // Массив конфигураций всех 6 разделов для сборки мастер-объекта
  private readonly sectionsMeta = [
    { id: 'header', name: 'Шапка (личные данные)', icon: 'icon-user', registry: HEADER_CRITERIA_REGISTRY },
    { id: 'job', name: 'Желаемая должность', icon: 'icon-briefcase', registry: JOB_CRITERIA_REGISTRY },
    { id: 'experience', name: 'Опыт работы', icon: 'icon-history', registry: EXPERIENCE_CRITERIA_REGISTRY },
    { id: 'education', name: 'Образование', icon: 'icon-book', registry: EDUCATION_CRITERIA_REGISTRY },
    { id: 'skills', name: 'Навыки', icon: 'icon-star', registry: SKILLS_CRITERIA_REGISTRY },
    { id: 'about', name: 'Обо мне', icon: 'icon-file-text', registry: ABOUT_CRITERIA_REGISTRY },
  ];

  // 3. Вычисляемый сигнал для формирования структуры разделов для шаблона
  readonly sections = computed<SectionUiUiCard[]>(() => {
    const results = this.scanResults();

    return this.sectionsMeta.map(meta => {
      const criteriaUi: CriterionUiItem[] = [];
      let hasErrors = false;
      let hasWarnings = false;

      // Пробегаемся по всем критериям текущего реестра
      Object.values(meta.registry).forEach((def: any) => {
        // Ищем, есть ли результат проверки для этого критерия
        const match = results.find(r => r.id === def.id);
        const isValid = match ? match.isValid : true; // по дефолту true, если нет данных

        let status: 'success' | 'warning' | 'error' = 'success';
        let icon = 'icon-check'; // класс для галочки

        if (!isValid) {
          if (def.severity === 'critical') {
            status = 'error';
            icon = 'icon-cross'; // класс для крестика
            hasErrors = true;
          } else {
            status = 'warning';
            icon = 'icon-exclamation'; // класс для восклицательного знака
            hasWarnings = true;
          }
        }

        criteriaUi.push({
          id: def.id,
          text: isValid ? def.textSuccess : def.textFail,
          status,
          icon
        });
      });

      // Определяем общий статус-бейдж для всего раздела
      let statusText = 'Всё верно';
      let statusType: 'success' | 'warning' | 'error' = 'success';

      if (hasErrors) {
        statusText = 'Ошибки';
        statusType = 'error';
      } else if (hasWarnings) {
        statusText = 'Рекомендации';
        statusType = 'warning';
      }

      return {
        id: meta.id,
        name: meta.name,
        icon: meta.icon,
        statusText,
        statusType,
        criteria: criteriaUi
      };
    });
  });

  // 4. Вычисляемый сигнал для виджета результатов скоринга (Зона 2)
  readonly scoreMetrics = computed(() => {
    const results = this.scanResults();
    const totalCount = results.length;
    const passedCount = results.filter(r => r.isValid).length;
    
    // Вычисляем процент округленно до целого
    const percentage = totalCount > 0 ? Math.round((passedCount / totalCount) * 100) : 0;

    return {
      text: `Результат: ${passedCount}/${totalCount}`,
      percentage
    };
  });

  // 5. Метод для сворачивания / разворачивания карточки раздела
  toggleSection(sectionId: string): void {
    // Если кликнули на уже раскрытый — закрываем его (ставим null), иначе раскрываем кликнутый
    this.expandedSectionId.update(currentId => currentId === sectionId ? null : sectionId);
  }
}
