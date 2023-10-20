import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <h1>Hello World</h1>
      <Link href="/about">Go to about page</Link>
    </div>
  );
}
