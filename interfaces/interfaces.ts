export interface Diary {
  _id?: string;
  content: string;
  created_at?: Date;
  modified_at?: Date;
}
export interface Log {
  _id?: string;
  content: string;
  category?: string;
  title: string;
  created_at?: Date;
  modified_at?: Date;
}
