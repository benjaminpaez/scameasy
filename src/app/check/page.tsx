import { LoadPage } from "@/components/loadPage";
import check from "../../../public/assets/icons-deacuerdo.png";
export default function CheckPage() {
  return (
    <LoadPage
      background="bg-green-500"
      colorText="text-white"
      direction="/success"
      image={check}
      text="Listo"
    />
  );
}
