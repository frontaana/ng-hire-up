import { CriterionDefinition } from "@ng-hire-up/shared";

export const EDUCATION_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  hasHigherEducation: {
    id: 'hasHigherEducation',
    name: 'Наличие высшего образования',
    severity: 'minor',
    textSuccess: 'Указано высшее образование',
    textFail: 'Желательно указать высшее образование'
  },
  graduationYearNotFuture: {
    id: 'graduationYearNotFuture',
    name: 'Проверка года окончания (текущий год)',
    severity: 'critical',
    textSuccess: 'Год окончания раньше текущего',
    textFail: 'Год окончания - текущий'
  },
  graduationYearFreshness: {
    id: 'graduationYearFreshness',
    name: 'Актуальность года окончания',
    severity: 'minor',
    textSuccess: 'Год окончания не раньше 2010',
    textFail: 'Год окончания раньше 2010'
  }
};

// Массив для вывода списком в шаблоне Angular через @for
export const EDUCATION_CRITERIA_LIST: CriterionDefinition[] = Object.values(EDUCATION_CRITERIA_REGISTRY);
