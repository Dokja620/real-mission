import { component$, useStore, $ } from '@builder.io/qwik';

export const Gallery = component$(() => {
    const totalItems = 174;
    const initialVisibleItems = 14;
    const increment = 15;
    const state = useStore({ visibleItems: initialVisibleItems });

    const showMore = $(() => {
        state.visibleItems = Math.min(state.visibleItems + increment, totalItems);
    });

    return (
        <section id="gallery" class="container">
            {Array.from({ length: state.visibleItems }, (_, i) => (
                <div class="gall" key={i + 1}></div>
            ))}
            {state.visibleItems < totalItems && (
                <button onClick$={showMore} class="see-more"><h5>Voir plus</h5></button>
            )}
        </section>
    );
});
