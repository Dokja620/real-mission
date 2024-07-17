import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Gallery } from "./gallery";
import { Title } from "./title";

export default component$(() => {
    return (
        <>
            <Title/>
            <Gallery/>
        </>
    );
});

export const head: DocumentHead = {
    title: "Galerie",
    meta: [
        {
            name: "description",
            content: "Missionnaire",
        },
    ],
};
