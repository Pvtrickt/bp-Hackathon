"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import DetailsInput from "../_components/details-input";
export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      setter(event.target.value);
    };

  const handleClick = () => {
    router.push("");
  };

  return (
    <main className="grid h-screen grid-cols-2">
      <div className="center flex h-full items-center justify-start">
        <div className="flex flex-col gap-3 p-16">
          <h1 className="text-brand-purple-light flex flex-row text-7xl font-semibold">
            Schedula
          </h1>
          <p className="pl-1 font-light">
            Meet Schedula &#45; your ultimate study companion! Effortlessly
            create a customisable study schedule based on your chosen subjects,
            keeping you organized and on track throughout your university
            journey. Maximize your productivity with Schedula!
          </p>
        </div>
      </div>
      <div className="login-background flex h-screen flex-col items-center gap-3 p-24 pl-64">
        <Image
          src={"/register-email.png"}
          alt={"register email image"}
          width={250} // Set a default width
          height={250} // Set a default height to maintain aspect ratio
          // className="h-auto w-1/2 md:w-1/3 lg:w-1/4" // Responsively adjust the width
          // layout="responsive" // Ensure the image maintains aspect ratio
        />
        <div className="flex flex-col justify-center text-center">
          <h1 className="text-3xl font-semibold text-white">Register</h1>
          <p className="text-[11px] font-extralight text-white">
            Create your new account
          </p>
        </div>
        <div className="flex w-[80%] flex-col gap-6 p-5">
          <DetailsInput
            type="text"
            placeholder="Mobile Phone/Email"
            icon={<IoIosMail className="text-brand-purple-dark h-4 w-4" />}
            value={email}
            onChange={handleChange(setEmail)}
          />
          <DetailsInput
            type="text"
            placeholder="Username"
            icon={<FaUser className="text-brand-purple-dark h-4 w-4" />}
            value={username}
            onChange={handleChange(setUsername)}
          />
          <DetailsInput
            type="password"
            placeholder="Password"
            icon={<FaLock className="text-brand-purple-dark h-4 w-4" />}
            value={password}
            password={true}
            onChange={handleChange(setPassword)}
          />
        </div>

        <button
          onClick={handleClick}
          className="bg-brand-purple-dark rounded-full p-2 px-12 text-white"
        >
          Sign up
        </button>

        <p className="flex flex-row pt-7 text-xs text-white">
          Have an account?&nbsp;
          <Link href={"/login"} className="text-brand-purple-dark underline">
            Sign In
          </Link>
        </p>
      </div>
    </main>
  );
}
