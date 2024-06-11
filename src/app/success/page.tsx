import ButtonLink from "@/components/buttonLink";
import { DescriptionContent } from "../confirmation/description";
import { DescriptionCard } from "../confirmation/descriptionCard";

export default function SuccessPage() {
  return (
    <section className="xs:col-span-5 lg:place-items-center lg:max-w-screen-sm lg:min-h-screen lg:bg-white">
      <h1 className="text-white p-6 font-medium text-lg bg-green-600">
        Tu transferencia se realizó con exito
      </h1>
      <section className="h-[75vh]">
        <aside className="mb-6">
          <h2 className="p-6 ">
            Enviamos correctamente el dinero a la cuenta que proporcionaste
          </h2>
        </aside>
        <hr className="border solid border-gray-300 my-4 w-[325px] text-center mx-8 mt-4 mb-4" />
        <article>
          <h1 className="mt-2 p-6 font-bold text-xl">
            Debitamos el dinero de:
          </h1>
          <DescriptionCard title="Cuenta" description="terminada en 242 " />
          <DescriptionContent title="Cuotas" description="0" symbol="" />
          <DescriptionContent title="Intereses" description="0" symbol="%" />
        </article>
      </section>
      <ButtonLink link="/home" name="Finalizar" />
    </section>
  );
}
