import React from "react";
import { ProposalCard } from "./ProposalCard";

export const HomePage = () => (
  <div>
    <ProposalCard
      proposal={{
        title: "someone teach me nlp",
        approvals: [],
        author: "Joe Mama",
        bounty: 0,
        category: {
          name: "CS",
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
);
