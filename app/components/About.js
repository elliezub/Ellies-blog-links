export default function About() {
  const skills = [
    "C#",
    ".NET Framework",
    "JavaScript",
    "React",
    "Next.js",
    "Vite",
    "Meow",
    "Meow",
  ];
  return (
    <div className="about max-w-7xl md:mx-auto lg:p-10 md:px-6 px-4 md:py-8 py-5 rounded-xl">
      <div className="flex justify-between flex-col lg:flex-row">
        <div>
          <h2 className="text-6xl md:mb-10 mb-6 font-bold">About</h2>
        </div>

        <section className="lg:max-w-2xl lg:text-2xl text-xl flex flex-col about-section font-medium">
          <h1>What I&apos;m doing</h1>
          <ul className="list-disc ml-6 mb-6">
            <li>Developer Advocate @ Pieces</li>
            <li>Technical Writer @ Code Maze</li>
            <li>Volunteer Web Content Editor @ MuggleNet</li>
            {/* add links for proof */}
          </ul>
          {/* <h1>Something</h1>
          <ul className="list-disc ml-6 mb-6">
            <li>
              I plan to change this text later! Not sure what I will write here.
            </li>
            <li>
              I plan to change this text later! Not sure what I will write
              here.I plan to change this text later! Not sure what I will write
              here.
            </li>
            <li>hi</li>
          </ul> */}
          <h1>Skills</h1>
          <ul className="flex gap-x-5 gap-y-1 flex-wrap">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-[#f0f8ff] text-indigo-950 px-4 rounded-2xl text-[18px] mt-3 font-semibold shadow-md"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
