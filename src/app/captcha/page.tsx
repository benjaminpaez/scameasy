"use client";
import CheckCaptcha from "./check";
import { useState } from "react";
import ButtonLink from "@/components/buttonLink";

export default function CaptchaPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [inputDisabled, setInputDisabled] = useState(false);

  const handleClick = () => {
    setClickCount(clickCount + 1);

    if (clickCount >= 2) {
      setInputDisabled(true);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(true);
    setTimeout(() => {
      setIsChecked(false);
    }, 3000);
  };
  return (
    <article className="xs:col-span-5 lg:place-items-center lg:max-w-screen-md lg:min-h-screen lg:bg-white">
      <section className="h-[85vh]">
        <h1 className="mt-2 p-6 ml-2 font-semibold">
          Verifica que eres humano
        </h1>
        <div className="flex justify-center">
          <CheckCaptcha
            isChecked={isChecked}
            handleCheckboxChange={handleCheckboxChange}
            inputDisabled={inputDisabled}
            handleClick={handleClick}
          />
        </div>
        {inputDisabled && (
          <div className="grid-cols-5 ml-8 mr-8">
            <p className="text-red-600 col-span-1 mb-4">
              Ha ocurrido un error inesperado.
            </p>
            <span className="text-md font-semibold ">
              Por favor, completa la verificacion para realizar la operacion
            </span>
          </div>
        )}
      </section>
      {inputDisabled ? (
        <ButtonLink link="/verification" name="Siguiente" />
      ) : (
        <ButtonLink link="/captcha" name="Confirmar" />
      )}
    </article>
  );
}
