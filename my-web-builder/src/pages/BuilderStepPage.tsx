import { useState } from "react";
import { buildWebsite } from "../services/api";
import ModuleSelector from "../components/ModuleSelector";

export default function BuilderStepPage() {
  const [modules, setModules] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleBuild = async () => {
    try {
      setLoading(true);
      await buildWebsite({ modules });
    } catch (err) {
      console.error(err);
      alert("Build thất bại!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Bước tiếp theo</h1>
      <ModuleSelector onChange={setModules} />
      <button
        onClick={handleBuild}
        disabled={loading || modules.length === 0}
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        {loading ? "Đang build..." : "Build Website"}
      </button>
    </div>
  );
}
