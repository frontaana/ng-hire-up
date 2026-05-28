import { CriterionDefinition } from "@ng-hire-up/shared";

export const CONTRACT_CRITERIA_REGISTRY: Record<string, CriterionDefinition> = {
  salaryFormat: {
    id: 'salaryFormat',
    name: 'Фиксация оклада',
    severity: 'critical',
    textSuccess: 'В договоре четко прописан фиксированный белый оклад.',
    textFail: 'Критическая ошибка: оклад разбит на мелкую базовую часть и "премию на усмотрение руководства". Есть риск не получить полную сумму.'
  },
  probationPeriod: {
    id: 'probationPeriod',
    name: 'Испытательный срок',
    severity: 'critical',
    textSuccess: 'Испытательный срок составляет законные 3 месяца или меньше.',
    textFail: 'Критическая ошибка: испытательный срок превышает 3 месяца (для рядовых сотрудников это незаконно по ТК РФ).'
  },
  workSchedule: {
    id: 'workSchedule',
    name: 'График и учет времени',
    severity: 'minor',
    textSuccess: 'Указан фиксированный график (например, 5/2, 40 часов в неделю).',
    textFail: 'Внимание: размытая формулировка про "ненормированный рабочий день" без компенсаций или обязательный тайм-трекер со скриншотами экрана.'
  },
  overtimePay: {
    id: 'overtimePay',
    name: 'Оплата переработок (овертаймов)',
    severity: 'critical',
    textSuccess: 'Прописан стандартный порядок оплаты овертаймов по закону.',
    textFail: 'Критическая ошибка: присутствует фраза "овертаймы входят в стоимость оклада" или переработки не оплачиваются.'
  },
  ndaAndNca: {
    id: 'ndaAndNca',
    name: 'Соглашение о неконкуренции (NCA)',
    severity: 'critical',
    textSuccess: 'NDA адекватный, запрета на работу в других ИТ-компаниях после увольнения нет.',
    textFail: 'Критическая ошибка: жесткий запрет работать на конкурентов (NCA) в течение 1–2 лет после увольнения (в РФ это часто незаконно, но приносит проблемы).'
  },
  intellectualProperty: {
    id: 'intellectualProperty',
    name: 'Интеллектуальная собственность',
    severity: 'minor',
    textSuccess: 'Четко указано, что права на код переходят компании только при наличии служебного задания.',
    textFail: 'Внимание: пункт сформулирован так, что всё, что вы напишете дома на выходных, автоматически принадлежит работодателю.'
  },
  terminationTerms: {
    id: 'terminationTerms',
    name: 'Условия увольнения и "золотой парашют"',
    severity: 'minor',
    textSuccess: 'Увольнение строго по соглашению сторон или собственному желанию с законными выплатами.',
    textFail: 'Внимание: прописаны скрытые штрафы или удержания из финальной выплаты за "обучение" или "неотработанные дни".'
  }
};

export const CONTRACT_CRITERIA_LIST: CriterionDefinition[] = Object.values(CONTRACT_CRITERIA_REGISTRY);
