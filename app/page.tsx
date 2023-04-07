import Form from "@/src/components/Form";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`h-[100svh] ${inter.className}`}>
      <Form />
    </main>
  );
}
