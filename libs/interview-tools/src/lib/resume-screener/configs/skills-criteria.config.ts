import { CriterionDefinition } from "@ng-hire-up/shared";

export const SKILLS_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  englishLevel: {
    id: 'englishLevel',
    name: 'Уровень английского языка',
    severity: 'minor',
    textSuccess: 'Английский B2 или выше',
    textFail: 'Укажите уровень английского В2 или выше'
  },
  skillsCount: {
    id: 'skillsCount',
    name: 'Количество навыков-тегов',
    severity: 'critical',
    textSuccess: 'Ровно 30 навыков-тегов',
    textFail: 'Должно быть ровно 30 навыков-тегов (сейчас 29)'
  },
  skillsKeywordsCoverage: {
    id: 'skillsKeywordsCoverage',
    name: 'Покрытие ключевых слов в навыках',
    severity: 'minor',
    textSuccess: 'Покрытие ключевых слов выше 50%, сейчас 54% (52 из 40)',
    textFail: 'Покрытие ключевых слов должно быть не ниже 50%, сейчас 38% (15 из 40)'
  }
};

// Массив для вывода списком в шаблоне Angular через @for
export const SKILLS_CRITERIA_LIST: CriterionDefinition[] = Object.values(SKILLS_CRITERIA_REGISTRY);
