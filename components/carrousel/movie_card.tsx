export default function MovieCard({
  title,
  posterUrl,
}: {
  title: string;
  posterUrl: string;
}) {
  console.log("MovieCard renderizado:", title, posterUrl);
  return (
    <div className="w-24">
      <div className="h-32 w-full rounded-xl mb-2 overflow-hidden bg-gray-200">
        <img
          src={posterUrl}
          alt={title}
          className="h-full w-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src =
              "https://via.placeholder.com/150x220?text=No+Image";
          }}
        />
      </div>

      <p className="text-md font-medium truncate text-black">{title}</p>
    </div>
  );
}