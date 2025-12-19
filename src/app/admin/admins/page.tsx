import Link from "next/link";

export default function AdminsPage() {
  const admins = [
    {
      name: "Super Admin",
      email: "admin@saveful.com",
      role: "Super Admin",
      created: "01 Jan 2025",
    },
    {
      name: "Content Admin",
      email: "content@saveful.com",
      role: "Admin",
      created: "15 Jan 2025",
    },
  ];

  const roleColors: Record<string, string> = {
    "Super Admin": "bg-purple-100 text-purple-700",
    Admin: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="space-y-8">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <h1 className="font-sans-bold text-4xl mb-1 text-gray-900">Admins</h1>
          <p className="text-gray-500 text-sm md:text-base">
            Manage administrators with platform access
          </p>
        </div>

        <Link
          href="/admin/admins/create"
          className="inline-block rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3
                     text-white font-sans-semibold text-sm md:text-base
                     shadow-lg hover:scale-105 hover:shadow-2xl transition-transform"
        >
          + Add Admin
        </Link>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
        <table className="w-full text-left min-w-[700px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-sm font-sans-semibold text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-sm font-sans-semibold text-gray-600 uppercase tracking-wider">
                Email / User ID
              </th>
              <th className="px-6 py-3 text-sm font-sans-semibold text-gray-600 uppercase tracking-wider">
                Role
              </th>
              <th className="px-6 py-3 text-sm font-sans-semibold text-gray-600 uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-sm font-sans-semibold text-gray-600 uppercase tracking-wider text-right">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-100">
            {admins.map((admin, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="px-6 py-4 font-sans-semibold text-gray-900">
                  {admin.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{admin.email}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-sans-semibold ${roleColors[admin.role]}`}
                  >
                    {admin.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">{admin.created}</td>
                <td className="px-6 py-4 text-right space-x-2">
                  <button className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-sm font-sans-semibold hover:bg-blue-100 transition">
                    Edit
                  </button>
                  <button className="px-3 py-1 rounded-lg bg-red-50 text-red-600 text-sm font-sans-semibold hover:bg-red-100 transition">
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
