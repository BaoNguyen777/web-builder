document.getElementById('createBtn').addEventListener('click', () => {
  const selected = [...document.querySelectorAll('input[name="modules"]:checked')]
                   .map(el => el.value);

  if (selected.length === 0) {
    alert("Vui lòng chọn ít nhất một bảo bối!");
    return;
  }

  fetch('http://localhost:3000/build', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ modules: selected })
  })
  .then(res => res.blob())
  .then(file => {
    const url = URL.createObjectURL(file);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'website.zip';
    a.click();
    URL.revokeObjectURL(url);
  })
  .catch(err => {
    console.error(err);
    alert("Có lỗi khi tạo website!");
  });
});
