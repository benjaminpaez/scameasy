import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: `${process.env.CLOUD_NAME}`,
  api_key: `${process.env.API_KEY}`,
  api_secret: `${process.env.API_SECRET}`,
});

export async function POST(req: Request) {
  const data = await req.formData();
  const image = data.get("image");

  if (!image || !(image instanceof Blob)) {
    return NextResponse.json("image error", { status: 400 });
  }

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const response = await new Promise<string>((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        { fetch_format: "auto", quality: "auto", widht: "600", height: "600" },
        (error, result) => {
          if (error) {
            reject(error);
          }
          resolve(result as any);
        }
      )
      .end(buffer);
  });

  return NextResponse.json({
    message: "Image updated successfully",
    url: (response as any).secure_url,
  });
}
