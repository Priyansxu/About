"use client";

import Image from "next/image";
import Link from "next/link";
import Wrapper from "@/components/wrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex h-screen w-full flex-col justify-between p-9">
        <Wrapper>
          <div className="mx-auto flex max-w-sm flex-col justify-between">
            <span
              className="-mt-14 inline-block text-[64px] font-bold text-black dark:text-white"
            >
              01
            </span>
            <p className="pb-6 font-medium">
              Priyanshu Gupta, born in 2007. A passionate and curious individual with a keen interest in programming, graphics designing, psychology, and space exploration. My Instagram{" "}
              <a
                href="https://instagram.com/priyansxu_gupta"
                target="_blank"
                rel="noreferrer"
                className="pb-1 text-zinc-800 dark:text-zinc-100 underline font-medium"
              >
                @priyansxu_gupta
              </a>{" "}
            </p>

            <div>
              <Link href="mailto:priyansxu@yahoo.com" target="_blank" rel="noreferrer">
                <Button size="xl" className="w-full font-bold">
                  E-mail me
                </Button>
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
}