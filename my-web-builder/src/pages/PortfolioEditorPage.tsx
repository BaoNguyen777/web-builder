// src/pages/PortfolioEditorPage.tsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function PortfolioEditorPage() {
  const { templateId } = useParams();
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);

  const features = [
    { id: "about", name: "About Me" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact Form" },
    { id: "blog", name: "Blog" }
  ];

  const toggleFeature = (featureId: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(featureId)
        ? prev.filter((f) => f !== featureId)
        : [...prev, featureId]
    );
  };

  const handleSave = () => {
    console.log("Template đã chọn:", templateId);
    console.log("Features đã chọn:", selectedFeatures);
    // Gọi API backend lưu cấu hình
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">
        Tùy chỉnh Template: {templateId}
      </h1>
      <p className="mb-6 text-gray-600">
        Chọn các tính năng bạn muốn thêm vào portfolio của mình.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className={`p-4 border rounded-lg cursor-pointer transition ${
              selectedFeatures.includes(feature.id)
                ? "bg-indigo-100 border-indigo-500"
                : "bg-white"
            }`}
            onClick={() => toggleFeature(feature.id)}
          >
            {feature.name}
          </div>
        ))}
      </div>

      <button
        className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        onClick={handleSave}
      >
        Lưu & Tiếp tục
      </button>
    </div>
  );
}
