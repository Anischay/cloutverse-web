export default function DocsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Documentation</h1>
      <div className="grid gap-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <p className="text-gray-600">
            Learn the basics of Cloutverse and how to get started with our platform.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>
          <p className="text-gray-600">
            Detailed documentation for integrating with the Cloutverse API.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tutorials</h2>
          <p className="text-gray-600">
            Step-by-step guides to help you make the most of Cloutverse.
          </p>
        </section>
      </div>
    </div>
  );
}
