import { CriterionDefinition } from "@ng-hire-up/shared";

export const ABOUT_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  phoneInAbout: {
    id: 'phoneInAbout',
    name: 'Телефон в описании',
    severity: 'critical',
    textSuccess: 'Номер телефона в блоке «Обо мне»',
    textFail: 'В блоке «Обо мне» укажите номер телефона'
  },
  telegramInAbout: {
    id: 'telegramInAbout',
    name: 'Telegram в описании',
    severity: 'critical',
    textSuccess: 'Telegram в блоке «Обо мне»',
    textFail: 'В блоке «Обо мне» укажите Telegram (@username или ссылку https://t.me/username)'
  },
  techStackInAbout: {
    id: 'techStackInAbout',
    name: 'Стек технологий в описании',
    severity: 'critical',
    textSuccess: 'Стек технологий в блоке «Обо мне»',
    textFail: 'В блоке «Обо мне» укажите стек технологий'
  }
};

// Массив для вывода списком в шаблоне Angular через @for
export const ABOUT_CRITERIA_LIST: CriterionDefinition[] = Object.values(ABOUT_CRITERIA_REGISTRY);
