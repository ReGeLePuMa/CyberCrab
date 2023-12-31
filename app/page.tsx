import Card from "@/components/home/card";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import Link from "next/link";
import { getGlobalVariable } from "@/components/layout/globals";

export default async function Home() {
  const { stargazers_count: stars } = await fetch(
    "https://api.github.com/repos/steven-tey/precedent",
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          "Content-Type": "application/json",
        },
      }),
      // data will revalidate every 24 hours
      next: { revalidate: 86400 },
    },
  )
    .then((res) => res.json())
    .catch((e) => console.log(e));
  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0"></div>
      <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === "Beautiful, reusable components" ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div>
    </>
  );
}

let crit1 = getGlobalVariable() > 10;
let crit2 = getGlobalVariable() > 30;
let crit3 = getGlobalVariable() > 45;
let crit4 = getGlobalVariable() > 60;
let features = [
  {
    title: "_________________________",
    description: "CrabPass",
    demo: (
        <div className="overflow-x-auto">
          <div className="grid grid-flow-col grid-rows-2 gap-5 whitespace-nowrap p-5">
            <div
              className={
                "square_pass_unlocked"
              }
            >
              <img src="claw.png" className="h-full w-full object-cover" />
            </div>
            <div
              className={
                "square_pass_unlocked"
              }
            >
              <img src="crab_mic.png" className="h-full w-full object-cover" />
            </div>
            <div
              className={
                "square_pass_unlocked"
              }
            >
              <span
                className="font-mono font-bold"
                style={{
                  textShadow: "0 0 5px #fff, 0 0 10px #00f, 0 0 20px #00f",
                }}
              >
                Baby Crab
              </span>
            </div>
            <div className={
                "square_pass_unlocked"
              }>
              <span
                className="font-mono font-bold"
                style={{
                  textShadow:
                    "0 0 5px #ffd700, 0 0 10px #ffd700, 0 0 20px #ffd700",
                }}
              >
                Learner Crab
              </span>
            </div>
            <div className={
                crit3 ? "square_pass_unlocked" : "square_pass_locked"
              }>
              <img
                src="sticker1.png"
                style={{ width: "100px", height: "75px" }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className={
                crit3 ? "square_pass_unlocked" : "square_pass_locked"
              }>
              <img
                src="sticker2.png"
                style={{ width: "100px", height: "75px" }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className={
                crit4 ? "square_pass_unlocked" : "square_pass_locked"
              }>
              <span className="font-mono font-semibold">Intermediate Lvl</span>
            </div>
            <div className={
                crit4 ? "square_pass_unlocked" : "square_pass_locked"
              }>
              <span className="font-mono font-semibold">Hard Lvl</span>
            </div>
            <div className="square_pass_locked">
              <img
                src="RL.png"
                style={{ width: "100px", height: "75px" }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="square_pass_locked">
              <img
                src="SO.png"
                style={{ width: "80px", height: "70px" }}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="square_pass_locked">
              <span className="font-mono font-semibold">Hard Lvl</span>
            </div>
            <div className="square_pass_locked">
              <span className="font-mono font-semibold">50% Next Season</span>
            </div>
          </div>
        </div>
    ),
    large: true,
  },
  {
    title: "Experience Points",
    description: "",
    demo: <WebVitals />,
  },
  {
    title: "Virtual Machines provider",
    description:
      "We are proud to announce that for cloud services we use OVH hosting, one of the best solutions for small companies.",
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="Logo-ovh.png"
          alt="VM provider - OVH"
          width={160}
          height={80}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: "Our CTF challenges",
    description: "Here are our 4 ctf challenges:",
    demo: (
      <div>
        <div className="grid grid-flow-col grid-rows-2 gap-10 p-10">
          <Link href="/exercise-1" className="square-container">
            <span className="font-mono font-semibold">exer 1</span>
          </Link>
          <Link href="/exercise-2" className="square-container">
            <span className="font-mono font-semibold">exer 2</span>
          </Link>
          <Link href="/exercise-3" className="square-container">
            <span className="font-mono font-semibold">exer 3</span>
          </Link>
          <Link href="/exercise-4" className="square-container">
            <span className="font-mono font-semibold">exer 4</span>
          </Link>
        </div>
      </div>
    ),
  },
  {
    title: "How we differentiate",
    description: "*crab clinking noise*",
    demo: (
      <div className="overflow-x-auto">
        <div className="grid-flow-line flex grid grid-cols-1 justify-center gap-5 whitespace-nowrap p-5">
          <span className="font-mono font-semibold">- Real-Life Scenarios</span>
          <span className="font-mono font-semibold">- Discussions Forums</span>
          <span className="font-mono font-semibold">
            - Detailed Write-ups & Guides
          </span>
          <span className="font-mono font-semibold">
            - Battle Pass with Crabs
          </span>
        </div>
      </div>
    ),
  },
];
