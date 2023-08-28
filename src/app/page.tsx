import About from "./components/About";
import WorkExperience from "./components/WorkExperience";

export default function Home() {
  return (
    <main className="flex justify-center m-4 mt-6 p-6 text-gray-800 ">
      <div className="flex flex-col gap-y-10 w-full max-w-4xl">
        <div className="flex flex-col gap-10">
          <About />
        </div>
        <div className="flex gap-x-3">
          <p className="font-semibold text-sky-600">Work Experience</p>
        </div>
        <div>
          <WorkExperience />
        </div>
      </div>
    </main>
  );
}
