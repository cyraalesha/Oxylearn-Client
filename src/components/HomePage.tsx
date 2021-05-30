import React from "react";
import { ProposalCard } from "./ProposalCard";

export const HomePage = () => (
  <div className="container mx-auto w-full h-full mt-5">
    <h1 className="text-3xl font-black">Your Proposals</h1>
    <div className="flex flex-wrap gap-2 ml-10 mt-5">
      <ProposalCard
        proposal={{
          title: "someone teach me nlp",
          approvals: [],
          author: "Joe Mama",
          bounty: 0,
          category: {
            name: "Artificial Intelligence",
            icon: "fas fa-computer",
          },
          chosenOn: null,
          chosenApprover: null,
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro eum excepturi dolore commodi autem odit at dicta ipsa? Est, culpa?",
          postedOn: new Date(),
        }}
      />
    </div>
  </div>
);
