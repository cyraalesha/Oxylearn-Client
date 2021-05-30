import React from "react";
import { FiPlus } from "react-icons/fi";
import { ProposalCard } from "./ProposalCard";

export const HomePage = () => (
  <div className="px-10 mt-10">
    <div className="container mx-auto">
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
      <button className="rounded-full h-14 w-14 bg-blue grid place-items-center absolute bottom-4 right-4 focus:outline-none focus:ring">
        <FiPlus className="font-black text-3xl" />
      </button>
    </div>
  </div>
);
