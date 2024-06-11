import { Loader2 } from "lucide-react";
export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Loader2 className="animate-spin h-10 w-10 text-blue-500" size={36} />
    </div>
  );
}
