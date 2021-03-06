import React from "react";
import { Proposal } from "../entities/Proposal";

export const ProposalCard = ({ proposal }: { proposal: Proposal }) => (
  <div className="flex flex-col rounded-xl p-7 w-96 h-48 bg-secondary">
    <span className="text-xl mb-1 font-bold">{proposal.title}</span>
    <span className="text-sm text-muted">{proposal.category.name}</span>
    <div className="flex justify-between items-center mt-auto">
      <button className="px-8 py-2 rounded-full bg-blue text-sm focus:outline-none focus:ring">
        Open
      </button>
      {proposal.approvals.length > 0 ? (
        proposal.chosenApprover!.name
      ) : (
        <span className="text-muted">No Approvals Yet</span>
      )}
    </div>
  </div>
);
