"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import apiClient from "@/lib/apiClient";

interface Template {
  _id: string;
  name: string;
  description: string;
  previewImage: string;
  price: number;
}

export default function TemplatesPage() {
  const searchParams = useSearchParams();
  const [templates, setTemplates] = useState<Template[]>([]);
  // lấy param "type" từ URL, fallback "portfolio"
  const type = searchParams.get("type") || "portfolio";

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const res = await apiClient.get(`/templates?category=${type}`, {
          params: { type }, // => gọi /api/templates?type=portfolio
        });
        setTemplates(res.data);
      } catch (err) {
        console.error("Error fetching templates:", err);
      }
    };

    if (type) fetchTemplates();
  }, [type]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Templates</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((tpl) => (
          <div key={tpl._id} className="bg-white shadow rounded-lg p-4">
            <img
              src={tpl.previewImage}
              alt={tpl.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="mt-4 text-lg font-semibold">{tpl.name}</h2>
            <p className="text-gray-600">{tpl.description}</p>
            <p className="mt-2 text-blue-600 font-bold">${tpl.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
