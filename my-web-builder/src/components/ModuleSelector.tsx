import { useState } from "react";

interface ModuleSelectorProps {
  onChange: (modules: string[]) => void;
}

const availableModules = [
  "cart",
  "checkout",
  "booking",
  "gallery",
  "contact_form"
] as const;

export default function ModuleSelector({ onChange }: ModuleSelectorProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleModule = (mod: string) => {
    const newSelected = selected.includes(mod)
      ? selected.filter(m => m !== mod)
      : [...selected, mod];
    setSelected(newSelected);
    onChange(newSelected);
  };

  return (
    <div>
      <h2 className="text-lg font-bold">Chọn Module</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        {availableModules.map(mod => (
          <button
            key={mod}
            onClick={() => toggleModule(mod)}
            className={`px-3 py-1 border rounded ${
              selected.includes(mod) ? "bg-blue-500 text-white" : ""
            }`}
          >
            {mod}
          </button>
        ))}
      </div>
    </div>
  );
}
