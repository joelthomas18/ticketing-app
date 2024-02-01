"use client";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React from "react";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async () => {
    const res = await fetch("http://localhost:3000/api/deleteTicket", {
      method: "POST",
      body: JSON.stringify(id),
    });
    if (res.ok) {
      router.refresh();
    }
  };

  return (
    <div>
      <FontAwesomeIcon
        icon={faX}
        onClick={deleteTicket}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </div>
  );
};

export default DeleteBlock;
