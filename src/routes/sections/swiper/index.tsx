import { component$, useStore, $, useVisibleTask$ } from '@builder.io/qwik';

const swiperData = [
    {
        h3: 'NOTRE VISION',
        h4: '| UNE DES STRUCTURES D’EMISSION DES MISSIONNAIRES LE PLUS ABONDANT EN AFRIQUE',
        p: 'Dieu exhorte tous les chrétiens pour être intégrer dans sa divine vision, et gagner son objectif. Toutes les actions entreprises soient accomplies dans l’authenticité, dans l’honnêteté et à travers l’intégrité.',
    },
    {
        h3: 'NOS MISSIONS',
        h4: '| APPORTER L’EVANGILE DANS LA SOCIETE ET EVANGELISER L’EGLISE',
        p: 'L’évangélisation, et le discipôlat sont les fondements de la mission. C’est ce qu’on appelle « L’EMINENTE MISSION » accomplir celle-ci est la raison d’être et la raison de vivre des chrétiens. ',
    },
    {
        h3: 'LA FINALITE',
        h4: '| CHAQUE CHRETIEN DEVIENT UN MISSIONNAIRE',
        p: 'Si les chrétiens s’approprient et appliquent l’évangile, l’objectif de Dieu sera accompli. La réalisation de cela sera un immense devoir, mais c’est un impératif pour que ses messages soient accomplis.',
    },
    {
        h3: 'NOTRE PHILOSOPHIE',
        h4: '| MALAGASY PRECHE L’EVANGILE AU PEUPLE MALAGASY, SOUTENU PAR DES MALAGASY ET PRÔNE L’ENTRE AIDE',
        p: 'Les missionnaires de l’Ouest ont apporté l’évangile à Madagascar, et maintenant les églises malagasy continuent leurs efforts. Chaque soutien est précieux, car « on ne pourra pas bâtir une maison avec une seule main ».',
    },
    {
        h3: 'NOTRE APPROCHE',
        h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'Les églises malagasy, en prenant le relais des missionnaires de l’Ouest, adaptent leur approche aux valeurs locales. Real Mission Movement incarne cet effort collectif sans perdre son essence, comme « la rivière de l’Ikopa ».',
    },
    {
        h3: 'IMPACT',
        h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'L’evangile sera une valeure constituant l’identite des malagasy, se transmet de generation en generation et garant d’un developpement harmonieux et durable pour la nation',
    },
    {
        h3: 'LE BUT',
        // h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'Promouvoir un changement de pensee, un changement de faire et de maniere et un changement de comportement',
    },
    {
        h3: 'EFFETS ATTENDUS',
        h4: "Que chaque ménage s'approprie de l'évangile et l'utilise pour reprendre des décisions de croissance et d'épanouissement durable de chaque membre de la famille.",
        p: "Que l'évangile soit adopté par les leaders de tout les niveaux comme un outil de leadership et de management de développement communautaire.",
    }
];

export const Swiper = component$(() => {
    const state = useStore<{ activeStep: number, intervalId: number | null }>({ activeStep: 1, intervalId: null });

    const setNextStep = $(() => {
        state.activeStep = (state.activeStep % swiperData.length) + 1;
    });

    const startInterval = $(() => {
        clearInterval(state.intervalId!); // Clear any existing interval before starting a new one
        state.intervalId = window.setInterval(setNextStep, 12000);
    });

    const clearInterval$ = $(() => {
        if (state.intervalId !== null) {
            clearInterval(state.intervalId);
            state.intervalId = null;
        }
    });

    const handlePaginationClick = $((step: number) => {
        clearInterval$();
        state.activeStep = step;
        startInterval();
    });

    useVisibleTask$(() => {
        startInterval();
        return () => clearInterval$();
    });

    return (
        <section id="swiper">
            {swiperData.map((data, index) => (
                <div class={`swipe ${state.activeStep === index + 1 ? 'active' : ''}`} style={{ display: state.activeStep === index + 1 ? 'flex' : 'none' }} data-step={index + 1}>
                    <div class="text">
                        <h3>{data.h3}</h3>
                        <h4>{data.h4}</h4>
                        <p>{data.p}</p>
                    </div>
                    <div class="illu">
                        {/* Add your illustration content here */}
                    </div>
                    <div class="pagination">
                        {swiperData.map((_, i) => (
                            <span
                                key={i}
                                class={state.activeStep === i + 1 ? 'active' : ''}
                                onClick$={() => handlePaginationClick(i + 1)}
                            ></span>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
});
