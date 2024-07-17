
import { component$ } from '@builder.io/qwik';
import Img002 from '/public/media/strategy/002.webp?jsx';

export const Action = component$(() => {
    return (
        <section id="action" class="container">
            <div class="sites">
                <h5>NOS SITES D'ACTION</h5>
                <div class="mada">
                    <Img002 alt="map of madagascar" />
                </div>
            </div>
            <div class="content">
                <div class="wrapper">
                    <div class="title">
                        <h5>NOS OBJECTIFS STRATEGIQUES</h5>
                        <h5>1/3</h5>
                    </div>
                    <div class="slider">
                        <div class="slide">
                            <div>
                                <p>
                                    Renforcer le système de diffusion de l’évangile et des 
                                    pratiques innovantes a Madagascar
                                </p>
                            </div>
                            <div>
                                <p>
                                    Renforcer la collaboration et la plaidoirie au niveau 
                                    nationale et internationale dans la mobilisation des ressources
                                </p>
                            </div>
                            <div>
                                <p>
                                    Assurer la coordination, le suivi et évaluation
                                    appropries du RMM programme
                                </p>
                            </div>
                            <div>
                                <p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="navigation">
                        <button class="prev"></button>
                        <button class="next"></button>
                    </div>
                </div>
            </div>
        </section>
    )
});