"use client";

const handleDivClick = (url) => {
  window.open(url, "_blank");
};

export default function Design() {
  return (
    <main className="max-w-6xl m-auto min-h-screen pb-12 mt-6 sm:px-8">
      <div className="md:grid md:grid-cols-4 gap-6 flex flex-wrap mt-12">
        <div className="first-title-grid md:col-span-1 md:row-span-1 rounded-2xl cursor-pointer min-w-full mb-12 p-3 ">
          <h1 className="text-5xl font-bold">My Design Stuff</h1>
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
          <h2 className="text-center text-2xl font-bold mt-8 max-w-xl mx-auto"> TBD</h2>
        </div>
        <div
          className="md:col-span-3 md:row-span-1 rounded-2xl cursor-pointer min-h-[180px] min-w-full"
        >
          <h2 className="text-center text-2xl font-bold mt-8 max-w-xl mx-auto">
            These are a few design things that I&apos;ve worked on. I&apos;m definitely not a pro, but feel free to check them out!
          </h2>
        </div>
      </div>
    </main>
  );
}
