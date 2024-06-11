import { Link } from "next-view-transitions";

export default function ButtonLink({
  link,
  name,
}: {
  link: string;
  name: string;
}) {
  return (
    <footer className="flex justify-center m-6">
      <Link
        href={link}
        className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#019EE3] hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-offset-2 w-[325px] h-[40px]"
      >
        {name}
      </Link>
    </footer>
  );
}
