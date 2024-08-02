import Link from "next/link";
import Image from "next/image";
import LetsCollab from "../components/LetsCollab";
export default function Collabs() {
  const collabItems = [
    {
      name: "Live Coffee Chat",
      types: ["Twitter Space", "Live Stream", "Ongoing"],
      linkToCollab: "https://spacesdashboard.com/u/elliezub",
      description:
        "Once a week I host a group coffee chat space where people can connect with others in the tech community. I host the space version on Twitter/X, and the live-stream version on Twitch and YouTube.",
      sideImg: "/livecoffeechat.png",
    },
    {
      name: "THAT Conference WI 2024",
      types: ["Live Stream", "Conference"],
      linkToCollab: "that conf youtube link",
      description:
        'During THAT conference I got to participate in a panel discussion hosted by Shashi Lo about THAT Conference, a short interview with James Quick, and got to participate in Andrew\'s "Code Confessions" podcast.',
      sideImg: "/livecoffeechat.png",
    },
    {
      name: "DevMar Dots w/ Sophia Iroegbu",
      types: ["Podcast", "Live Stream"],
      linkToCollab: "https://www.youtube.com/watch?v=uWNR3z3Hk9k&t=4196s",
      description: (
        <>
          <Link
            href="https://x.com/sophiairoegbu_"
            target="_blank"
            className="underline text-teal-200"
          >
            Sophia
          </Link>{" "}
          invited me on the DevMar Dot&apos;s podcast to talk about &quot;The
          Do&apos;s & Don&apos;ts of Technical Writing&quot;.
        </>
      ),
      sideImg: "/beacamppurple.jpg",
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
      <div className="md:mt-8 mt-6 font-medium">
        {collabItems.map((item, index) => (
          <div key={index} className="mb-6 flex ">
            <div className="w-[185px] h-[185px] flex-shrink-0 mr-4 hidden md:block shadow-md rounded-2xl">
              <Image
                src={item.sideImg}
                alt={item.name}
                width={185}
                height={185}
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>

            <div>
              <div className="flex">
                <div>
                  <h2 className="underline md:text-[1.7rem] text-3xl text-teal-200 mb-2">
                    <Link href={item.linkToCollab} target="_blank">
                      {item.name}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {item.types.map((type, typeIndex) => (
                      <span
                        key={typeIndex}
                        className="bg-white text-indigo-900 px-3 py-1 rounded-2xl text-sm font-semibold"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {item.description && (
                <p className="mt-3 lg:text-2xl text-xl text-pretty">
                  {item.description}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <LetsCollab />
    </main>
  );
}
