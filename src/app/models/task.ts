export interface ITask {
    id: number;
    title: string;
    description: string;
    startDate: Date;
    endDate: Date;
    status: string;
    comments?: string[]; 
  }
  

  