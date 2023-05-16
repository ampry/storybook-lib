import Button from "@/components/parts/Button";

const Video = () => {
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

        {/* Youtube iFrame */}
        <iframe
          width="560"
          className="rounded-md"
          height="315"
          src="https://www.youtube.com/embed/cbuZfY2S2UQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>

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

export default Video;
