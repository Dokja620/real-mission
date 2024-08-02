import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Hero } from "./sections/hero";
import { Founder } from "./sections/founder";
import { GetTop } from "~/components/get-to-top";
import { Contact } from "~/components/contact";
import { Swiper } from "./sections/swiper";
import { Map } from "./sections/map";

export default component$(() => {
  return (
    <>
      <Hero/>
      <Swiper/>
      <Founder/>
      {/* <Map/> */}
      <GetTop/>
      <Contact/>
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
