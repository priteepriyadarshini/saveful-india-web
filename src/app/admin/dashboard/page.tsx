"use client";

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* PAGE TITLE */}
      <div>
        <h1 className="font-sans-bold text-4xl mb-2">Dashboard</h1>
        <p className="text-gray-500">
          Overview of Saveful platform activity
        </p>
      </div>

      {/* ================= KPI CARDS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        <StatCard title="Total Users" value="12,480" />
        <StatCard title="Total Chefs" value="48" />
        <StatCard title="Recipes" value="1,326" />
        <StatCard title="Ingredients" value="312" />
      </div>

      {/* ================= ANALYTICS ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Chart Placeholder */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-sans-bold text-xl mb-4">
            Recipe Growth (Monthly)
          </h3>

          <div className="h-64 flex items-center justify-center text-gray-400 border border-dashed rounded-xl">
            📊 Chart will go here
          </div>
        </div>

        {/* Engagement */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="font-sans-bold text-xl mb-4">
            Engagement Summary
          </h3>

          <ul className="space-y-4 text-sm">
            <li className="flex justify-between">
              <span>Active users</span>
              <strong>8,920</strong>
            </li>
            <li className="flex justify-between">
              <span>Recipes cooked</span>
              <strong>21,430</strong>
            </li>
            <li className="flex justify-between">
              <span>Food saved (kg)</span>
              <strong>14,200</strong>
            </li>
            <li className="flex justify-between">
              <span>Money saved ($)</span>
              <strong>92,000</strong>
            </li>
          </ul>
        </div>
      </div>

      {/* ================= RECENT ACTIVITY ================= */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="font-sans-bold text-xl mb-6">
          Recent Activity
        </h3>

        <ul className="space-y-4 text-sm">
          <li className="flex justify-between">
            <span>👨‍🍳 New chef onboarded</span>
            <span className="text-gray-400">2 hours ago</span>
          </li>
          <li className="flex justify-between">
            <span>🍅 Ingredient added: Cherry Tomato</span>
            <span className="text-gray-400">5 hours ago</span>
          </li>
          <li className="flex justify-between">
            <span>📖 Recipe published by Chef Alex</span>
            <span className="text-gray-400">Yesterday</span>
          </li>
          <li className="flex justify-between">
            <span>💡 New hack added</span>
            <span className="text-gray-400">2 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* ================= SMALL REUSABLE CARD ================= */

function StatCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <p className="text-sm text-gray-500 mb-2">{title}</p>
      <p className="font-sans-bold text-3xl">{value}</p>
    </div>
  );
}
