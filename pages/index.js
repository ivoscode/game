import Head from "next/head";
import { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Popover from "../components/Popover";
import Terms from "../components/Terms";
import Wheel from "../components/Wheel";
import { prizes } from "../data/prizes";

export default function Home() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [prize, setPrize] = useState(null);
  const [desc, setDesc] = useState("");
  const [title, setTitle] = useState("");

  const getPrizeInfo = (id) => {
    const winningPrize = prizes.filter((prize) => {
      return prize.id === id;
    });
    setTitle(winningPrize[0].title);
    setDesc(winningPrize[0].desc);
  };

  useEffect(() => {
    if (prize == null) {
      return;
    }
    setTimeout(() => {
      setIsPopoverOpen(true);
    }, 5700);
  }, [prize]);

  return (
    <>
      <Head>
        <title>Fortune wheel</title>
        <meta name="description" content="Game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col max-w-6xl p-10 mx-auto min-h-screen text-gray-900">
        <Banner />
        <main className="flex-1 w-full max-w-4xl px-4  mx-auto md:px-8 sm:py-16">
          <Wheel
            prizes={prizes}
            getPrizeInfo={(id) => {
              getPrizeInfo(id);
              setPrize(id);
            }}
          />
          <Popover
            title={title}
            desc={desc}
            setIsOpen={() => {
              setIsPopoverOpen(!isPopoverOpen);
            }}
            isOpen={isPopoverOpen}
          />
        </main>
        <Terms />
      </div>
    </>
  );
}
