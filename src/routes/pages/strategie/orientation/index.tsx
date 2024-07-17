import { component$ } from '@builder.io/qwik';

export const Orientation = component$(() => {
    return (
        <section id="orientation" class="container">
            <h4>ORIENTATIONS STRATEGIQUES</h4>
            <div class="list">
                <div>
                    <h3>OR 01</h3>
                    <p>
                        DEVELOPPER LES CAPACITES DE MISE EN 
                        ŒUVRE DU RMM 
                    </p>
                </div>
                <div>
                    <h3>OR 02</h3>
                    <p>
                        DEPLOYER L’EVANGILE JUSQU'AUX 
                        COMMUNAUTES LOCALES DE BASE
                    </p>
                </div>
                <div>
                    <h3>OR 03</h3>
                    <p>
                        RENFORCER LES MOYENS D’EXISTANCE ET 
                        DE SUBSISTANCE AU NIVEAU LOCAL
                    </p>
                </div>
            </div>
        </section>
    )
});