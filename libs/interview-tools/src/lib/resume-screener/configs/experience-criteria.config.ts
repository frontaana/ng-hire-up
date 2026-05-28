import { CriterionDefinition } from "@ng-hire-up/shared";

export const EXPERIENCE_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  jobTitleFormat: {
    id: 'jobTitleFormat',
    name: 'Название должности в опыте',
    severity: 'critical',
    textSuccess: 'Должность в опыте: «Frontend/Backend/Fullstack-разработчик»',
    textFail: 'Должность на каждом месте работы должна быть «Frontend-разработчик», «Backend-разработчик» или «Fullstack-разработчик» (латиницей, через дефис)'
  },
  telegramInExperience: {
    id: 'telegramInExperience',
    name: 'Telegram в блоке опыта',
    severity: 'critical',
    textSuccess: 'Telegram в блоке «Опыт работы»',
    textFail: 'Добавьте Telegram (@username или ссылку) в текущее место работы'
  },
  keywordsCoverage: {
    id: 'keywordsCoverage',
    name: 'Покрытие ключевых слов',
    severity: 'minor',
    textSuccess: 'Покрытие ключевых слов выше 50%, сейчас 54% (37 из 69)',
    textFail: 'Покрытие ключевых слов должно быть не ниже 50%, сейчас 14% (10 из 69)'
  },
  totalExperienceYears: {
    id: 'totalExperienceYears',
    name: 'Общий коммерческий стаж',
    severity: 'critical',
    textSuccess: 'Стаж 4-8 лет',
    textFail: 'Стаж менее 3 лет'
  }
};

// Массив для вывода списком в шаблоне Angular через @for
export const EXPERIENCE_CRITERIA_LIST: CriterionDefinition[] = Object.values(EXPERIENCE_CRITERIA_REGISTRY);
