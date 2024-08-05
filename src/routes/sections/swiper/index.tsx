import { component$, useStore, $, useVisibleTask$ } from '@builder.io/qwik';

const swiperData = [
    {
        h3: 'NOTRE VISION',
        h4: '| UNE DES STRUCTURES D’EMISSION DES MISSIONNAIRES LE PLUS ABONDANT EN AFRIQUE',
        p: 'Dieu exhorte tous les chrétiens pour être intégrer dans sa divine vision, et gagner son objectif. Toutes les actions entreprises soient accomplies dans l’authenticité, dans l’honnêteté et à travers l’intégrité.',
        h3_English: 'OUR VISION',
        h4_English: "| ONE OF AFRICA'S MOST ABUNDANT MISSIONARY EMISSION STRUCTURES",
        p_English: 'God urges his believers to be integrated into his divine vision, and to win his objective. All actions must be carried out with authenticity, honesty and integrity.',
    },
    {
        h3: 'NOS MISSIONS',
        h4: '| APPORTER L’EVANGILE DANS LA SOCIETE ET EVANGELISER L’EGLISE',
        p: 'L’évangélisation, et le discipôlat sont les fondements de la mission. C’est ce qu’on appelle « L’EMINENTE MISSION » accomplir celle-ci est la raison d’être et la raison de vivre des chrétiens. ',
        h3_English: 'OUR  MISSIONS',
        h4_English: '| BRING THE GOSPEL TO SOCIETY EVANGELIZE THE CHURCH',
        p_English: 'Evangelization and discipleship are the foundations of mission. This is what we call "THE GREAT COMMISSION", which is why we exist and the raison to live of Christians',
    },
    {
        h3: 'LA FINALITE',
        h4: '| CHAQUE CHRETIEN DEVIENT UN MISSIONNAIRE',
        p: 'Si les chrétiens s’approprient et appliquent l’évangile, l’objectif de Dieu sera accompli. La réalisation de cela sera un immense devoir, mais c’est un impératif pour que ses messages soient accomplis.',
        h3_English: 'THE PURPOSE',
        h4_English: '| EVERY CHRISTIAN BECOMES MISSIONNARY',
        p_English: "If Christians appropriate and apply the gospel, God's purpose will be fulfilled. Achieving this will be an immense duty, but it is an imperative if his messages are to be fulfilled",
    },
    {
        h3: 'NOTRE PHILOSOPHIE',
        h4: '| MALAGASY PRECHE L’EVANGILE AU PEUPLE MALAGASY, SOUTENU PAR DES MALAGASY ET PRÔNE L’ENTRE AIDE',
        p: 'Les missionnaires de l’Ouest ont apporté l’évangile à Madagascar, et maintenant les églises malagasy continuent leurs efforts. Chaque soutien est précieux, car « on ne pourra pas bâtir une maison avec une seule main ».',
        h3_English: 'OUR PHYLOSOPHY',
        h4_English: '| MALAGASY PREACH THE GOSPEL TO THE MALAGASY PEOPLE, SUPPORTED BY MALAGASY AND OPEN TO MUTUAL AID',
        p_English: 'Les missionnaires de l’Ouest ont apporté l’évangile à Madagascar, et maintenant les églises malagasy continuent leurs efforts. Chaque soutien est précieux, car « on ne pourra pas bâtir une maison avec une seule main ».',
    },
    {
        h3: 'NOTRE APPROCHE',
        h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'Les églises malagasy, en prenant le relais des missionnaires de l’Ouest, adaptent leur approche aux valeurs locales. Real Mission Movement incarne cet effort collectif sans perdre son essence, comme « la rivière de l’Ikopa ».',
        h3_English: 'OUR APPROACH',
        h4_English: '| PROCESS OF HOLISTIC DEVELOPMENT ADAPTED TO MALAGASY VALUES',
        p_English: `Indeed, the missionaries of the West, bearers of the Gospel in Madagascar, have passed on the light. They have fulfilled their responsibilities, and the Malagasy churches are making the necessary effort to take up the baton. "You can't build a house with just one hand", every support is welcome. Real Mission Movement will never embody, as the Malagasy saying goes, "like the river of Ikopa, by welcoming its friends, it turns yellow".`,
    },
    {
        h3: 'IMPACT',
        h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'L’evangile sera une valeure constituant l’identite des malagasy, se transmet de generation en generation et garant d’un developpement harmonieux et durable pour la nation',
        h3_English: 'IMPACT',
        h4_English: '| HOLISTIC DEVELOPMENT PROCESS ADAPTED TO MALAGASY VALUES',
        p_English: 'The gospel will be a value constituting the identity of the Malagasy, passed down from generation to generation, and a guarantee of harmonious and sustainable development for the nation',
    },
    {
        h3: 'LE BUT',
        // h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'Promouvoir un changement de pensee, un changement de faire et de maniere et un changement de comportement',
        h3_English: 'THE GOAL',
        // h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p_English: 'Promoting a change of thinking, a change of doing and a change of behaviour',
    },
    // {
    //     h3: 'EFFETS ATTENDUS',
    //     h4: "Que chaque ménage s'approprie de l'évangile et l'utilise pour reprendre des décisions de croissance et d'épanouissement durable de chaque membre de la famille.",
    //     p: "Que l'évangile soit adopté par les leaders de tout les niveaux comme un outil de leadership et de management de développement communautaire.",
    //     h3_English: 'EXPECTED EFFECTS',
    //     h4_english: "Every household appropriates the gospel and uses it to make decisions for the sustainable growth and development of every family member",
    //     p_english: "The gospel is embraced by leaders at all levels as a leadership and management tool for community development",
    // }
];

export const Swiper = component$(() => {
    const state = useStore<{ activeStep: number, intervalId: number | null }>({ activeStep: 1, intervalId: null });

    const setNextStep = $(() => {
        state.activeStep = (state.activeStep % swiperData.length) + 1;
    });

    const startInterval = $(() => {
        clearInterval(state.intervalId!);
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

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        startInterval();
        return () => clearInterval$();
    });

    return (
        <section id="swiper">
            {swiperData.map((data, index) => (
                // eslint-disable-next-line qwik/jsx-key
                <div class={`swipe ${state.activeStep === index + 1 ? 'active' : ''}`} style={{ display: state.activeStep === index + 1 ? 'flex' : 'none' }} data-step={index + 1}>
                    <div class="text">
                        <h3 lang-switch="french">{data.h3}</h3>
                        <h4 lang-switch="french">{data.h4}</h4>
                        <p lang-switch="french">{data.p}</p>
                        <h3 lang-switch="english">{data.h3_English}</h3>
                        <h4 lang-switch="english">{data.h4_English}</h4>
                        <p lang-switch="english">{data.p_English}</p>
                    </div>
                    <div class="illu">
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
