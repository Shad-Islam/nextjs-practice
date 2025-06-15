import React from "react";
import serviceData from "../serviceData";
import { notFound } from "next/navigation";

export default function servicePage({ params }) {
  const { id } = params;
  if (id > serviceData.length) {
    notFound();
  }
  const service = serviceData.find((service) => service.id === parseInt(id));

  return (
    <div className="text-center mt-10">
      <h1>{service.name}</h1>
      <p>{service.description}</p>
    </div>
  );
}
