export interface TaskState {
  tasks: Task[];
  isPending: boolean;
  error: string | null | undefined;
}

export interface Task {
  affected_user_id: number | null;
  description: string;
  id: number;
  state: string;
  tags: string[];
  title: string;
}

export interface Column {
  title: string;
  bgcolor: string;
  tasks: Task[];
}
