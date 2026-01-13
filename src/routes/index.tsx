import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <div className="font-bold text-2xl">My App stuff</div>;
}
