type TrapCategory = 'money' | 'time' | 'law' | 'ip';

interface ContractTrap {
  id: string;
  name: string;
  frequency: number; // Как часто встречается в сомнительных договорах в %
  category: TrapCategory;
  description: string;
}

export const CONTRACT_TRAPS_REGISTRY: Record<string, ContractTrap> = {
  disguisedSalary: {
    id: 'disguisedSalary',
    name: 'Премиальная ловушка (Оклад 30% + Премия 70%)',
    frequency: 68,
    category: 'money',
    description: 'Самый частый способ манипуляции: при любом конфликте премию могут законно урезать.'
  },
  hiddenNda: {
    id: 'hiddenNda',
    name: 'Штрафы за разглашение коммерческой тайны от 500k+',
    frequency: 54,
    category: 'law',
    description: 'Огромные несоразмерные штрафы в NDA за случайное упоминание стека или процессов в соцсетях.'
  },
  weekendWork: {
    id: 'weekendWork',
    name: 'Размытый "ненормированный" рабочий день',
    frequency: 47,
    category: 'time',
    description: 'Включается в договор, чтобы бесплатно привлекать вас к релизам по выходным и ночам.'
  },
  allYourCodeIsOurs: {
    id: 'allYourCodeIsOurs',
    name: 'Присвоение личных пет-проектов',
    frequency: 35,
    category: 'ip',
    description: 'Юристы пишут пункт так, что любой ваш код на GitHub во время работы в компании признается собственностью работодателя.'
  },
  equipmentFine: {
    id: 'equipmentFine',
    name: 'Штрафы за износ рабочей техники',
    frequency: 18,
    category: 'money',
    description: 'Попытка повесить на разработчика стоимость ремонта ноутбука при естественном износе.'
  }
};

export const CONTRACT_TRAPS_LIST: ContractTrap[] = Object.values(CONTRACT_TRAPS_REGISTRY)
  .sort((a, b) => b.frequency - a.frequency);
