import { SimpleWidget } from "@/components";
import { WidgetsGrid } from "@/components/dashboard/WidgetsGrid";


export const metadata = {
 title: 'Admin Dashboard',
 description: 'SEO Title',
};


export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-xl">Dashboard</h1>
      <span className="text-xl">Informacion General</span>

    <WidgetsGrid />
    </div>
  );
}