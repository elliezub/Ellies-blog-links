import SocialIcons from "./components/SocialIcons";
import FunFacts from "./components/FunFacts";
import ThingsILove from "./components/ThingILove";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="flex p-4 mx-auto max-w-7xl justify-center sm:flex-nowrap flex-wrap mt-6 sm:mt-24">
        <div className="max-w-xl mr-0 lg:mr-12 sm:mr-4 sm:min-w-[430px]">
          <h1 className="xl:text-7xl sm:text-6xl text-5xl font-bold mb-4">
            Hi, I&apos;m Ellie.
          </h1>
          <div className="xl:text-xl lg:text-lg lg:pr-12">
            <p className="mb-2">
              Welcome to my portfolio? Well I just wanted to put everything
              together somewhere, so why not here?
            </p>

            <img
              src="/elliepfp.jpg"
              alt="profile"
              className=" rounded-3xl md:hidden"
            />

            <p className="mb-2">
              Here you can see all of my *hopefully* finished projects, links to
              my blogs that are on other sites, & some of my design related
              stuff!
            </p>
            <p>See ya!</p>
          </div>
          <div className="hidden sm:block mt-6 ">
            <SocialIcons />
          </div>
        </div>

        <div className="max-w-[470px] hidden md:block">
          <img src="/elliepfp.jpg" alt="profile" className=" rounded-3xl" />
          <div className="sm:hidden flex justify-center mt-6 ">
            <SocialIcons />
          </div>
        </div>

      </main>

      <FunFacts />
      <ThingsILove/>
    </div>
  );
}
