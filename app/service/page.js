import Link from "next/link";
import serviceData from "./serviceData";

export default function ServicePage() {
  return (
    <div className="text-center mt-10">
      <p>This is Service Page</p>
      <ul>
        {serviceData.map((service) => (
          <li key={service.id}>
            <Link href={`/service/${service.id}`}>{service.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
