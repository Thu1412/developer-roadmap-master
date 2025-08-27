// Lấy tên roadmap từ URL hiện tại
const parts = window.location.pathname.split("/");
const roadmapId = parts.filter(Boolean).pop() || "frontend";

// Fetch file JSON trong thư mục jsons/roadmaps
fetch(`/developer-roadmap-master/jsons/roadmaps/${roadmapId}.json`)
  .then((res) => {
    if (!res.ok) throw new Error(`Không tìm thấy JSON: ${roadmapId}.json`);
    return res.json();
  })
  .then((data) => {
    document.getElementById("roadmap-title").textContent = data.title || "Roadmap";
    const list = document.getElementById("roadmap-topics");
    list.innerHTML = (data.topics || []).map(t => `<li>${t.name}</li>`).join("");
  })
  .catch((err) => {
    console.error(err);
    document.body.innerHTML = `<h2 style="color:red;text-align:center">Không tải được dữ liệu: ${roadmapId}</h2>`;
  });
