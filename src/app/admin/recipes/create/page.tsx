"use client";

import { useState } from "react";
import Link from "next/link";

export default function CreateMealPage() {
  const [ingredients, setIngredients] = useState([
    { name: "", quantity: "", isOptional: false },
  ]);

  return (
    <div className="max-w-5xl space-y-8">
      <h1 className="font-sans-bold text-4xl">Create Meal</h1>

      <div className="bg-white rounded-2xl p-8 shadow">
        <form className="space-y-8">
          {/* BASIC */}
          <Section title="Basic Info">
            <Input label="Title" />
            <Input label="Short Description" />
            <Textarea label="Instructions" />
          </Section>

          {/* IMAGE */}
          <Section title="Image">
            <Input label="Image URL (optional)" />
            <input type="file" accept="image/*" />
            <p className="text-xs text-gray-400">
              Upload image OR provide image URL
            </p>
          </Section>

          {/* META */}
          <Section title="Details">
            <Input label="Cooking Time (minutes)" type="number" />
            <Select
              label="Difficulty"
              options={["EASY", "MEDIUM", "HARD"]}
            />
            <Input label="Meal Category ID" />
            <Input label="Region ID (optional)" />
          </Section>

          {/* INGREDIENTS */}
          <Section title="Ingredients">
            {ingredients.map((ing, index) => (
              <div key={index} className="border rounded-xl p-4 space-y-2">
                <Input label="Ingredient name OR ID" />
                <Input label="Quantity" type="number" />
                <Checkbox label="Optional ingredient" />
              </div>
            ))}

            <button
              type="button"
              onClick={() =>
                setIngredients([
                  ...ingredients,
                  { name: "", quantity: "", isOptional: false },
                ])
              }
              className="text-[#4E267A] font-sans-semibold"
            >
              + Add Ingredient
            </button>
          </Section>

          {/* FLAGS */}
          <Section title="Health Flags">
            <Checkbox label="Diabetes Friendly" />
          </Section>

          {/* ACTIONS */}
          <div className="flex gap-4">
            <button className="bg-[#4E267A] text-white px-10 py-3 rounded-xl font-sans-semibold">
              Save Meal
            </button>

            <Link href="/admin/recipes" className="text-gray-500">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

/* ---------- helpers ---------- */

function Section({ title, children }: any) {
  return (
    <div>
      <h2 className="font-sans-bold text-2xl mb-4">{title}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Input({ label, type = "text" }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <input
        type={type}
        className="w-full border rounded-xl px-4 py-2"
      />
    </div>
  );
}

function Textarea({ label }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <textarea className="w-full border rounded-xl px-4 py-2 h-32" />
    </div>
  );
}

function Select({ label, options }: any) {
  return (
    <div>
      <label className="block text-sm mb-1">{label}</label>
      <select className="w-full border rounded-xl px-4 py-2">
        {options.map((o: string) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label }: any) {
  return (
    <label className="flex items-center gap-2 text-sm">
      <input type="checkbox" />
      {label}
    </label>
  );
}
