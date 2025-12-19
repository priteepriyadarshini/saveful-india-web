import Link from "next/link";

export default function ChefsPage() {
  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans-bold text-4xl mb-2">
            Chefs
          </h1>
          <p className="text-gray-500">
            Manage chefs onboarded to Saveful
          </p>
        </div>

        <Link
          href="/admin/chefs/create"
          className="rounded-xl bg-[#4E267A] px-6 py-3
                     text-white font-sans-semibold
                     transition hover:scale-[1.02] hover:shadow-lg"
        >
          + Add Chef
        </Link>
      </div>

      {/* TABLE */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-gray-50 text-sm text-gray-500">
            <tr>
              <th className="px-6 py-4">Name</th>
              <th className="px-6 py-4">Email / User ID</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Created</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y">
            {/* MOCK DATA */}
            {[
              {
                name: "Chef Alex",
                email: "alex@saveful.com",
                status: "Active",
                created: "12 Jan 2025",
              },
              {
                name: "Chef Maria",
                email: "maria@saveful.com",
                status: "Inactive",
                created: "02 Feb 2025",
              },
            ].map((chef, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-sans-semibold">
                  {chef.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {chef.email}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-sans-semibold
                      ${
                        chef.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                  >
                    {chef.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {chef.created}
                </td>
                <td className="px-6 py-4 text-right space-x-3 text-sm">
                  <button className="text-[#4E267A] hover:underline">
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">
                    Disable
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
