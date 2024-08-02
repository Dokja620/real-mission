import { component$ } from '@builder.io/qwik';

export const Hero = component$(() => {
    return (
        <section id="hero" class="">
            <div class="content container">
                <h1 lang-switch="french">La vraie mission <br /> pour le véritable Évangile</h1>
                <h1 lang-switch="english">The Real mission<br /> for the Real Gospel</h1>
                
                <h2>Real Mission Movement</h2>
                <div class="c-t-a">
                    <a href="">Nous contacter</a>
                    <a href="">Visiter le site</a>
                </div>
            </div>
        </section>
    )
});