import SocialIcons from "./components/SocialIcons";
import FunFacts from "./components/FunFacts";
import ThingsILove from "./components/ThingILove";

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <div className="w-full border-b-[1.4px] border-indigo-900">
        <main className="max-w-[1200px] mx-auto flex p-4 md:justify-between md:flex-nowrap flex-wrap mt-6 md:mt-24 sm:mt-12 pb-20">
          <div className="lg:mr-12 sm:mr-4">
            <h1 className="md:text-6xl text-5xl font-bold mb-4 md:mx-0 mx-3">
              Hi, I&apos;m Ellie
            </h1>
            <div className="xl:text-xl lg:text-lg lg:pr-12 md:flex md:space-x-10">
              <div className="md:max-w-sm">
                <p className="md:mb-0 mb-5 md:mx-0 mx-3">
                  Welcome to my portfolio site! Well, I just wanted to put
                  everything together somewhere, so why not here?
                </p>
                <div className="hidden md:block mt-6 ">
                  <SocialIcons />
                </div>
              </div>

              <img
                src="/elliepfp.jpg"
                alt="profile"
                className=" rounded-3xl md:hidden"
              />

              <div className="md:mb-0 mb-4 md:mx-0 mx-3 md:mt-0 mt-4 md:max-w-xs space-y-2">
                <p>Here, you can see all of my collabs with other developers, articles on other sites, & design stuff!</p>
                <p>More text here More text here Maybe Button? ? </p>
              </div>
            </div>
          </div>

          <div className="max-w-[300px] hidden md:block">
            <img src="/elliepfp.jpg" alt="profile" className=" rounded-3xl" />
          </div>
        </main>
      </div>

      <ThingsILove />
    </div>
  );
}
