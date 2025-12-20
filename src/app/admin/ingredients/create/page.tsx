"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useRoleGuard } from "@/hooks/useRoleGuard";
import { INGREDIENT_API } from "@/lib/api";

const INGREDIENT_TYPES = [
  "VEGETABLE",
  "FRUIT",
  "GRAIN",
  "PROTEIN",
  "SPICE",
  "OIL",
  "CONDIMENT",
  "HERB",
  "NUT",
  "SEED",
  "DAIRY",
  "OTHER",
];

const SEASONS = ["SPRING", "SUMMER", "FALL", "WINTER", "ALL_SEASON"];

export default function CreateIngredientPage() {
  useRoleGuard(["admin"]);
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: "error" | "success"; text: string } | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    aliases: "",
    description: "",
    nutritionInfo: "",
    type: "OTHER",
    availableSeasons: [] as string[],
    isVeg: true,
    isVegan: true,
    isDairy: false,
    isNut: false,
    isGluten: false,
    tags: "",
  });

  const updateForm = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSeason = (season: string) => {
    setForm((prev) => ({
      ...prev,
      availableSeasons: prev.availableSeasons.includes(season)
        ? prev.availableSeasons.filter((s) => s !== season)
        : [...prev.availableSeasons, season],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!imageFile) {
      return setMessage({ type: "error", text: "Ingredient image is required" });
    }

    if (!form.availableSeasons.length) {
      return setMessage({ type: "error", text: "Select at least one season" });
    }

    const token = localStorage.getItem("accessToken");
    if (!token) {
      return setMessage({ type: "error", text: "Unauthorized access" });
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("type", form.type);
      formData.append("description", form.description);
      formData.append("nutritionInfo", form.nutritionInfo);
      formData.append("availableSeasons", JSON.stringify(form.availableSeasons));
      formData.append("isVeg", String(form.isVeg));
      formData.append("isVegan", String(form.isVegan));
      formData.append("isDairy", String(form.isDairy));
      formData.append("isNut", String(form.isNut));
      formData.append("isGluten", String(form.isGluten));
      formData.append("addedBy", "ADMIN");
      formData.append("image", imageFile);

      formData.append(
        "aliases",
        JSON.stringify(form.aliases.split(",").map((v) => v.trim()).filter(Boolean))
      );

      formData.append(
        "tags",
        JSON.stringify(form.tags.split(",").map((v) => v.trim()).filter(Boolean))
      );

      const res = await fetch(INGREDIENT_API.CREATE, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to create ingredient");

      setMessage({ type: "success", text: "Ingredient created successfully 🎉" });
      setTimeout(() => router.push("/admin/ingredients"), 1200);
    } catch (err: any) {
      setMessage({ type: "error", text: err.message || "Something went wrong" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-8 py-10">
      <button
        onClick={() => router.back()}
        className="text-sm text-gray-500 hover:underline mb-6"
      >
        ← Back to Ingredients
      </button>

      <div className="mb-8">
        <h1 className="font-sans-bold text-4xl mb-2">Create Ingredient</h1>
        <p className="text-gray-500">Fill all details carefully.</p>
      </div>

      <div className="bg-[#FFCDF5] rounded-3xl shadow-md p-10 max-w-6xl">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {message && (
            <div
              className={`md:col-span-2 px-4 py-3 rounded-xl font-sans-semibold ${
                message.type === "error"
                  ? "bg-red-100 text-red-700"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {message.text}
            </div>
          )}

          <input
            className="md:col-span-2 rounded-xl border px-4 py-3"
            placeholder="Ingredient name"
            value={form.name}
            onChange={(e) => updateForm("name", e.target.value)}
            required
          />

          <select
            className="rounded-xl border px-4 py-3"
            value={form.type}
            onChange={(e) => updateForm("type", e.target.value)}
          >
            {INGREDIENT_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>

          <input
            type="file"
            accept="image/*"
            className="rounded-xl border px-4 py-3 bg-white"
            onChange={(e) => setImageFile(e.target.files?.[0] || null)}
            required
          />

          <textarea
            className="md:col-span-2 rounded-xl border px-4 py-3"
            placeholder="Description"
            rows={3}
            value={form.description}
            onChange={(e) => updateForm("description", e.target.value)}
            required
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Aliases (comma separated)"
            value={form.aliases}
            onChange={(e) => updateForm("aliases", e.target.value)}
            required
          />

          <input
            className="rounded-xl border px-4 py-3"
            placeholder="Tags (comma separated)"
            value={form.tags}
            onChange={(e) => updateForm("tags", e.target.value)}
            required
          />

          <textarea
            className="md:col-span-2 rounded-xl border px-4 py-3"
            placeholder="Nutrition info (plain text)"
            rows={3}
            value={form.nutritionInfo}
            onChange={(e) => updateForm("nutritionInfo", e.target.value)}
            required
          />

          <div className="md:col-span-2 flex flex-wrap gap-6">
            {SEASONS.map((s) => (
              <label key={s} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.availableSeasons.includes(s)}
                  onChange={() => toggleSeason(s)}
                />
                {s}
              </label>
            ))}
          </div>

          <div className="md:col-span-2 flex flex-wrap gap-6">
            {[
              ["isVeg", "Vegetarian"],
              ["isVegan", "Vegan"],
              ["isDairy", "Contains Dairy"],
              ["isNut", "Contains Nuts"],
              ["isGluten", "Contains Gluten"],
            ].map(([key, label]) => (
              <label key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={(form as any)[key]}
                  onChange={(e) => updateForm(key, e.target.checked)}
                />
                {label}
              </label>
            ))}
          </div>

          <div className="md:col-span-2 pt-6">
            <button
              disabled={loading}
              className="bg-[#4E267A] text-white px-12 py-3 rounded-xl font-sans-semibold text-lg disabled:opacity-60"
            >
              {loading ? "Creating..." : "Create Ingredient"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
