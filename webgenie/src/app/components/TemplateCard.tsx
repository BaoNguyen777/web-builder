// components/TemplateCard.tsx
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

interface TemplateProps {
  _id: string;
  name: string;
  description: string;
  previewImage: string;
  price: number;
}

export default function TemplateCard({ _id, name, description, previewImage, price }: TemplateProps) {
  const router = useRouter();

  const handleChoose = () => {
    router.push(`/edit-template/${_id}`); // chọn template để edit
  };

  return (
    <div className="border rounded-2xl shadow-md p-4 flex flex-col">
      <Image
        src={previewImage}
        alt={name}
        width={400}
        height={250}
        className="rounded-xl object-cover"
      />
      <h2 className="text-lg font-bold mt-2">{name}</h2>
      <p className="text-gray-600 text-sm flex-grow">{description}</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="text-blue-600 font-semibold">${price}</span>
        <button
          onClick={handleChoose}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl"
        >
          Use
        </button>
      </div>
    </div>
  );
}
