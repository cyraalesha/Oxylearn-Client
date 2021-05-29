export type Request = {
  author: string;
  bounty: number;
  category: string;
  completedBy: string | null;
  completedOn: Date | null;
  description: string;
  postedOn: Date;
};
