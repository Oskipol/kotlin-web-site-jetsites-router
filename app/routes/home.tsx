import type { Route } from "./+types/home";
import { OverviewPage } from "../components/index/index";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Kotlin Programming Language" },
    { name: "description", content: "Kotlin is a modern programming language." },
  ];
}

export default function Home() {
  return <OverviewPage />;
}