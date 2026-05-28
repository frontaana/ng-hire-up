type CriterionSeverity = 'critical' | 'minor';
type CriterionStatus = 'success' | 'warning' | 'error';

// Интерфейс конфигурации самого пункта в справочнике
export interface CriterionDefinition {
  id: string;
  name: string;
  severity: CriterionSeverity; // 'critical' -> при ошибке даст error, 'minor' -> warning
  textSuccess: string;         // Текст 1 (когда всё хорошо)
  textFail: string;            // Текст 2 (когда нашли несоответствие)
}

/**
 * TODO integrate EvaluationUiState and CriterionResult
 */
// Интерфейс для UI-отображения (цвета и иконки)
export interface EvaluationUiState {
  status: CriterionStatus;
  color: 'green' | 'orange' | 'red';
  icon: 'check' | 'exclamation' | 'cross';
  text: string;
}

export interface CriterionResult {
  criterionId: string; // Ссылка на ID из справочника (например, 'github')
  isValid: boolean;     // Пройдена ли проверка
  comment?: string;     // Конкретная деталь по резюме
}
