"use client";
import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#EE0099", "#DD335C"];

export const HeroPulse = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`4px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative flex flex-col lg:flex-row-reverse items-center justify-center gap-8 xl:gap-8 min-h-screen place-content-center overflow-hidden bg-gray-950  text-gray-200 py-16 sm:py-0"
    >
      <header className="flex flex-col relative z-10 max-w-3xl gap-8 text-center lg:text-left px-8  justify-center items-center lg:justify-start lg:items-start lg:w-1/2">
        <span className="rounded-full bg-gray-600/50 px-4 py-2 text-xs w-fit font-semibold tracking-wider uppercase">
          {"Let’s Game"}
        </span>
        <h1 className="bg-gradient-to-br from-white to-gray-400 bg-clip-text font-semibold text-transparent  text-5xl lg:text-7xl xl:text-8xl text-balance leading-tight lg:leading-tight  ">
          {"Ready to play with me?"}
        </h1>
        <p className="max-w-sm text-xl xl:text-2xl text-balance leading-loose lg:leading-relaxed xl:leading-relaxed ">
          From Valorant to Call of Duty. Book me in for a shooter sesh...
        </p>
        <div className="flex flex-row gap-8 justify-between items-center h-full  mt-4">
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.015,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center rounded-full bg-gray-950/10 px-8 py-4 font-bold text-gray-50 transition-colors hover:bg-gray-950/50 text-sm"
          >
            <Link
              href="https://calendly.com/n4tures/chitchatting-1-hour-clone"
              target="_blank"
            >
              {"Book a Time"}
            </Link>
          </motion.button>
          <Dialog>
            <DialogTrigger className="text-sm">My Fav Games</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>My Fav Games</DialogTitle>
                {/* <DialogDescription>List of games I can play</DialogDescription> */}
              </DialogHeader>
              <ul>
                <li>• Game 1</li>
                <li>• Game 2</li>
                <li>• Game 3</li>
              </ul>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <section className=" lg:h-screen lg:w-1/2 lg:flex lg:justify-center lg:items-center p-8 xl:p-32 min-w-80 ">
        <motion.figure
          className="rounded-3xl overflow-hidden aspect-square "
          style={{
            border,
            boxShadow,
          }}
        >
          <Image
            src="/nature-main.jpeg"
            alt="Nature: Play with me"
            width={1080}
            height={1080}
            className="object-cover h-full w-full"
          />
        </motion.figure>
      </section>
    </motion.section>
  );
};
