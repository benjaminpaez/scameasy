"use client";
import { useData } from "@/store/data";
import { DescriptionContent } from "./description";
import { DescriptionCard } from "./descriptionCard";
import ButtonLink from "@/components/buttonLink";

export default function ConfirmationPage() {
  const amount = useData((state) => state.value);
  const account = useData((state) => state.account);

  return (
    <section className="xs:col-span-5 lg:place-items-center  lg:max-w-screen-md lg:min-h-screen lg:bg-white">
      <h1 className="mt-2 p-6 font-bold text-xl">Confirmar envio</h1>
      <section className="h-[75vh]">
        <aside className="mb-6">
          <DescriptionContent
            title="CBU / CVU o alias"
            description={account}
            symbol=""
          />
          <DescriptionContent title="Monto" description={amount} symbol="$" />
        </aside>
        <hr className="border solid border-gray-300 my-4 w-[325px] text-center mx-8 mt-4 mb-4" />
        <article>
          <h1 className="mt-2 p-6 font-bold text-xl">
            Debitaremos el dinero de:
          </h1>
          <DescriptionCard title="Cuenta" description="terminada en 242 " />
          <DescriptionContent title="Cuotas" description="0" symbol="" />
          <DescriptionContent title="Intereses" description="0" symbol="%" />
        </article>
      </section>
      <ButtonLink link="/captcha" name="Siguiente" />
    </section>
  );
}
