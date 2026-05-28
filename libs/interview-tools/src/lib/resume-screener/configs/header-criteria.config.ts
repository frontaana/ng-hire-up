import { CriterionDefinition } from "@ng-hire-up/shared";

export const HEADER_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  fullName: {
    id: 'fullName',
    name: 'Формат ФИО',
    severity: 'critical',
    textSuccess: 'Фамилия Имя (без отчества)',
    textFail: 'Укажите только Фамилию и Имя - без отчества'
  },
  telegramUsername: {
    id: 'telegramUsername',
    name: 'Наличие Telegram никнейма',
    severity: 'critical',
    textSuccess: 'Указан Telegram @username',
    textFail: 'Не указан Telegram @username'
  },
  telegramLink: {
    id: 'telegramLink',
    name: 'Прямая ссылка на Telegram',
    severity: 'minor',
    textSuccess: 'Прямая ссылка на Telegram (https://t.me/username)',
    textFail: 'Нет прямой ссылки на Telegram (https://t.me/username)'
  },
  cityLocation: {
    id: 'cityLocation',
    name: 'Город проживания',
    severity: 'critical',
    textSuccess: 'Проживает: Москва или Санкт-Петербург',
    textFail: 'В поле «Проживает» должно быть Москва или Санкт-Петербург'
  },
  metroStation: {
    id: 'metroStation',
    name: 'Станция метро',
    severity: 'minor',
    textSuccess: 'Указана станция метро',
    textFail: 'Укажите станцию метро'
  },
  mobilityStatus: {
    id: 'mobilityStatus',
    name: 'Готовность к переездам и командировкам',
    severity: 'critical',
    textSuccess: 'Готов к переезду, Готов к командировкам',
    textFail: 'Укажите «готов к переезду: Россия, Москва или Санкт-Петербург» и «готов к командировкам»'
  },
  nameAlphabet: {
    id: 'nameAlphabet',
    name: 'Алфавит ФИО',
    severity: 'critical',
    textSuccess: 'ФИО написано кириллицей',
    textFail: 'ФИО написано латиницей'
  },
  emailAddress: {
    id: 'emailAddress',
    name: 'Электронная почта',
    severity: 'critical',
    textSuccess: 'Указан email',
    textFail: 'Не указан email'
  },
  preferredContact: {
    id: 'preferredContact',
    name: 'Предпочитаемый способ связи',
    severity: 'critical',
    textSuccess: 'Телефон - предпочитаемый способ связи',
    textFail: 'Номер телефона должен быть указан как предпочитаемый вид связи'
  },
  citizenshipStatus: {
    id: 'citizenshipStatus',
    name: 'Гражданство и разрешение на работу',
    severity: 'critical',
    textSuccess: 'Гражданство РФ + разрешение на работу',
    textFail: 'Укажите гражданство и разрешение на работу: Россия'
  },
  resumeFreshness: {
    id: 'resumeFreshness',
    name: 'Актуальность обновления резюме',
    severity: 'critical',
    textSuccess: 'Резюме обновлено не старше 3 дней',
    textFail: 'Резюме обновлено 9 дней назад. Обновляйте резюме минимум раз в 2-3 дня, иначе оно падает в выдаче работодателя'
  }
};

// Вспомогательный массив для вывода списком в шаблоне через @for
export const HEADER_CRITERIA_LIST: CriterionDefinition[] = Object.values(HEADER_CRITERIA_REGISTRY);
