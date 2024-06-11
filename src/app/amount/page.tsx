"use client";
import ButtonLink from "@/components/buttonLink";
import { useState } from "react";
import { motion } from "framer-motion";
import { formatterDot } from "./formatter";
import { IoAlertCircleOutline } from "react-icons/io5";
import { useData } from "@/store/data";

const LIMIT = 8456933;
export default function PageAmount() {
  const [value, setValue] = useState("");
  const error = useData((state) => state.error);
  const globalValue = useData((state) => state.setValue);
  const globalError = useData((state) => state.setError);

  const handleChange = (e: any) => {
    const initialValue = e.target.value;
    const numericValue = initialValue.replace(/[^0-9]/g, "");

    if (numericValue === "") {
      setValue("");
      globalError(false);
      globalValue("");
      return;
    }

    const valueAsNumber = Number(numericValue);

    globalError(false);

    if (valueAsNumber <= LIMIT) {
      const fortmattedValue = formatterDot(numericValue);
      setValue(fortmattedValue);
      globalValue(fortmattedValue);
    } else {
      setValue("");
      globalError(true);
    }
  };

  return (
    <article className="xs:col-span-5 lg:place-items-center lg:max-w-screen-md lg:min-h-screen lg:bg-white">
      <section className="h-[85vh]">
        <h1 className="mt-2 p-6 ml-2 font-semibold lg:text-center">
          Ingresá un monto
        </h1>
        <div className="flex flex-col justify-center items-center h-full">
          <div className="grid grid-cols-5 place-items-center items-center lg:grid-cols-4">
            <span className="col-span-1 text-2xl lg:justify-self-end">$</span>
            <span className="col-span-3 lg:col-span-2 text-center text-6xl font-semibold relative">
              <div>
                <input
                  type="text"
                  value={value}
                  onChange={handleChange}
                  className="top-0 left-0 w-full h-full opacity-0 lg:max-w-lg"
                  autoFocus
                />
                <div className="w-full h-full flex items-center justify-center">
                  {value.length === 0 ? (
                    <span className="text-6xl font-semibold text-gray-400">
                      0.000.000
                    </span>
                  ) : (
                    value.split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ x: 0 }}
                        animate={{ x: [0, -2, 2, -2, 2, 0] }}
                        transition={{ duration: 0.3 }}
                        className="inline-block text-6xl font-semibold"
                      >
                        {char}
                      </motion.span>
                    ))
                  )}
                </div>
              </div>
            </span>
            <span className="col-span-1 text-center text-2xl lg:justify-self-start">
              00
            </span>
          </div>
          <p className="text-center text-gray-500 mt-2">{`$ ${LIMIT}, 00 disponible.`}</p>
          {error && (
            <p className="text-red-600 col-span-1 mb-4">
              <div className="flex justify-between items-center gap-x-2">
                <IoAlertCircleOutline width={40} height={40} />
                Saldo insuficiente.
              </div>
            </p>
          )}
        </div>
      </section>
      <ButtonLink link="/confirmation" name="Confirmar" />
    </article>
  );
}
