import visa from "@/../public/assets/visa-card.svg";
import Image from "next/image";

export function DescriptionCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="grid-cols-1 p-3 ml-3 mr-3">
      <div className="grid grid-cols-2">
        <h2 className="text-left col-span-1 font-semibold text-sm">{title}</h2>
        <div className="grid grid-cols-2">
          <p className="flex items-center justify-end col-span-2 font-light text-sm text-gray-400">
            <Image
              src={visa}
              className="mr-1"
              width={30}
              height={20}
              alt="visa"
            />
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
