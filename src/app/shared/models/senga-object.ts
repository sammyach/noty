export interface SengaModel{
  id: number;
  icon: string;
  type: string;
  comments: number;
  likes: number;
  time: string;
  url: string;
  backColor?: string;
  description?: string;
}

export interface SengaNoteModel{
  id: number;
  title: string;
  backColor?: string;
  description?: string;
  createdOn?: Date;
  lastModifiedOn?: Date;
  public: boolean;
}
