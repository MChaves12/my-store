import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Hero from "./images/Hero.jpg"

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-2xl">
      <div
          className="mx-auto mb-4 flex max-w-fit items-center
        justify-center space-x-2 overflow-hidden rounded-full
        border border-gray-200 bg-white px-7 py-2
        shadow-md backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
        >
          <p className="text-sm font-semibold text-gray-700">
            A atitude é o nosso brilho mais precioso!
          </p>
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Nós pensamos em{" "}
          <span className="text-green-600"> estilo </span>
          de um jeito diferente.
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
