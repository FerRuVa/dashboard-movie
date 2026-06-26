export default function CardContent({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <p className="text-gray-500 text-sm text-black">{title}</p>
      <h2 className="text-xl font-semibold mt-2 text-gray-800">{value}</h2>
    </div>
  );
}