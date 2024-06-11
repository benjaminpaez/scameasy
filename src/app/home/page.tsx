"use client";
import ButtonLink from "@/components/buttonLink";
import { Input } from "@/components/ui/input";
import { useData } from "@/store/data";

export default function AccountPage() {
  const globalAccount = useData((state) => state.setAccount);

  const handleChange = (e: any) => {
    const nameAccount = e.target.value;
    globalAccount(nameAccount);
  };
  return (
    <section className="xs:col-span-5 lg:place-items-center lg:max-w-screen-md lg:min-h-screen lg:bg-white">
      <section className="h-[85vh]">
        <h1 className="mt-2 p-6 ml-2 font-semibold md:text-center">
          Agregá una cuenta
        </h1>
        <div className="flex justify-center">
          <Input
            className="w-[325px] h-[40px]"
            type="text"
            onChange={handleChange}
            autoFocus
            required
            placeholder="Ingresá el CBU, CVU o alias"
          />
        </div>
      </section>
      <ButtonLink link="/amount" name="Confirmar" />
    </section>
  );
}
