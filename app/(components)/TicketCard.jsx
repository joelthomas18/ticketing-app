import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import Status from "./Status";
import Link from "next/link";

const TicketCard = ({ id, data }) => {
  const formatTimeStamp = (timeStamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const date = new Date(timeStamp);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };

  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3 ">
        <PriorityDisplay priority={data.priority} />
        <div className="ml-auto">
          <DeleteBlock id={id} />
        </div>
      </div>
      <Link href={`/ticket-page/${id}`}>
        <h4>{data.title}</h4>
        <hr className="h-px border-0 bg-pafe mb-2" />
        <p className="whitespace-pre-wrap">{data.description}</p>
        <div className="flex-grow"></div>
        <div className="flex mt-2 ">
          <div className="flex flex-col">
            <p className="text-xs my-1">{formatTimeStamp(data.createdAt)}</p>

            <ProgressBar progress={data.progress} />
          </div>
          <div className="ml-auto flex items-end">
            <Status status={data.status} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TicketCard;
