import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <div>LOGO</div>
      <div>
        <Link className="mx-4" href="/">Log In</Link>
        <Link className="mx-4" href="/">Sign Up</Link>
        <Link className="mx-4" href="/about">About</Link>
      </div>
    </div>
  );
}
