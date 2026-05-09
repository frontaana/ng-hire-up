import { IdentifiedEntity } from '@ng-highcharts-canvas/shared';

export enum Company {
  none = 'none',
  V4Scale = 'v4scale',
  Nexign = 'nexign',
  Tinkoff = 'tinkoff',
  Yandex = 'yandex',
  Tetra = 'tetra',
}

// Технологии (верхний уровень)
export enum Technology {
  JS = 'JavaScript',
  TS = 'TypeScript',
  Angular = 'Angular',
  Testing = 'Testing',
  CICD = 'CI/CD',
}

// Разделы для JavaScript
export enum JSTopic {
  EventLoop = 'eventloop',
  Promises = 'promises',
  Types = 'types',
  Other = 'other',
}

// Разделы для Angular (пример)
export enum AngularTopic {
  Signals = 'signals',
  RxJS = 'rxjs',
  Components = 'components',
}

export enum Difficulty {
  Junior = 'Junior',
  Middle = 'Middle',
  Senior = 'Senior',
}

// Объединяем все возможные топики в один тип
export type ArticleTopic = JSTopic | AngularTopic | string;

export interface Article extends IdentifiedEntity {
  // extends IdentifiedEntity
  title: string;
  question: string;
  answer: string;
  description: string;
  company: Company;

  // Новые поля для классификации
  technology: Technology; // Например: Technology.JS
  topic: ArticleTopic; // Например: JSTopic.EventLoop

  difficulty?: Difficulty;
}

/**
 * http://localhost:3000/articles?technology=JavaScript — отфильтрует только JS
 * http://localhost:3000/articles?difficulty=Middle — только средний уровень
 */

/**
 * lastReviewed: Date — для алгоритмов интервального повторения
 * rating: number — сложность вопроса лично для тебя (1–5)
 * isSolved: boolean — для задач (coding tasks)
 */
