import Link from "next/link";
import Image from "next/image";
import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { text } from "stream/consumers";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
    <HydrateClient>
      <main className="grid h-screen grid-cols-2">
        <div className="center flex h-full items-center justify-start">
          <div className="p-16">
            <h1 className="flex flex-row text-7xl font-semibold">
              Task<p className="text-brand-purple-dark">Findr</p>
            </h1>
            <p className="pl-4 font-light">
              We aim to create a platform exclusively for university students,
              enabling them to post and fulfill tasks within their own
              community, fostering collaboration, skill-sharing, and
              affordability while ensuring trust and convenience within a known
              network.
            </p>
          </div>
        </div>
        <div className="login-background flex h-screen flex-col items-center gap-7 p-24 pl-64">
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
            <input
              type="text"
              className="rounded-lg p-[6px] text-sm shadow-2xl"
            ></input>
            <input
              type="text"
              className="rounded-lg p-[6px] text-sm shadow-2xl"
            ></input>
            <input
              type="text"
              className="rounded-lg p-[6px] text-sm shadow-2xl"
            ></input>
          </div>

          <button className="bg-brand-purple-dark rounded-full p-2 px-12 text-white">
            Sign up
          </button>

          <p className="flex flex-row text-xs text-white">
            Have an account?&nbsp;
            <Link href={"/login"} className="text-brand-purple-dark underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>
    </HydrateClient>
  );
}
