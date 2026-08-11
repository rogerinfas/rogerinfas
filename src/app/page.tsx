export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 sm:p-24 bg-background text-foreground">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-12">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-border bg-background/80 pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto lg:rounded-xl lg:border lg:p-4">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p>
      </div>

      <div className="relative flex flex-col items-center justify-center my-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground mb-4">
          React Application
        </h1>
        <p className="text-lg text-muted-foreground max-w-md">
          A clean initial React & Next.js starter project.
        </p>
      </div>

      <div className="grid text-center lg:max-w-5xl lg:w-full lg:grid-cols-4 lg:text-left gap-4 mt-8">
        <div className="group rounded-xl border border-border p-6 transition-all hover:border-foreground/30 hover:bg-secondary-background">
          <h2 className="mb-2 text-2xl font-semibold">
            Docs <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-70">
            Find in-depth information about React features and API.
          </p>
        </div>

        <div className="group rounded-xl border border-border p-6 transition-all hover:border-foreground/30 hover:bg-secondary-background">
          <h2 className="mb-2 text-2xl font-semibold">
            Learn <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-70">
            Learn about React in an interactive environment.
          </p>
        </div>

        <div className="group rounded-xl border border-border p-6 transition-all hover:border-foreground/30 hover:bg-secondary-background">
          <h2 className="mb-2 text-2xl font-semibold">
            Templates <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-70">
            Explore starter templates and components.
          </p>
        </div>

        <div className="group rounded-xl border border-border p-6 transition-all hover:border-foreground/30 hover:bg-secondary-background">
          <h2 className="mb-2 text-2xl font-semibold">
            Deploy <span className="inline-block transition-transform group-hover:translate-x-1">-&gt;</span>
          </h2>
          <p className="text-sm opacity-70">
            Instantly deploy your React app to Vercel or cloud.
          </p>
        </div>
      </div>
    </main>
  )
}
