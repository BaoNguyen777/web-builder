import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SelectTemplatePage() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const templates = [
    { id: "portfolio", name: "Portfolio", desc: "Trang giới thiệu cá nhân" },
    { id: "showcase", name: "Web trưng bày hàng hóa", desc: "Hiển thị sản phẩm đẹp mắt" },
    { id: "manage_showcase", name: "Web quản lý & trưng bày", desc: "Quản lý hàng hóa + trưng bày" },
    { id: "booking", name: "Web booking", desc: "Đặt phòng, dịch vụ, vé..." }
  ];

  const handleNext = () => {
    if (!selected) return alert("Vui lòng chọn loại website trước nhé!");
    navigate(`/builder/${selected}`);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6">Chọn loại website bạn muốn tạo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl w-full">
        {templates.map((t) => (
          <div
            key={t.id}
            className={`p-6 rounded-xl shadow cursor-pointer transition ${
              selected === t.id ? "bg-blue-500 text-white" : "bg-white hover:bg-blue-100"
            }`}
            onClick={() => setSelected(t.id)}
          >
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-2 text-sm">{t.desc}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700"
      >
        Next
      </button>
    </div>
  );
}
jsx
Copy
Edit
