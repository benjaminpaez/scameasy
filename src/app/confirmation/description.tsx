export function DescriptionContent({
  title,
  description,
  symbol,
}: {
  title: string;
  description: string;
  symbol: string | null;
}) {
  return (
    <div className="grid-cols-1 p-3 ml-3 mr-3">
      <div className="grid grid-cols-2">
        <h2 className="text-left col-span-1 font-semibold text-sm">{title}</h2>
        <p className="text-right col-span-1 font-light text-sm text-gray-400">
          {symbol} {description}
        </p>
      </div>
    </div>
  );
}
