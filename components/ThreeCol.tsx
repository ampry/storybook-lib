import Button from "@/components/parts/Button";
import Image from "next/image";

const ThreeCol = () => {
  return (
    <section
      id="three-col"
      className="bg-slate-100 flex justify-center items-center p-8"
    >
      <div
        id="container"
        className="max-w-screen-lg text-center flex flex-col items-center gap-6"
      >
        <h3 className="text-2xl font-semibold max-w-[720px]">
          Lorem ipsum dolor sit amet
        </h3>

        <p className="max-w-[720px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        {/* Column Section */}
        <div className="md:grid grid-cols-3 w-full gap-8 text-left my-6">
          {/* Col 1 */}
          <div className="p-6 bg-slate-50 rounded-md">
            <div className="flex gap-2 items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <h4 className="text-xl font-semibold">Lorem ipsum dolor sit</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
          {/* Col 2 */}
          <div className="p-6 bg-slate-50 rounded-md">
            <div className="flex gap-2 items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <h4 className="text-xl font-semibold">Lorem ipsum dolor sit</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
          {/* Col 3 */}
          <div className="p-6 bg-slate-50 rounded-md">
            <div className="flex gap-2 items-center mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
              <h4 className="text-xl font-semibold">Lorem ipsum dolor sit</h4>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo.
            </p>
          </div>
        </div>
        <Button text="Get Started" href="/about" />
      </div>
    </section>
  );
};

export default ThreeCol;
