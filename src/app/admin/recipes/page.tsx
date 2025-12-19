import Link from "next/link";

export default function RecipesPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-sans-bold text-4xl">Meals</h1>
          <p className="text-gray-500">
            All meals created by admins and chefs
          </p>
        </div>

        <Link
          href="/admin/recipes/create"
          className="bg-[#4E267A] text-white px-6 py-3 rounded-xl font-sans-semibold"
        >
          + Add Meal
        </Link>
      </div>

      <div className="bg-white rounded-2xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3">Title</th>
              <th className="px-4 py-3">Difficulty</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Views</th>
              <th className="px-4 py-3">Clicks</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {/* mock row */}
            <tr>
              <td className="px-4 py-3 font-sans-semibold">Tomato Pasta</td>
              <td className="px-4 py-3">MEDIUM</td>
              <td className="px-4 py-3">Dinner</td>
              <td className="px-4 py-3">142</td>
              <td className="px-4 py-3">67</td>
              <td className="px-4 py-3 text-right space-x-3">
                <button className="text-[#4E267A]">Edit</button>
                <button className="text-red-500">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
