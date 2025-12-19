"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type IngredientType =
  | "VEGETABLE"
  | "FRUIT"
  | "GRAIN"
  | "PROTEIN"
  | "DAIRY"
  | "SPICE"
  | "OIL"
  | "OTHER";

type Season =
  | "SPRING"
  | "SUMMER"
  | "FALL"
  | "WINTER"
  | "ALL_SEASON";

interface Category {
  id: string;
  name: string;
}

export default function CreateIngredientPage() {
  const router = useRouter();

  /* ================= STATE ================= */
  const [categories, setCategories] = useState<Category[]>([]);
  const [image, setImage] = useState<File | null>(null);

  const [form, setForm] = useState({
    name: "",
    aliases: "",
    description: "",
    nutritionInfo: "",
    type: "OTHER" as IngredientType,
    categoryId: "",
    availableSeasons: ["ALL_SEASON"] as Season[],
    isVegetable: false,
    isFruit: false,
    isVeg: true,
    isVegan: true,
    isDairy: false,
    isNut: false,
    isGluten: false,
    tags: "",
  });

  /* ================= FETCH CATEGORIES ================= */
  useEffect(() => {
    // TODO: replace with real API
    setCategories([
      { id: "1", name: "Vegetables" },
      { id: "2", name: "Fruits" },
      { id: "3", name: "Spices" },
    ]);
  }, []);

  /* ================= HANDLERS ================= */
  const updateField = (key: string, value: any) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const toggleSeason = (season: Season) => {
    setForm((prev) => ({
      ...prev,
      availableSeasons: prev.availableSeasons.includes(season)
        ? prev.availableSeasons.filter((s) => s !== season)
        : [...prev.availableSeasons, season],
    }));
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = new FormData();

    payload.append("name", form.name);
    payload.append("categoryId", form.categoryId);
    payload.append("type", form.type);

    if (form.description) payload.append("description", form.description);
    if (form.nutritionInfo) payload.append("nutritionInfo", form.nutritionInfo);

    payload.append(
      "aliases",
      JSON.stringify(
        form.aliases
          ? form.aliases.split(",").map((a) => a.trim())
          : []
      )
    );

    payload.append(
      "availableSeasons",
      JSON.stringify(form.availableSeasons)
    );

    payload.append("isVegetable", String(form.isVegetable));
    payload.append("isFruit", String(form.isFruit));
    payload.append("isVeg", String(form.isVeg));
    payload.append("isVegan", String(form.isVegan));
    payload.append("isDairy", String(form.isDairy));
    payload.append("isNut", String(form.isNut));
    payload.append("isGluten", String(form.isGluten));

    payload.append(
      "tags",
      JSON.stringify(
        form.tags ? form.tags.split(",").map((t) => t.trim()) : []
      )
    );

    if (image) payload.append("image", image);

    console.log("Submitting ingredient", Object.fromEntries(payload.entries()));

    alert("Ingredient created (mock). Wire API when ready.");
    router.push("/admin/ingredients");
  };

  /* ================= UI ================= */
  return (
    <div className="w-full h-full px-8 py-10">
      <div className="max-w-6xl">
        <h1 className="font-sans-bold text-4xl mb-2">
          Create Ingredient
        </h1>
        <p className="text-gray-500 mb-10">
          Fields marked optional can be skipped
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-sm p-10 space-y-10"
        >
          {/* BASIC INFO */}
          <section>
            <h2 className="font-sans-semibold text-xl mb-4">
              Basic Information
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                required
                placeholder="Ingredient Name *"
                className="input"
                value={form.name}
                onChange={(e) => updateField("name", e.target.value)}
              />

              <select
                required
                className="input"
                value={form.categoryId}
                onChange={(e) => updateField("categoryId", e.target.value)}
              >
                <option value="">Select Category *</option>
                {categories.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                className="input"
                value={form.type}
                onChange={(e) => updateField("type", e.target.value)}
              >
                {[
                  "VEGETABLE",
                  "FRUIT",
                  "GRAIN",
                  "PROTEIN",
                  "DAIRY",
                  "SPICE",
                  "OIL",
                  "OTHER",
                ].map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>

              <input
                placeholder="Aliases (comma separated) — optional"
                className="input"
                value={form.aliases}
                onChange={(e) => updateField("aliases", e.target.value)}
              />
            </div>
          </section>

          {/* DESCRIPTION */}
          <section>
            <h2 className="font-sans-semibold text-xl mb-4">
              Description (Optional)
            </h2>

            <textarea
              rows={4}
              placeholder="Ingredient description"
              className="input"
              value={form.description}
              onChange={(e) => updateField("description", e.target.value)}
            />
          </section>

          {/* SEASONS */}
          <section>
            <h2 className="font-sans-semibold text-xl mb-4">
              Available Seasons
            </h2>

            <div className="flex flex-wrap gap-3">
              {["SPRING", "SUMMER", "FALL", "WINTER", "ALL_SEASON"].map(
                (season) => (
                  <button
                    type="button"
                    key={season}
                    onClick={() => toggleSeason(season as Season)}
                    className={`px-4 py-2 rounded-full border ${
                      form.availableSeasons.includes(season as Season)
                        ? "bg-[#4E267A] text-white"
                        : "bg-white"
                    }`}
                  >
                    {season}
                  </button>
                )
              )}
            </div>
          </section>

          {/* DIETARY FLAGS */}
          <section>
            <h2 className="font-sans-semibold text-xl mb-4">
              Dietary Properties
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
                    onChange={(e) =>
                      updateField(key, e.target.checked)
                    }
                  />
                  {label}
                </label>
              ))}
            </div>
          </section>

          {/* IMAGE */}
          <section>
            <h2 className="font-sans-semibold text-xl mb-4">
              Ingredient Image (Optional)
            </h2>

            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setImage(e.target.files?.[0] || null)
              }
            />
          </section>

          {/* ACTIONS */}
          <div className="flex gap-6 pt-6">
            <button
              type="submit"
              className="bg-[#4E267A] text-white px-10 py-3 rounded-xl font-sans-semibold text-lg hover:scale-[1.02]"
            >
              Create Ingredient
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="text-gray-500 hover:underline"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>

      {/* INPUT STYLE */}
      <style jsx>{`
        .input {
          width: 100%;
          border: 1px solid #d1d5db;
          border-radius: 12px;
          padding: 12px 14px;
          outline: none;
        }
        .input:focus {
          border-color: #4e267a;
          box-shadow: 0 0 0 2px rgba(78, 38, 122, 0.2);
        }
      `}</style>
    </div>
  );
}

