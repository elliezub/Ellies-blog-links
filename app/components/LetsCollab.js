import Link from "next/link";

export default function LetsCollab() {
  return (
    <div className="mt-4 bg-gradient-to-tr from-indigo-500 to-violet-600 md:px-10 lg:py-8 lg:px-20 px-6 py-8 rounded-2xl shadow-md flex sm:justify-between sm:items-center sm:flex-row flex-col items-start">
      <div className="">
        <h1 className="text-3xl font-bold">Let&apos;s collaborate</h1>
        <p className=" mt-2 max-w-2xl sm:max-w-4xl text-[18px]">
          If you&apos;re interested in collaborating (Twitter space,
          live-stream, podcast etc.) Shoot me a DM on{" "}
          <Link href="https://x.com/elliezub" target="_blank" className="">
            X/Twitter
          </Link>
          !
        </p>
      </div>
      <Link
        href="https://x.com/elliezub"
        target="_blank"
        className="bg-violet-200 text-indigo-950 p-2 px-4 rounded-xl shadow-md font-bold whitespace-nowrap sm:ml-6 sm:mt-0 mt-6 text-lg"
      >
        Contact Me
      </Link>
    </div>
  );
}
