import Image from "next/image";
export default function Home() {
  return (
    <main className="flex p-24 md:min-h-[90vh] max-w-7xl mx-auto outline  justify-center">
      <div className="max-w-lg mr-6">
        <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Ellie.</h1>

        <p className="mb-2">
          Welcome to my portfolio? Well I just wanted to put everything together
          somewhere, so why not here?
        </p>

        <p className="mb-2">
          Here you can see all of my *hopefully* finished projects, links to my
          blogs that are on other sites, & some of my design related stuff!
        </p>
        <p>See ya!</p>
      </div>

      <img
        src="/elliepfp.jpg"
        alt="profile"
        className="w-auto max-h-[350px] rounded-3xl"
      />
    </main>
  );
}
