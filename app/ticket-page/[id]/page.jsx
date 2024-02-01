import TicketForm from "@/app/(components)/TicketForm";
import React from "react";

const getTicketById = async (id) => {
  try {
    const res = await fetch("http://localhost:3000/api/getTicketById", {
      method: "POST",
      body: JSON.stringify(id),
      cache: "no-cache",
    });
    if (!res.ok) {
      throw new Error("failed to get ticket");
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

const TicketPage = async ({ params }) => {
  const EDIT_MODE = params.id === "new" ? false : true;
  let ticketData = {};

  if (EDIT_MODE) {
    ticketData = await getTicketById(params.id);
    ticketData = ticketData.res;
  } else {
    ticketData = {
      _id: "new",
    };
  }

  return (
    <div>
      <TicketForm ticket={ticketData} />
    </div>
  );
};

export default TicketPage;
