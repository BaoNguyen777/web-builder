export interface BuildRequest {
  modules: string[];
}

export const buildWebsite = async (data: BuildRequest) => {
  const res = await fetch("http://localhost:3000/build", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("Build thất bại");

  const blob = await res.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "website.zip";
  a.click();
};
