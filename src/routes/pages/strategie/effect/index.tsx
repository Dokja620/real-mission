
import { component$ } from '@builder.io/qwik';
import Img003 from '/public/media/strategy/003.webp?jsx';

export const Effect = component$(() => {
  return (
    <section id="effect" class="container">
        <div class="image">
            <Img003 alt="standing dudes with micros" />
        </div>
        <div class="text">
            <h4>EFFETS ATTENDUS</h4>
            <div>
                <p>
                    Que chaque ménage s'approprie de l'évangile et l'utilise pour reprendre
                    des décisions de croissance et d'épanouissement durable de chaque
                    membre de la famille.
                </p>
            </div>
            <div>
                <p>
                    Que l'évangile soit adopté par les leaders de tout les niveaux comme
                    un outil de leadership et de management de développement communautaire.
                </p>
            </div>
        </div>
    </section>
  )
});