import Link from "next/link";

export default function Collabs() {
  const collabItems = [
    {
      name: "Azure Triumphs w/ Nikos Delis",
      type: "Podcast",
      linkToCollab: "https://open.spotify.com/episode/7fqEw8TIHiPte9AFy2JZNr?si=ticU6_kEQ8Gu9i1B94B4XQ&nd=1&dlsi=98ceb7b44c1a413a",
      description: "Nikos invited me to be on his podcast (It was my first time being on a podcast!) & we ended up talking about our journeys into tech, motivation, learning, and so much more.",
    },
    {
      name: "Clerk Roundtable @ Journeys Conference",
      type: "Roundtable",
      linkToCollab: "https://www.youtube.com/watch?v=hvyn-n8Kqgg&t=86s",
      description: "I got the chance to talk with a bunch of really cool people about the benefits of building in public.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col max-w-7xl mx-auto px-5 mt-12">
      <h1 className="text-3xl font-bold max-w-5xl">
        Podcasts & Speaking things
      </h1>
      <div className="mt-12">
        {collabItems.map((item, index) => (
          <div key={index} className="max-w-4xl mb-6">
            <h2 className="underline text-2xl text-yellow-300 mb-3">
              <Link href={item.linkToCollab} target="_blank">
                {item.name}
              </Link>
            </h2>
            <span className="bg-white text-purple-600 px-3 py-1 rounded-2xl mt-4">{item.type}</span>
            {item.description && <p className="mt-3">{item.description}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}

