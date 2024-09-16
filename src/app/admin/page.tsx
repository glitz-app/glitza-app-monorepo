import ModulesForm from "./ModulesForm";

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-8 p-4">
      <section className="mb-8">
        <h1>This is the admin dashboard</h1>
        <p>{"This page is restricted to admin users."}</p>
      </section>

      <section className="mb-8">
        <ModulesForm />
      </section>
    </div>
  );
}
