import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-primary/60 text-white flex items-center justify-between rounded-[35px] m-2 p-2 px-3 pr-4 max-w-7xl mx-auto">
      <button className="btn btn-ghost rounded-3xl ml-1 text-2xl">
        {/* maybe add glow hover to this buttton */}
        <Link href="/">
        <img src="\cat-icon-white.png" className="w-9 h-9"></img>
        </Link>
        </button>

      <div className="navbar-center hidden sm:flex">
        <ul className="menu menu-horizontal font-semibold text-xl">
          <li  className="">
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
          <li>
            <Link href="/design">Design</Link>
          </li>
        </ul>
      </div>

      <ul className="menu menu-horizontal sm:hidden">
  <li>
    <Link href="/about">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </Link>
  </li>
  <li>
  <Link href="/blogs">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    </Link>
  </li>
  <li>
   <Link href="/contact">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
    </Link>
  </li>
</ul>


    </nav>
  );
}
