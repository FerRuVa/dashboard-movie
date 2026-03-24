import Header from "@/components/searchbar";
import GenreChart from "@/components/genred_char";
import MovieCard from "@/components/movie_card";
import CardContent from "@/components/card_content";

export default function DashboardPage() {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Header />

      {/* Top section */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        {/* 66% */}
        <div className="col-span-2 bg-white p-4 rounded-2xl shadow">
          <GenreChart />
        </div>

        {/* 33% */}
        <div className="col-span-1 bg-white p-6 rounded-2xl shadow">
          <h2 className="font-semibold mb-4">Leaders of August</h2>

          <div className="flex gap-4">
            <MovieCard title="Avengers: Endgame" />
            <MovieCard title="Aquaman" />
            <MovieCard title="Star Wars" />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <CardContent title="Favorite movie" value="157 times" />
        <CardContent title="Total activity" value="6m 3w 21h" />
        <CardContent title="Viewed from list" value="87%" />
      </div>
    </div>
  );
}
