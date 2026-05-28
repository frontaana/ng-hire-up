import { CriterionDefinition } from "@ng-hire-up/shared";

export const JOB_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  stackInTitle: {
    id: 'stackInTitle',
    name: 'Стек в названии должности',
    severity: 'minor',
    textSuccess: 'Стек в названии должности',
    textFail: 'Укажите фреймворк/библиотеку в названии должности (React, Vue, Angular, Node.js) - не более 3'
  },
  employmentTypes: {
    id: 'employmentTypes',
    name: 'Типы занятости',
    severity: 'critical',
    textSuccess: 'Указаны все типы занятости: полная, частичная, проектная',
    textFail: 'Укажите все типы занятости: полная занятость, частичная занятость, проектная работа/разовое задание'
  },
  targetJobTitle: {
    id: 'targetJobTitle',
    name: 'Формат названия должности',
    severity: 'critical',
    textSuccess: 'Должность: «Frontend/Backend/Fullstack-разработчик»',
    textFail: 'Должность должна быть «Frontend-разработчик», «Backend-разработчик» или «Fullstack-разработчик» (латиницей, через дефис)'
  },
  workFormats: {
    id: 'workFormats',
    name: 'Форматы работы',
    severity: 'critical',
    textSuccess: 'Формат работы: офис, удалённо, гибрид',
    textFail: 'Укажите все форматы работы: на месте работодателя, удаленно, гибрид'
  }
};

// Массив для вывода списком в шаблоне Angular через @for
export const JOB_CRITERIA_LIST: CriterionDefinition[] = Object.values(JOB_CRITERIA_REGISTRY);
