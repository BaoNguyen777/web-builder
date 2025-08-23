// app/modules/page.js
async function ModulesPage() {
  const res = await fetch('http://localhost:8080'); // backend API
  const modules = await res.json();

  return (
    <div>
      <h1>Danh sách modules</h1>
      <ul>
        {modules.map(m => <li key={m.id}>{m.name}</li>)}
      </ul>
    </div>
  );
}

export default ModulesPage;
