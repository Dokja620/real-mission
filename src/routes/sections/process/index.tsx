
import { component$ } from '@builder.io/qwik';
import Img001 from '~/media/media/finality/001.jpg?jsx';

export const Process = component$(() => {
    return (
        <section id="process" class="container">
            <div class="images">
                <div class="wrap slide-1">
                    <Img001 alt="image random" />
                </div>
                <div class="navigation">
                    <button class="prev"></button>
                    <button class="next"></button>
                </div>
                <div class="pagination">
                    <span></span><span></span><span></span><span></span><span></span>
                </div>
            </div>
            <div class="text">
                <h4>LA FINALITE</h4>
                <h5>| CHAQUE CHRETIEN DEVIENT UN MISSIONNAIRE</h5>
                <p>
                    Si les chrétiens s’approprient et appliquent l’évangile, 
                    l’objectif de Dieu sera accompli. La réalisation de cela 
                    sera un immense devoir, mais c’est un impératif pour 
                    que ses messages soient accomplis. 
                </p>
            </div>
        </section>
    )
});