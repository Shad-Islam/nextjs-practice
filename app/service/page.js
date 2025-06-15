import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="text-center mt-10">
      <p>This is Service Page</p>
      <ul>
        <li>
          <Link href="/service/service1">Service 1</Link>
        </li>
        <li>
          <Link href="/service/service2">Service 2</Link>
        </li>
      </ul>
    </div>
  );
}
