"use client";
import { useState } from "react";

export default function Blogs() {
  const blogs = [
    {
      name: "Generate a Random Color Name in C#",
      blogLink: "https://code-maze.com/csharp-generate-a-random-color-name/",
      description:
        "This article shows you how to Generate a Random Color Name in C#",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl flex flex-col random-color-blog cursor-pointer min-w-full min-h-[180px]",
    },
    {
      name: "Intro to Coding with Scratch",
      blogLink: "https://dev.to/elliezub/intro-to-coding-with-scratch-2e86",
      description: "Intro to Coding with Scratch",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl flex flex-col cursor-pointer scratch-blog min-w-full min-h-[180px]",
    },
    {
      name: "Find the Latitude and Longitude of a Location in C#",
      blogLink:
        "https://code-maze.com/csharrp-find-latitude-and-longitude-of-a-location/",
      description: "Find the Latitude and Longitude of a Location in C#",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-2 rounded-2xl flex flex-col cursor-pointer overflow-hidden min-w-full min-h-[180px] location-blog",
    },
    {
      name: "Magical C# Classes",
      blogLink: "https://dev.to/elliezub/magical-c-classes-3heg",
      description: "Magical C# Classes",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full sm:min-h-[250px] min-h-[180px] wizard-classes-blog",
      isHiddenRev: true,
    },
    {
      name: "Difference in Months Between Two Dates",
      blogLink:
        "https://code-maze.com/csharp-calculate-the-difference-in-months-between-two-dates/",
      description: "Difference in Months Between Two Dates",
      uniqueClassNames:
        "sm:col-span-1 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full min-h-[180px] months-blog",
      isHiddenRev: true,
    },
    {
      name: "Should you do #100DaysOfCode?",
      blogLink: "https://dev.to/elliezub/should-you-do-100daysofcode-3p0h",
      description: "Should you do #100DaysOfCode?",
      uniqueClassNames:
        "sm:col-span-2 sm:row-span-1 rounded-2xl sm:flex flex-col cursor-pointer min-w-full sm:min-h-[270px] min-h-[180px] days-blog",
      isHiddenRev: true,
    },
  ];

  const [showReviews, setShowReviews] = useState(false);
  const [buttonText, setButtonText] = useState("SEE MORE");
  const [denseFormat, setDenseFormat] = useState(false);

  const toggleReviews = () => {
    setShowReviews(!showReviews);
    setButtonText(buttonText === "SEE MORE" ? "SHOW LESS" : "SEE MORE");
  };

  const handleDivClick = (url) => {
    window.open(url, "_blank");
  };

  const handleFormatChange = (e) => {
    setDenseFormat(e.target.checked);
  };

  return (
    <main className="max-w-7xl mx-auto px-5 mt-12 blog-main text-white">
      <div className="flex justify-between">
        <h1 className="md:text-4xl text-3xl font-bold max-w-5xl">
          Articles & Blog posts
        </h1>
        <div className="pr-1">
          <label className="label cursor-pointer">
            <span className="label-text text-white pr-4 text-lg">
              Dense Format
            </span>
            <input
              type="checkbox"
              className="checkbox border-orange-400 checked:border-indigo-800 [--chkbg:theme(colors.indigo.600)] [--chkfg:orange]"
              onChange={handleFormatChange}
            />
          </label>
        </div>
      </div>

      {!denseFormat ? (
        <div className="sm:grid sm:grid-cols-3 gap-4 flex flex-wrap blog-container mt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className={`${blog.uniqueClassNames} ${
                blog.isHiddenRev && !showReviews ? "hidden" : "sm:flex flex"
              } shadow-md`}
              onClick={() => handleDivClick(blog.blogLink)}
              role="button"
              aria-label={`Read blog: ${blog.name}`}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleDivClick(blog.blogLink);
              }}
            >
              <p className="m-4 desc-box h-full flex text-[20px] items-end">
                <span>{blog.name}</span>
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="dense-format mt-8">
          {blogs.map((blog, index) => (
            <div key={index} className="dense-blog-item mb-4">
              <h1 className="text-xl font-bold underline">
                <a
                  href={blog.blogLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {blog.name}
                </a>
              </h1>
              <p>{blog.description}</p>
            </div>
          ))}
        </div>
      )}

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
