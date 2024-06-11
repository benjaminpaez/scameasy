import { headers } from "next/headers";
import VerificationPageClient from "./page.client";
import { redirect } from "next/navigation";

import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

const libsql = createClient({
  url: process.env.DATABASE_URL!,
  authToken: process.env.DATABASE_TOKEN,
});

const adapter = new PrismaLibSQL(libsql);
const prisma = new PrismaClient({ adapter });

export default function VerificationPage() {
  async function save(
    location: { latitude: number; longitude: number },
    dataImage: string
  ) {
    "use server";

    const latitude = location.latitude.toString();
    const longitude = location.longitude.toString();
    const headerEntries = Object.entries(headers());
    const plainHeaders = Object.fromEntries(headerEntries);
    const origin = plainHeaders.origin ? plainHeaders.origin.toString() : "";
    const platform = plainHeaders["sec-ch-ua-platform"]
      ? plainHeaders["sec-ch-ua-platform"].toString()
      : "";

    const newSwindler = await prisma.swindler.create({
      data: {
        latitude: latitude,
        longitude: longitude,
        imageUrl: dataImage,
        createdAt: new Date(),
        origin: origin,
        plataform: platform,
      },
    });

    console.log(newSwindler);

    redirect("/check");
  }
  return <VerificationPageClient save={save} />;
}
