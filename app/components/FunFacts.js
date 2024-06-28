export default function FunFacts() {
  return (
    <div className="flex justify-center flex-col mt-20">
      <div>
        <h2 className="text-6xl text-center mb-6">Three Fun Facts</h2>
      </div>
      <div className="text-indigo-600 inline-block mx-auto space-y-5">
        <div className="bg-white/50 p-7 rounded-xl flex lg:justify-between lg:flex-row flex-col lg:items-center lg:space-x-24">
          <h3 className="text-2xl font-bold">I taught English in Taiwan</h3>
          <p className="max-w-lg">
            I taught English at a cram school for about a year while also
            studying Chinese.
          </p>
        </div>

        <div className="bg-white/50 p-7 rounded-xl flex lg:justify-between lg:flex-row flex-col lg:items-center lg:space-x-24">
          <h3 className="text-2xl font-bold">I studied kungfu in China</h3>
          <p className="max-w-lg">
            It&apos;s kind of a long story, but I studied kungfu in the Shandong
            province for about 6 months.
          </p>
        </div>

        <div className="bg-white/50 p-7 rounded-xl flex lg:justify-between lg:flex-row flex-col lg:items-center lg:space-x-24">
          <h3 className="text-2xl font-bold">I love cats</h3>
          <p className="max-w-lg">
            You probably already know this about me if you follow me on twitter.
          </p>
        </div>
      </div>
    </div>
  );
}
