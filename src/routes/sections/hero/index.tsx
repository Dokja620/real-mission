import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
    return (
        <section id="hero" class="">
            <div class="content container">
                <h1>Miova, Manova… <br /> Mihavao, Manavao…</h1>
                <h2>Manorata tantara</h2>
                <div class="c-t-a">
                    <a href="">Nous soutenir</a>
                    <a href="">Voir plus …</a>
                </div>
            </div>
        </section>
    )
});