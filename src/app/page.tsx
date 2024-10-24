import SearchForm from "./SearchForm";

export default async function Home() {
  return (
    <main className="min-h-screen w-full bg-white">
      <header className="mx-auto flex h-40 w-full max-w-screen-lg flex-col justify-center p-4">
        <h1 className="mb-2 font-medium leading-tight">
          Yet another Web3 job board
        </h1>
        <p>Find the best jobs in the Web3 space.</p>
      </header>

      <section className="mx-auto flex w-full max-w-screen-lg flex-col p-4">
        <SearchForm />
      </section>
    </main>
  );
}
