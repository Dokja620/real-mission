
import ImgHero from '~/media/media/hero.jpg?jsx';import { component$ } from '@builder.io/qwik';
import founder from '/media/hero.jpg';

export const Founder = component$(() => {
    return (
        <section id="founder" class="container">
            <div class="text">
                <h4>Mots du fondateur <br /> | <span>Rev Dr Mamy RASOLOFONDRAINIBE</span></h4>
                <p>
                    Le développement s’accélère à grand pas dans ce monde. – La 
                    technologie s’accroit et évolue vite. La société humaine se submerge 
                    dans son propre concept d’évolution. S’évoluer vers où ? sur quoi ? 
                    L’accomplissement de l’évangile a fait ses preuves partout et dans 
                    divers aspects de l’humanité. <br /> Et ceci cours à sa défaillance 
                    <span class="verse">(Efe.5.16b)</span>.
                </p>
                <p>
                    Sur ceux, qu’on peut témoigner que Jésus Christ n’a jamais changé 
                    <span class="verse">(Heb.13.8)</span>. Son message pour l’humanité 
                    n’a guère changé. Ordonne ses disciples à prêcher l’évangile à 
                    chacun des hommes dans le monde entier <span class="verse">(Mar.16.15)</span>, 
                    faire les nations terriennes ses disciples <span class="verse">(Mat.28.19)</span>, 
                    et être ses indéfectibles témoins jusqu’au bout de la terre … 
                    <span class="verse">(Asa.1.8)</span>
                </p>
                <p>
                    Real Mission Movement réalise ceux qui ont été dits, accomplit 
                    « l’authentique mission et le véridique évangile » 
                </p>
                {/* <p><span>Fondateur - William RABEZA</span></p> */}
            </div>
            <div class="image">
                <span></span>
                <ImgHero alt="Rev Dr Mamy RASOLOFONDRAINIBE" />
            </div>
        </section>
    )
});