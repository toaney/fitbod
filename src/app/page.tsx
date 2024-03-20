import Image from "next/image";
import Link from "next/link";

interface Exercise {
  id: string;
  name: string;
  muscle: string;
  image: string;
}

const IndexPage = async () => {
  const res = await fetch("https://storage.googleapis.com/fitbod-web-internal/exercises.json");
  const exercises: Exercise[] = await res.json();

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="md:w-[722px]">
        <h1 className="flex pt-[32px] pb-[48px] justify-center text-[24px]">Top Exercises</h1>
        <ul className="md:flex md:flex-wrap md:justify-between">
          {exercises.map(exercise => {
            return (
              <Link
                href={{
                  pathname: "/exercise",
                  query: {
                    id: exercise.id,
                    thumb: exercise.image,
                    name: exercise.name
                  }
                }}
                key={exercise.id}
              >
                <li key={exercise.id} className="w-[329px] flex flex-row justify-between pb-[32px]">
                  <div className="relative w-[60px] h-[60px] ">
                    <Image src={exercise.image} fill alt={exercise.name} className="rounded bg-slate-50 object-cover"/>
                  </div>
                  <div className="flex flex-col grow ml-[24px] mr-[10px] justify-between">
                    <div className="font-bold">
                      {exercise.name}
                    </div>
                    <div>
                      {exercise.muscle}
                    </div>
                  </div>
                  <div className="flex items-center">
                    <svg width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.1716 15.1716L4.23858 1.23858C3.04346 0.0434632 1 0.889893 1 2.58004C1 3.08319 1.19987 3.56573 1.55565 3.92151L12.8057 15.1716C14.3678 16.7337 14.3678 19.2663 12.8057 20.8284L1.55565 32.0785C1.19987 32.4343 1 32.9168 1 33.42C1 35.1101 3.04346 35.9565 4.23858 34.7614L18.1716 20.8284C19.7337 19.2663 19.7337 16.7337 18.1716 15.1716Z" fill="#D9D9D9" stroke="black"/>
                    </svg>
                  </div>
                </li>
              </Link>
            )
            
          })}
        </ul>
      </div>
    </div>
  )
}

export default IndexPage;