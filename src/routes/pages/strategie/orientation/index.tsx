import { component$ } from '@builder.io/qwik';

export const Orientation = component$(() => {
    return (
        <section id="orientation" class="container">
            <div class="list">
                <h4>ORIENTATIONS STRATEGIQUES</h4>
                <div class="content">
                    <div>
                        <h5>ORIENTATION 01</h5>
                        <p>
                            DEVELOPPER LES CAPACITES DE MISE EN 
                            ŒUVRE DU RMM 
                        </p>
                    </div>
                    <div>
                        <h5>ORIENTATION 02</h5>
                        <p>
                            DEPLOYER L’EVANGILE JUSQU'AUX 
                            COMMUNAUTES LOCALES DE BASE
                        </p>
                    </div>
                    <div>
                        <h5>ORIENTATION 03</h5>
                        <p>
                            RENFORCER LES MOYENS D’EXISTANCE ET 
                            DE SUBSISTANCE AU NIVEAU LOCAL
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
});