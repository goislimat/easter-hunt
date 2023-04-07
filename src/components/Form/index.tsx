"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(false);

  const router = useRouter();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setError(false);
    setAnswer(event.target.value);
  };

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (answer.toLocaleLowerCase() !== "h3i4j5") {
      setError(true);
    } else {
      console.log("redirecting");
      router.push("/congratulations");
    }
  };

  return (
    <form className="h-full flex flex-col" onSubmit={handleSubmit}>
      <input
        className={`flex-grow bg-transparent text-center text-7xl ${
          error ? "text-red-700" : ""
        }`}
        type="text"
        value={answer}
        onChange={handleChange}
      />
      <button className="bg-sky-700 font-bold p-4" type="submit">
        CHECAR RESPOSTA
      </button>
    </form>
  );
}
