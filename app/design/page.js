"use client";
import Link from "next/link";

export default function Design() {
  const projects = [
    {
      name: "💜 My first portfolio site 💜",
      projectLink: "https://elliezub.com/",
      otherLink: "https://github.com/elliezub/Personal-Portfolio",
      projectImg: "/cartoonpfpsquare.png",
      description: "this is my first ever portfolio site made with html, css & js",
      project: "Live",
      other: "Code",
    },
    {
      name: "Journeys Conference",
      projectLink: "https://hub.builtfor.dev/public/events/fundraiser-journeys-presented-by-tech-commute-conference-and-fundraiser-2024-04-26?agenda_day=661966e57182969b4ec97642&agenda_track=661966e57182969b4ec97654&agenda_stage=661966e57182969b4ec97648&agenda_filter_view=stage&agenda_view=list",
      otherLink: "https://www.behance.net/gallery/198838405/Journeys-Virtual-Conference",
      projectImg: "/journeysimg.png",
      description: "",
      project: "Event",
      other: "Design",
    },
    {
      name: "TODO",
      projectLink:
        "https://code-maze.com/csharrp-find-latitude-and-longitude-of-a-location/",
      otherLink: "https://github.com/elliezub/Personal-Portfolio",
      projectImg: "/livecoffeechat.png",
      description: "Find the Latitude and Longitude of a Location in C#",
      project: "Live",
      other: "Code",
    },
    {
      name: "TODO",
      projectLink:
        "https://code-maze.com/csharp-calculate-the-difference-in-months-between-two-dates/",
      otherLink: "https://github.com/elliezub/Personal-Portfolio",
      projectImg: "/livecoffeechat.png",
      description: "Difference in Months Between Two Dates",
      project: "Live",
      other: "Code",
    },
  ];

  const handleDivClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <main className="max-w-7xl mx-auto px-5 mt-12 text-white">
      <h1 className="md:text-4xl text-3xl font-bold max-w-5xl">
        Code & Design stuff
      </h1>

      <div className="gap-4 flex flex-col mt-8 w-full md:grid md:grid-cols-3">
        {projects.map((project, index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            <div
              className={`parent-div sm:col-span-1 sm:row-span-1 flex flex-col justify-end cursor-pointer min-w-full min-h-[380px]
                bg-cover bg-center shadow-md`}
              onClick={() => handleDivClick(project.projectLink)}
              role="button"
              aria-label={`See project: ${project.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleDivClick(project.projectLink);
              }}
              style={{
                backgroundImage: `url(${project.projectImg})`,
              }}
            >
              <div className=" bg-violet-300/70 min-h-[100px] p-4 hover-title-div flex flex-col items-center">
                <p className="text-indigo-950 text-2xl font-semibold">
                  {project.name}
                </p>
                <div className="mt-3 mb-2 flex space-x-3 text-lg">
                <Link href={project.otherLink} className="bg-violet-600 py-1 px-4 rounded-xl min-w-[90px] text-center" target="_blank">{project.other}
                </Link>
                <Link href={project.projectLink} className="bg-indigo-950 py-1 px-4 rounded-xl min-w-[90px] text-center" target="_blank">{project.project}
                </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

{
  /* <div className="md:grid md:grid-cols-4 gap-6 flex flex-wrap md:mt-12">
<div className="first-title-grid md:col-span-1 md:row-span-1 rounded-2xl cursor-pointer min-w-full md:mb-12 px-2 pt-4">
  <h1 className="md:text-4xl text-3xl font-bold md:px-0 text-center md:text-left">Code & Design stuff</h1>
</div>

<div
  className="journeys-box md:col-span-2 md:row-span-2 rounded-2xl cursor-pointer min-w-full md:min-h-[380px] min-h-[380px] design-box"
  onClick={() =>
    handleDivClick(
      "https://www.behance.net/gallery/198838405/Journeys-Virtual-Conference"
    )
  }
></div>

<div
  className="icodethis-box p-4 md:col-span-1 md:row-span-2 rounded-2xl cursor-pointer min-h-[350px] min-w-full design-box"
  onClick={() =>
    handleDivClick(
      "https://icodethis.com/elliezub"
    )
  }
>

</div>

<div
  className="design-tbd-box md:col-span-1 md:row-span-2 rounded-2xl cursor-pointer min-h-[180px] min-w-full design-box"
  onClick={() =>
    handleDivClick(
      ""
    )
  }
>
  <h2 className="text-center text-2xl font-bold mt-8 max-w-xl mx-auto"> ??</h2>
</div>
<div
  className="md:col-span-3 md:row-span-1 rounded-2xl cursor-pointer min-h-[180px] min-w-full md:block hidden"
>
  <h2 className="text-center text-2xl font-bold md:mt-8 mt-3 max-w-xl mx-auto">
    These are a few design things that I&apos;ve worked on. I&apos;m definitely not a pro, but feel free to check them out!
  </h2>
</div>
</div> */
}
