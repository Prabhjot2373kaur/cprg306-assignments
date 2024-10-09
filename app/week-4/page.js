// /app/week-4/page.js
import NewItem from './new-item';

export default function Page() {
  return (
    <main className="h-screen">
      <div className="container mx-auto ">
        <h1 className="text-2xl font-bold text-center"></h1>
        <NewItem />
      </div>
    </main>
  );
}
