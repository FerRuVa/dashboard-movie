export default function MovieCard({ title }: { title: string }) {
  return (
    <div className="w-24">
      <div className="h-32 bg-gray-300 rounded-xl mb-2" />
      <p className="text-sm font-medium">{title}</p>
    </div>
  );
}