import { Approval } from "./Approval";
import { Category } from "./Category";
import { User } from "./User";

export type Proposal = {
  title: string;
  approvals: Approval[];
  author: string;
  bounty: number;
  category: Category;
  chosenApprover: User | null;
  chosenOn: Date | null;
  description: string;
  postedOn: Date;
};
