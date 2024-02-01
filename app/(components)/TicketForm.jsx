"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
const TicketForm = ({ ticket }) => {
  const EDIT_MODE = ticket._id === "new" ? false : true;

  const router = useRouter();
  const startingData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    status: "not started",
    category: "hardware problem",
  };

  if (EDIT_MODE) {
    startingData.title = ticket.title;
    startingData.description = ticket.description;
    startingData.priority = ticket.priority;
    startingData.progress = ticket.progress;
    startingData.status = ticket.status;
    startingData.category = ticket.category;
  }

  const [formData, setFormData] = useState(startingData);

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDIT_MODE) {
      const res = await fetch("/api/editTicket", {
        method: "PUT",
        body: JSON.stringify({ id: ticket._id, formData }),
      });
      if (!res.ok) {
        throw new Error("Failed to update Ticket");
      }
    } else {
      const res = await fetch("/api/createTicket", {
        method: "POST",
        body: JSON.stringify(formData),
        "content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Failed to create Ticket");
      }
    }
    router.push("/");
    router.refresh();
  };
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3 w-1/2"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDIT_MODE ? "Update Your Ticket" : "Create your Ticket"}</h3>
        <label>Title</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={handleChange}
          required={true}
          value={formData.title}
        />
        <textarea
          id="description"
          name="description"
          onChange={handleChange}
          required={true}
          value={formData.description}
          rows="5"
        />
        <label>Category</label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="hardware problem">hardware problem</option>
          <option value="software problem">software problem</option>
          <option value="project">project</option>
        </select>

        <label>Priority</label>
        <div>
          <input
            type="radio"
            name="priority"
            id="priority-1"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            type="radio"
            name="priority"
            id="priority-2"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            type="radio"
            name="priority"
            id="priority-3"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            type="radio"
            name="priority"
            id="priority-4"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            type="radio"
            name="priority"
            id="priority-5"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>
        <label>Progress</label>
        <input
          type="range"
          id="progress"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          onChange={handleChange}
        />
        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="not started">not started</option>
          <option value="started">started</option>
          <option value="done">done</option>
        </select>
        <input
          type="submit"
          className="btn"
          value={EDIT_MODE ? "Update Ticket" : "Create Ticket"}
        />
      </form>
    </div>
  );
};

export default TicketForm;
