// src/pages/BuilderStepPage.jsx
import { useParams } from "react-router-dom";

export default function BuilderStepPage() {
  const { type } = useParams();

  const renderContent = () => {
    switch (type) {
      case "portfolio":
        return <p>Bắt đầu xây dựng website Portfolio của bạn...</p>;
      case "showcase":
        return <p>Chọn template trưng bày hàng hóa...</p>;
      case "manage_showcase":
        return <p>Thiết lập hệ thống quản lý và trưng bày sản phẩm...</p>;
      case "booking":
        return <p>Bắt đầu cấu hình hệ thống booking...</p>;
      default:
        return <p>Loại website không xác định!</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-2xl font-bold mb-4">Bước tiếp theo</h1>
      {renderContent()}
    </div>
  );
}
