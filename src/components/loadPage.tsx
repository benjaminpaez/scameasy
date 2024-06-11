"use client";
import Image, { StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function LoadPage({
  direction,
  background,
  colorText,
  image,
  text,
}: {
  direction: string;
  background: "bg-white" | "bg-green-500";
  colorText: "text-white" | "text-black";
  image: string | StaticImageData;
  text: string;
}) {
  const [showText, setShowText] = useState(false);
  const [redirectPage, setRedirectPage] = useState(false);
  const router = useRouter();

  function redirection() {
    router.push(`${direction}`);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const redirect = setTimeout(() => {
      setRedirectPage(true);
      redirection();
    }, 3500);
    return () => clearTimeout(redirect);
  }, []);

  return (
    <section
      className={`grid grid-rows-1 place-items-center ${background} h-screen lg:w-screen`}
    >
      <picture className="grid-rows-2 ">
        <Image src={image} alt="logo" priority />
      </picture>
      <div className="grid-rows-1 p-8">
        {showText && (
          <p className={`font-medium text-md ${colorText}`}>{text}</p>
        )}
      </div>
    </section>
  );
}
