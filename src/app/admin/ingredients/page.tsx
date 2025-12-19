import Link from "next/link";

export default function IngredientsPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans-bold text-4xl mb-2">
            Ingredients
          </h1>
          <p className="text-gray-500">
            Manage ingredient master data
          </p>
        </div>

        <Link
          href="/admin/ingredients/create"
          className="rounded-xl bg-[#4E267A] px-6 py-3 text-white font-sans-semibold
                     transition hover:scale-[1.02] hover:shadow-lg"
        >
          + Add Ingredient
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-500">
            <tr>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Type</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Seasons</th>
              <th className="px-4 py-3">Verified</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {/* MOCK DATA */}
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-3 font-sans-semibold">Tomato</td>
              <td className="px-4 py-3">VEGETABLE</td>
              <td className="px-4 py-3">Vegetables</td>
              <td className="px-4 py-3">SUMMER</td>
              <td className="px-4 py-3">
                <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">
                  Yes
                </span>
              </td>
              <td className="px-4 py-3 text-right space-x-3">
                <button className="text-[#4E267A] hover:underline">
                  Edit
                </button>
                <button className="text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
