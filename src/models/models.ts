//constants
export const DEFAULT_TODO = {
  id: 1,
  date: null,
  importance: '',
  equipment: '',
  message: '',
  responsible: '',
  checked: false,
};

export const DEFAULT_TODO_LIST: ITodo[] = [];

//types
export type AddTodoArgs = Omit<ITodo, 'id' | 'checked' | 'date'>;

//interfaces
export interface ITodo {
  id: number;
  date: Date | null;
  importance: string;
  equipment: string;
  message: string;
  responsible: string;
  checked: boolean;
}

