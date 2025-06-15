import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="text-center mt-10">
      <p>This is Service Page</p>
      <ul>
        <li>
          <Link href="/service/1">Service 1</Link>
        </li>
        <li>
          <Link href="/service/2">Service 2</Link>
        </li>
        <li>
          <Link href="/service/3">Service 3</Link>
        </li>
      </ul>
    </div>
  );
}
