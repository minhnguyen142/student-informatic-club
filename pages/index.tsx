import "@/app/globals.css";
import { useState } from "react";
import Header from "@/components/header";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen dark:bg-gray-700 dark:text-white">
      <div className="transition-all">
        <title>Student Informatic Club</title>
        <Header darkMode={darkMode} />

        <Image
          src="/11299316_4709918.jpg"
          alt="11299316_4709918"
          width="2000"
          height="900"
          className="w-full"
        ></Image>

        <div className="text-center my-20 bg-yellow-200 w-fit mx-auto">
          <p className="text-3xl">Thuy Loi University</p>
          <p className="text-5xl font-bold my-4 text-orange-400 dark:text-blue-700">Student Informatic Club</p>
        </div>

        <div className="flex justify-center w-fit mx-auto items-center bg-yellow-200">
              Hello
        </div>
      </div>
    </div>
  );
}
