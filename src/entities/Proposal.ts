import { Approval } from "./Approval";

export type Proposal = {
  approvals: Approval[];
  author: string;
  bounty: number;
  category: string;
  completedBy: string | null;
  completedOn: Date | null;
  description: string;
  postedOn: Date;
};
