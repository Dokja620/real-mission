import { component$, useStore, $ } from '@builder.io/qwik';
import Img002 from '/public/media/strategy/002.webp?jsx';

const articles = [
    "ACT 1.1.1 |", "ACT 1.1.2 |", "ACT 1.1.3 |", "ACT 1.2.1 |", "ACT 1.2.2 |", "ACT 1.2.3 |",
    "ACT 1.3.1 |", "ACT 1.3.2 |", "ACT 1.3.3 |", "ACT 1.3.3 |", "ACT 2.1.1 |", "ACT 2.1.2 |",
    "ACT 2.1.3 |", "ACT 2.2.1 |", "ACT 2.2.2 |", "ACT 2.3.1 |", "ACT 2.3.2 |", "ACT 2.3.3 |",
    "ACT 2.4.1 |", "ACT 2.4.2 |", "ACT 2.4.3 |", "ACT 3.1.1 |", "ACT 3.1.2 |", "ACT 3.1.3 |",
    "ACT 3.1.4 |", "ACT 3.1.5 |", "ACT 3.2.1 |", "ACT 3.2.2 |", "ACT 3.2.3 |", "ACT 3.3.1 |",
    "ACT 3.3.2 |", "ACT 3.2.3 |"
];

const items = [
    "Créer des centres de formation pour missionnaires dans les six provinces de Madagascar.",
    "Former des missionnaires et vulgarisateurs en pratiques innovantes et développement holistique.",
    "Créer une station de radio, Real Mission Radio, pour améliorer la communication.",
    "Renforcer la visibilité de RMM au niveau national et international pour plus d'impact.",
    "Développer des projets innovants avec les acteurs locaux pour les communautés.",
    "Organiser des formations en mobilisation des ressources et plaidoyer pour les leaders nationaux.",
    "Produire et diffuser deux bulletins semestriels, Real Mission News, pour les parties prenantes.",
    "Mettre à jour les outils de fonctionnement de RMM pour une meilleure efficacité.",
    "Se doter d'outils et d'équipements de travail adaptés pour la productivité.",
    "Acquérir des outils et évaluer les impacts des programmes de RMM.",
    "Mener des formations en mission appliquée, courtes et longues, pour les compétences.",
    "Organiser des formations approfondies en mission appliquée pour les missionnaires.",
    "Offrir des formations spécifiques en développement holistique pour les communautés locales.",
    "Créer une école et soutenir la scolarisation des enfants pour promouvoir l'éducation.",
    "Mener des formations en alphabétisation fonctionnelle pour adultes pour améliorer les compétences.",
    "Former les locaux aux pratiques agricoles innovantes pour augmenter la productivité durable.",
    "Former les locaux aux techniques de transformation des produits agricoles.",
    "Former les locaux aux pratiques de commercialisation agrobusiness pour améliorer les revenus.",
    "Créer un complexe sportif pour les jeunes et enfants pour promouvoir les loisirs.",
    "Établir des sites de démonstration pour les pratiques agricoles innovantes.",
    "Créer des infrastructures de santé et des structures mobiles pour opérations chirurgicales.",
    "Distribuer des médicaments, vêtements et ustensiles de cuisine pour les ménages.",
    "Soutenir la diversification culturale et l'intégration agriculture-élevage pour durabilité.",
    "Mettre en œuvre l'approche Cash+ pour les ménages les plus vulnérables.",
    "Appuyer les petits métiers liés à l'agriculture, élevage, forêt et pêche.",
    "Développer un système d'épargne mutuelle pour encourager l'épargne communautaire.",
    "Protéger et améliorer la gestion des ressources en eau existantes.",
    "Développer des solutions naturelles pour la protection des cultures et fertilisation des sols.",
    "Mener des campagnes de vaccination et déparasitage de masse pour animaux d'élevage.",
    "Créer des dispositifs de sécurisation des semences, comme les grainothèques.",
    "Encourager l'adoption d'un éco-village par la communauté locale.",
    "Mettre en relation les acteurs à travers une plateforme d'échange pour collaboration."
];

export const Action = component$(() => {
    const state = useStore({ currentPage: 1 });
    const itemsPerPage = 11; // Display 9 items per page
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const startIndex = (state.currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);
    const currentArticles = articles.slice(startIndex, endIndex);

    const handlePrev = $(() => {
        if (state.currentPage > 1) {
            state.currentPage--;
        }
    });

    const handleNext = $(() => {
        if (state.currentPage < totalPages) {
            state.currentPage++;
        }
    });

    return (
        <section id="action" class="container">
            <div class="content">
                <div class="illu">
                    <h5>NOS SITES D'ACTION</h5>
                    <div class="mada">
                        <Img002 alt="map of madagascar" />
                    </div>
                </div>
                <div class="actions">
                    <h5>NOS ACTIONS PHARES</h5>
                    <div class="list">
                        {currentItems.map((item, index) => (
                            <p key={index}>
                                <span>{currentArticles[index]} </span>
                                {item}
                            </p>
                        ))}
                        <div class="navigation">
                            <button onClick$={handlePrev} disabled={state.currentPage === 1}>Précedent</button>
                            <span class="sepa"></span>
                            <span class="pagination"><h5>{state.currentPage.toString().padStart(2, '0')}/{totalPages.toString().padStart(2, '0')}</h5></span>
                            <span class="sepa"></span>
                            <button onClick$={handleNext} disabled={state.currentPage === totalPages}>Suivant</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
});