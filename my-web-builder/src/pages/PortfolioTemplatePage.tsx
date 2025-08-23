// src/pages/PortfolioTemplatePage.tsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface TemplateOption {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export default function PortfolioTemplatePage() {
  const navigate = useNavigate();
  const [templates, setTemplates] = useState<TemplateOption[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Gọi API backend lấy danh sách template
    fetch("http://localhost:3000/templates")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Lỗi khi load templates:", err);
        setLoading(false);
      });
  }, []);

  const handleSelectTemplate = (templateId: string) => {
    // Chuyển sang trang editor kèm ID template
    navigate(`/builder/portfolio/editor/${templateId}`);
  };

  if (loading) {
    return <div className="p-8 text-gray-600">Đang tải templates...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">Chọn Template Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 cursor-pointer"
            onClick={() => handleSelectTemplate(template.id)}
          >
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{template.name}</h2>
              <p className="text-gray-600">{template.description}</p>
              <button
                className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectTemplate(template.id);
                }}
              >
                Chọn Template
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
