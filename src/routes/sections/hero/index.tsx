import { component$ } from '@builder.io/qwik';
import type { PropFunction } from '@builder.io/qwik';

type HeroProps = {
  onContactClick$: PropFunction<() => void>;
};

export const Hero = component$<HeroProps>(({ onContactClick$ }) => {
  return (
    <section id="hero">
      <div class="content container">
        <h1 lang-switch="french">La vraie mission <br /> pour le véritable Évangile</h1>
        <h1 lang-switch="english">The Real mission<br /> for the Real Gospel</h1>
        
        <h2>Real Mission Movement</h2>
        <div class="c-t-a">
          <button onClick$={onContactClick$} lang-switch="french">
            Nous contacter
          </button>
          <a href="" lang-switch="french">Nous rejoindre</a>
          <button onClick$={onContactClick$} lang-switch="english">
            Reach us
          </button>
          <a href="" lang-switch="english">Join us</a>
        </div>
      </div>
    </section>
  );
});
