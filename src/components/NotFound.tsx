import { Button } from "@/components/ui/button";

function NotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 py-16 text-center">
      <div className="site-container flex max-w-md flex-col items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="56px"
          viewBox="0 -960 960 960"
          width="56px"
          className="text-accent"
          fill="currentColor"
        >
          <path d="m298-456 143-104-143-104-36 48 77 56-77 56 36 48Zm364 0 36-48-77-56 77-56-36-48-143 104 143 104ZM420-278l60-60 60 60 60-60 39 39 42-42-81-81-60 60-60-60-60 60-60-60-81 81 42 42 39-39 60 60Zm-96 166.5Q251-143 197-197t-85.5-127Q80-397 80-480t31.5-156Q143-709 197-763t127-85.5Q397-880 480-880t156 31.5Q709-817 763-763t85.5 127Q880-563 880-480t-31.5 156Q817-251 763-197t-127 85.5Q563-80 480-80t-156-31.5ZM480-480Zm227 227q93-93 93-227t-93-227q-93-93-227-93t-227 93q-93 93-93 227t93 227q93 93 227 93t227-93Z" />
        </svg>

        <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        <p className="mt-4 leading-7 text-secondary">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>

        <Button onClick={handleGoHome} size="lg" className="mt-8">
          Back to homepage
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
