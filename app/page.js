import SocialIcons from "./components/SocialIcons";
import FunFacts from "./components/FunFacts";
import ThingsILove from "./components/ThingILove";

export default function Home() {
  return (
    <div className="md:min-h-screen">
      <main className="flex p-4 mx-auto max-w-6xl md:justify-between md:flex-nowrap flex-wrap mt-6 md:mt-24 sm:mt-12">
        <div className="md:max-w-xl mx-auto lg:mr-12 sm:mr-4 ">
          <h1 className="xl:text-7xl sm:text-6xl text-5xl font-bold mb-4 md:mx-0 mx-3">
            Hi, I&apos;m Ellie.
          </h1>
          <div className="xl:text-xl lg:text-lg lg:pr-12">
            <p className="md:mb-2 mb-5 md:mx-0 mx-3">
              Welcome to my portfolio? Well I just wanted to put everything
              together somewhere, so why not here?
            </p>

            <img
              src="/elliepfp.jpg"
              alt="profile"
              className=" rounded-3xl md:hidden"
            />

            <p className="mb-2 md:mx-0 mx-3 md:mt-0 mt-4">
              Here you can see all of my *hopefully* finished projects, links to
              my blogs that are on other sites, & some of my design related
              stuff!
            </p>
            <p className="md:mx-0 mx-3 md:mt-0 mt-4">See ya!</p>
          </div>
          <div className="hidden md:block mt-6 ">
            <SocialIcons />
          </div>
        </div>

        <div className="max-w-[470px] hidden md:block">
          <img src="/elliepfp.jpg" alt="profile" className=" rounded-3xl" />
        </div>

      </main>
      <ThingsILove/>
    </div>
  );
}
