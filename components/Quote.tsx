import Button from "@/components/parts/Button";
import Image from "next/image";

const Quote = () => {
  return (
    <section
      id="hero"
      className="bg-slate-100 flex justify-center items-center p-8"
    >
      <div
        id="container"
        className="max-w-screen-lg text-center flex flex-col items-center gap-6"
      >
        <h3 className="text-2xl font-semibold max-w-[720px]">
          Lorem ipsum dolor sit amet
        </h3>

        {/* Quote section */}
        <div className="max-w-[720px] flex flex-col gap-6 p-6 rounded-md bg-slate-200 text-left">
          {/* Bubble */}
          <div className="ml-8 p-6 bg-slate-50 rounded-t-3xl rounded-br-3xl">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </p>
          </div>
          {/* Reviewer */}
          <div className="flex gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-400">
              {/* <Image /> */}
            </div>
            <div className="flex flex-col justify-center">
              <h4 className=" text-lg font-semibold">Nate H.</h4>
              <p>Highland, UT</p>
            </div>
          </div>
        </div>

        <p className="max-w-[720px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <Button text="Get Started" href="/about" />
      </div>
    </section>
  );
};

export default Quote;
