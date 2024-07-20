import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { StratHero } from "./stratHero";
import { Impact } from "./impact";
import { Action } from "./action";
import { Effect } from "./effect";
import { Orientation } from "./orientation";

export default component$(() => {
    return (
        <>
            {/* <StratHero/>
            <Impact/>
            <Effect/>
            <Orientation/> */}
            <Action/>
        </>
    );
});

export const head: DocumentHead = {
    title: "Strategie",
    meta: [
        {
            name: "description",
            content: "Missionnaire",
        },
    ],
};
