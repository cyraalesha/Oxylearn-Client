import React from "react";
import { Proposal } from "../entities/Proposal";

export const ProposalCard = ({ proposal }: { proposal: Proposal }) =>
  <div className="flex flex-col bg-item roudned-xl p-5">
    <span className="text-xl mb-2">{proposal.title}</span>
    <span className="text-xl">{proposal.category.name}</span>
    <div className="flex justify-between mt-auto">
      <button className="px-8 py-2 rounded-full bg-blue">Open</button>
      {proposal.approvals.length > 0
        ? proposal.chosenApprover!.name
        : <span className="text-gray">No Approvals Yet</span>
      }
    </div>
  </div>
