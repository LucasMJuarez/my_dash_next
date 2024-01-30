import { SimpleWidget } from "@/components";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};


export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>

      <div className="flex flex-wrap p-2">
        <SimpleWidget />
      </div>
    </div>
  );
}