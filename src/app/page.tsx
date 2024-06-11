import { LoadPage } from "@/components/loadPage";
import mp from "../../public/assets/mercadopago-icon.png";

export default function InitialPage() {
  return (
    <LoadPage
      direction="/home"
      colorText="text-black"
      background="bg-white"
      image={mp}
      text="Obteniendo acceso..."
    />
  );
}
