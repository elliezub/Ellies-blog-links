import Link from "next/link";
import Image from "next/image";
export default function Collabs() {
  const collabItems = [
    {
      name: "Live Coffee Chat",
      types: ["Twitter Space", "Live Stream"],
      linkToCollab: "https://spacesdashboard.com/u/elliezub",
      description:
        "Once a week I host a group coffee chat space where people can connect with others in the tech community. We don't necessarily have a specific topic, but the goal is to make new friends, have fun, & *hopefully* learn new things.",
      sideImg: "/livecoffeechat.png",
    },
    {
      name: "Azure Triumphs w/ Nikos Delis",
      types: ["Podcast"],
      linkToCollab:
        "https://open.spotify.com/episode/7fqEw8TIHiPte9AFy2JZNr?si=ticU6_kEQ8Gu9i1B94B4XQ&nd=1&dlsi=98ceb7b44c1a413a",
      description:
        "Nikos invited me to be on his podcast (It was my first time being on a podcast!) & we ended up talking about our journeys into tech, motivation, learning, and so much more.",
      sideImg: "/azurelogo.png",
    },
    {
      name: "Journeys Conference",
      types: ["Clerk Roundtable", "Conference"],
      linkToCollab: "https://www.youtube.com/watch?v=hvyn-n8Kqgg&t=86s",
      description: (
        <>
          I had the opportunity to discuss the benefits of building in public
          with a group of insightful people. This roundtable chat occurred
          during Journeys Conference, a fundraising event hosted by the{" "}
          <Link
            href="https://thetc.co/"
            target="_blank"
            className="underline text-teal-200"
          >
            Tech Commute
          </Link>
          .
        </>
      ),
      sideImg: "/journeysimg.png",
    },
  ];

  return (
    <main className="flex blogPage flex-col max-w-7xl mx-auto px-5 mt-12">
      <h1 className="md:text-4xl text-3xl font-bold max-w-5xl">
        Podcasts, Speaking, & Community things
      </h1>
      <div className="md:mt-8 mt-6 ">
        {collabItems.map((item, index) => (
          <div key={index} className="max-w-5xl mb-6 flex">
            <div className="w-[170px] h-[170px] flex-shrink-0 mr-4 hidden sm:block shadow-md">
              <Image
                src={item.sideImg}
                alt={item.name}
                width={170}
                height={170}
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            <div>
              <div className="flex">
                <div className="w-[85px] h-[85px] flex-shrink-0 mr-2 block sm:hidden">
                  <Image
                    src={item.sideImg}
                    alt={item.name}
                    width={85}
                    height={85}
                    objectFit="cover"
                    className="rounded-2xl"
                  />
                </div>
                <div>
                  <h2 className="underline md:text-[1.7rem] text-2xl text-teal-200 mb-2">
                    <Link href={item.linkToCollab} target="_blank">
                      {item.name}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.types.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className="bg-white text-indigo-900 px-3 py-1 rounded-2xl md:text-sm sm:text-xs text-[9px] font-semibold"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {item.description && (
                <p className="mt-3 md:text-[17px] text-[15px]">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 bg-gradient-to-tr from-slate-950 to-violet-950 md:px-10 lg:py-8 lg:px-20 px-6 py-8 rounded-2xl shadow-md flex sm:justify-between sm:items-center sm:flex-row flex-col items-start">
        <div className="">
          <h1 className="text-2xl font-bold">Let&apos;s collaborate</h1>
          <p className="font-light mt-1 max-w-2xl sm:max-w-4xl">
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
          className="bg-violet-300 p-2 px-4 rounded-xl shadow-md text-slate-950 font-semibold whitespace-nowrap sm:ml-6 sm:mt-0 mt-4"
        >
          Contact Me
        </Link>
      </div>
    </main>
  );
}
