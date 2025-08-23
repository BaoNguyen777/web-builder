// src/pages/StartPage.tsx
import React from "react";
import { useNavigate } from "react-router-dom";

interface WebsiteOption {
  type: string;
  label: string;
  description: string;
}

const websiteOptions: WebsiteOption[] = [
  {
    type: "portfolio",
    label: "Portfolio",
    description: "Tạo trang giới thiệu cá nhân chuyên nghiệp."
  },
  {
    type: "showcase",
    label: "Showcase",
    description: "Trưng bày sản phẩm, bộ sưu tập."
  },
  {
    type: "manage_showcase",
    label: "Quản lý Showcase",
    description: "Hệ thống quản lý và hiển thị sản phẩm."
  },
  {
    type: "booking",
    label: "Booking",
    description: "Hệ thống đặt lịch, đặt phòng."
  }
];

export default function StartPage() {
  const navigate = useNavigate();

  const handleSelect = (type: string) => {
    if (type === "portfolio") {
      navigate("/builder/portfolio/templates");
    } else {
      navigate(`/builder/${type}`);
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-4xl font-extrabold text-gray-800 mb-10 text-center">
          Chọn loại website bạn muốn tạo
        </h1>

        {/* Grid các lựa chọn */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {websiteOptions.map((option) => (
            <div
              key={option.type}
              onClick={() => handleSelect(option.type)}
              className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer p-6 border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full text-white text-lg font-bold shadow-md">
                  {option.label.charAt(0)}
                </div>
                <h2 className="text-xl font-semibold text-gray-800">
                  {option.label}
                </h2>
              </div>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {option.description}
              </p>
              <button className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                Bắt đầu ngay
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
