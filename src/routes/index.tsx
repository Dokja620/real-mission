import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "./sections/hero";
import { Founder } from "./sections/founder";
import { Goal } from "./sections/goal";
import { Process } from "./sections/process";
import { Way } from "./sections/way";
import { CallToAction } from "./sections/c-t-a";

export default component$(() => {
  return (
    <>
      <Hero/>
      <Goal/>
      <Process/>
      <Way/>
      <Founder/>
      <CallToAction/>
    </>
  );
});

export const head: DocumentHead = {
  title: "Real Mission Movement",
  meta: [
    {
      name: "description",
      content: "Missionnaire",
    },
  ],
};
