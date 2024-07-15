import { component$ } from '@builder.io/qwik';

export const Goal = component$(() => {
    return (
        <section id="goal" class="container">
            <div class="content">
                <div class="vision">
                    <h4>NOTRE VISION</h4>
                    <h5>| UNE DES STRUCTURES D’EMISSION DES MISSIONNAIRES LE PLUS ABONDANT EN AFRIQUE</h5>
                    <p>
                        Dieu exhorte tous les chrétiens pour être intégrer 
                        dans sa divine vision, et gagner son objectif. 
                        Toutes les actions entreprises soient accomplies
                        dans l’authenticité, dans l’honnêteté et à travers 
                        l’intégrité. 
                    </p>
                </div>
                <div class="mission">
                    <h4>NOS MISSIONS</h4>
                    <h5>| APPORTER L’EVANGILE DANS LA SOCIETE ET EVANGELISER L’EGLISE</h5>
                    <p>
                        L’évangélisation, et le discipôlat sont les 
                        fondements de la mission. C’est ce qu’on appelle 
                        « L’EMINENTE MISSION » accomplir celle-ci 
                        est la raison d’être et la raison de vivre des 
                        chrétiens. 
                    </p>
                </div>
            </div>
        </section>
    )
});