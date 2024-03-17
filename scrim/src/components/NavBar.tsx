import Link from "next/link";
import Login from "./Login";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between">
      <Link href="/">LOGO</Link>
      <div className="flex">
        <Login/>
        <Link className="mx-4" href="/">Sign Up</Link>
        <Link className="mx-4" href="/about">About</Link>
      </div>
    </div>
  );
}
