"use client";
import { useState } from "react";

export default function Blogs() {
  const blogs = [
    {
      name: "How to Generate a Random Color Name in C#",
      blogLink: "https://code-maze.com/csharp-generate-a-random-color-name/",
      description: "Learn how to generate a random color name in C#",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl flex flex-col random-color-blog cursor-pointer min-w-full min-h-[180px]",
    },
    {
      name: "Intro to Coding with Scratch",
      blogLink: "https://dev.to/elliezub/intro-to-coding-with-scratch-2e86",
      description: "",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl flex flex-col cursor-pointer scratch-blog min-w-full min-h-[180px]",
    },
    {
      name: "How to Find the Latitude and Longitude of a Location in C#",
      blogLink:
        "https://code-maze.com/csharrp-find-latitude-and-longitude-of-a-location/",
      description:
        "Find the latitude and longitude of a location in C#",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-2 rounded-2xl flex flex-col cursor-pointer overflow-hidden min-w-full min-h-[180px] location-blog",
    },
    {
      name: "Magical C# Classes",
      blogLink: "https://dev.to/elliezub/magical-c-classes-3heg",
      description: "Learn about C# classes, but with wizard examples!",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full sm:min-h-[250px] min-h-[180px] wizard-classes-blog",
      isHiddenRev: true,
    },
    {
      name: "Calculate the Difference in Months Between Two Dates in C#",
      blogLink:
        "https://code-maze.com/csharp-calculate-the-difference-in-months-between-two-dates/",
      description: "Find the Difference in Months Between Two Dates in C#",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full min-h-[180px] months-blog",
      isHiddenRev: true,
    },
    {
      name: "Should you do #100DaysOfCode?",
      blogLink: "https://dev.to/elliezub/should-you-do-100daysofcode-3p0h",
      description: "",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full sm:min-h-[270px] min-h-[180px] days-blog",
      isHiddenRev: true,
    },
  ];

  const [showReviews, setShowReviews] = useState(false);
  const [buttonText, setButtonText] = useState("SEE MORE");

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setButtonText(buttonText === "SEE MORE" ? "SHOW LESS" : "SEE MORE");
  };

  const handleDivClick = (url) => {
    window.open(url, "_blank");
  };

  //   TODO: ADD FILTER OPTION for what website its on and topics? Like some tags on the top you can select

  return (
    <main className="max-w-6xl m-auto  pb-12 mt-6 sm:px-8 blog-main">
      <h1 className="md:text-5xl text-4xl font-bold md:px-0 text-center md:text-left block sm:hidden mb-6 mt-10">Articles</h1>
      <div className="sm:grid sm:grid-cols-3 gap-4 flex flex-wrap blog-container">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`${blog.uniqueClassNames} ${
              blog.isHiddenRev && !showReviews ? "hidden" : "sm:flex flex"
            }`}
            onClick={() => handleDivClick(blog.blogLink)}
            role="button"
            aria-label={`Read blog: ${blog.name}`}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleDivClick(blog.blogLink);
            }}
          >
            <p className="m-4  desc-box h-full flex text-[20px] items-end">
              <span>{blog.description}</span>
            </p>
          </div>
        ))}
      </div>

      <div className="w-full justify-center flex sm:hidden">
        <button
          className="bg-violet-100 mt-6 text-xl p-3 px-6 font-bold rounded-3xl hover:bg-purple-200 transition ease-in-out duration-300 text-indigo-900"
          onClick={toggleReviews}
          aria-label={buttonText}
          aria-expanded={showReviews}
        >
          {buttonText}
        </button>
      </div>
    </main>
  );
}
