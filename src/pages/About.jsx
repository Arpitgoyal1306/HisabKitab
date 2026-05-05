function About() {
  return (
    <div className="space-y-10">
      <section className="card-hero p-7 sm:p-9">
        <p className="eyebrow">About</p>
        <h1 className="text-3xl sm:text-4xl font-semibold">
          Designed for calm money tracking
        </h1>
        <p className="mt-3 text-muted max-w-2xl">
          HisabKitab is a personal expense tracker built to keep money
          management focused and easy to revisit. Log expenses, stay within
          budget, and explore reports without noise.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <p className="eyebrow font-bold">Why it exists</p>
          <h2 className="text-xl font-semibold mt-2">
            A focused expense companion
          </h2>
          <p className="text-muted mt-3">
            The goal is to make daily spending decisions easier by keeping the
            most important information front and center.
          </p>
        </div>
        <div className="card p-6">
          <p className="eyebrow font-bold">Principles</p>
          <h2 className="text-xl font-semibold mt-2 ">How it is designed</h2>
          <ul className="mt-4 space-y-3 text-muted">
            <li>Clarity before complexity.</li>
            <li>Quick capture, thoughtful review.</li>
            <li>Calm visuals that keep you focused.</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <p className="eyebrow font-bold">Key Features</p>
          <h2 className="text-xl font-semibold mt-2 ">Key Features</h2>
          <ul className="space-y-2 text-muted">
            <li>Add, edit, and delete expenses</li>
            <li>Budget tracking with progress bar</li>
            <li>Weekly and monthly reports</li>
            <li>Category-wise spending analysis</li>
            <li>Search, filter, and sorting</li>
            <li>Export data to CSV</li>
            <li>Dark mode support</li>
          </ul>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-semibold mb-3 font-bold">Technologies Used</h2>
          <ul className="space-y-2 text-muted">
            <li>React</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5 & CSS3</li>
            <li>Tailwind CSS</li>
            <li>Local Storage for data persistence</li>
          </ul>
        </div>
      </section>

      <section className="card-muted p-6">
        <p className="eyebrow font-bold">Data & privacy</p>
        <h2 className="text-xl font-semibold mt-2">
          Everything stays on your device
        </h2>
        <p className="text-muted mt-3">
          HisabKitab stores your expenses locally, so you stay in control of
          your data while still getting full reporting and insights.
        </p>
      </section>
    </div>
  );
}

export default About;
