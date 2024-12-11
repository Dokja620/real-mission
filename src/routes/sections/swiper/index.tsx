import { component$, useStore, $, useVisibleTask$ } from '@builder.io/qwik';

const swiperData = [
    {
        h3: 'NOTRE VISION',
        h4: '| UNE DES ORGANISATIONS LES PLUS PROLIFIQUES POUR L’ENVOI DE MISSIONNAIRES EN AFRIQUE.',
        p: 'Dieu exhorte tous les chrétiens pour être intégrés dans sa divine vision, et gagner son objectif. Toutes les actions entreprises soient accomplies dans l’authenticité, dans l’honnêteté et à travers l’intégrité.',
        h3_English: 'OUR VISION',
        h4_English: "| ONE OF THE MOST PROLIFIC ORGANIZATIONS FOR SENDING MISSIONARIES TO AFRICA.",
        p_English: 'God exhorts all Christians to embrace His divine vision and fulfill His will. Every action undertaken is carried out with authenticity, honesty, and integrity.',
    },
    {
        h3: 'NOS MISSIONS',
        h4: "| DIFFUSER L'EVANGILE AU SEIN DE LA SOCIETE. MOBILISER  L’EGLISE POUR FORMER DES DISCIPLES",
        p: 'L’évangélisation, et le discipôlat sont les fondements de la mission. C’est ce qu’on appelle « L’EMINENTE MISSION » accomplir celle-ci est la raison d’être et la raison de vivre des chrétiens. ',
        h3_English: 'OUR  MISSIONS',
        h4_English: '| SPREAD THE GOSPEL WITHIN SOCIETY. MOBILIZE THE CHURCH TO TRAIN DISCIPLES ',
        p_English: 'Evangelism and discipleship form the foundation of the mission. They constitute the ‘EMINENT MISSION’ of RMM. For Christians, fulfilling this mission should be their reason for being.',
    },
    {
        h3: 'LA FINALITE',
        h4: '| CHAQUE CHRETIEN DEVRAIT SE TRANSFORMER  EN DISCIPLE MISSIONNAIRE',
        p: 'Lorsque les chrétiens s’approprient et mettent en pratique l’évangile, le plan de Dieu s’accomplit plus rapidement. En ce sens, la responsabilité des chrétiens est à la fois lourde et cruciale. ',
        h3_English: 'THE PURPOSE',
        h4_English: '| EVERY CHRISTIAN SHOULD TRANSFORM INTO A MISSIONARY DISCIPLE.',
        p_English: "When Christians embrace and practice the gospel, God’s plan is fulfilled more quickly. In this sense, the responsibility of Christians is both heavy and crucial",
    },
    {
        h3: 'NOTRE PHILOSOPHIE',
        h4: '| MALAGASY PRECHE L’EVANGILE AU PEUPLE MALAGASY, SOUTENU PAR DES MALAGASY ET PRÔNE L’ENTRE AIDE',
        p: 'Les Malagasy prêchent l’évangile au peuple malagasy. La mission est soutenue par les Malagasy, et promeut la solidarité et l’entraide.',
        h3_English: 'OUR PHYLOSOPHY',
        h4_English: '| MALAGASY PREACH THE GOSPEL TO THE MALAGASY PEOPLE, SUPPORTED BY MALAGASY AND OPEN TO MUTUAL AID',
        p_English: 'Les missionnaires de l’Ouest ont apporté l’évangile à Madagascar, et maintenant les églises malagasy continuent leurs efforts. Chaque soutien est précieux, car « on ne pourra pas bâtir une maison avec une seule main ».',
    },
    {
        h3: 'NOTRE APPROCHE',
        h4: '| UN PROCESSUS DE DEVELOPPEMENT HOLISTIQUE, BASE SUR LES VALEURS BIBLIQUES ET ADAPTE A LA CULTURE MALAGASY',
        p: 'Les missionnaires occidentaux, porteurs de l’Évangile à Madagascar, ont apporté la lumière. Ils ont accompli leurs responsabilités, et les églises malagasy déploient les efforts nécessaires pour assurer la continuité. ‘On ne peut pas bâtir une maison avec une seule main’, chaque soutien est donc le bienvenu. Real Mission Movement valorise le travail d’équipe et accueille chaleureusement tout partenariat.',
        h3_English: 'OUR APPROACH',
        h4_English: '| A HOLISTIC DEVELOPMENT PROCESS, BASED ON BIBLICAL VALUES AND ADAPTED TO MALAGASY CULTURE.',
        p_English: `Western missionaries, bearers of the Gospel to Madagascar, brought the light. They fulfilled their responsibilities, and Malagasy churches are making the necessary efforts to ensure continuity.`,
    },
    {
        h3: 'IMPACT',
        h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'L’Évangile constituera une valeur fondamentale de l’identité malagasy, se transmettant de génération en génération et garantissant un développement harmonieux et durable pour la nation.',
        h3_English: 'IMPACT',
        h4_English: '| HOLISTIC DEVELOPMENT PROCESS ADAPTED TO MALAGASY VALUES',
        p_English: 'The Gospel will become a fundamental value of Malagasy identity, passed down from generation to generation, ensuring harmonious and sustainable development for the nation.',
    },
    {
        h3: 'LE BUT',
        // h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p: 'Promouvoir une transformation positive, incluant un changement de mentalité, de méthode et de comportement.',
        h3_English: 'THE GOAL',
        // h4: '| PROCESSUS DE DEVELOPPEMENT HOLISTIQUE ADAPTE AUX VALEURS MALAGASY',
        p_English: 'To promote positive transformation, including a change in mentality, method, and behavior.',
    },
    {
        h3: 'EFFETS ATTENDUS',
        h4: "Effet 1 :",
        p: "Chaque ménage s’approprie l’évangile et l’utilise pour prendre des décisions favorisant la croissance et l’épanouissement durable de chaque membre de la famille.",
        h3_English: 'EXPECTED EFFECTS',
        h4_english: "Effect 1: ",
        p_english: "Each household appropriates the Gospel and uses it to make decisions that favor the sustainable growth and flourishing of each family member.",
    },
    {
        h3: 'EFFETS ATTENDUS',
        h4: "Effet 2 :",
        p: "L’évangile est adopté par les leaders à tous les niveaux comme un outil de leadership et de gestion pour le développement communautaire.",
        h3_English: 'EXPECTED EFFECTS',
        h4_english: "Effect 2: ",
        p_english: "The Gospel is adopted by leaders at all levels as a tool for leadership and management for community development.",
    }
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
