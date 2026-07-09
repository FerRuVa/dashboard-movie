import Sidebar from "@/components/sidebar/sidebar";


export default function MoviesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-50">
      {/* Sidebar fijo */}
      <aside className="w-64 h-screen flex-shrink-0">
        <Sidebar />
      </aside>

      {/* Contenido con scroll */}
      <main className="flex-1 h-screen overflow-y-auto">
        {children}
      </main>
    </div>
  );
}