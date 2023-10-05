export interface Task {
  affected_user_id: number;
  description: string;
  id: number;
  state: string;
  tags: string[];
  title: string;
}

export interface Column {
  title: string;
  color: string;
  tasks: Task[];
}