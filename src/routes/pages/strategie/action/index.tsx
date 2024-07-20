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
    "Créer des centres de formation des missionnaires et des vulgarisateurs dans les 6 provinces de madagascar",
    "Former des missionnaires et vulgarisateurs en developpement holistique et pratiques innovantes",
    "Créer une station radio real mission radio",
    "Renforcer la visibiliter de rmm au niveau national et international",
    "Créer des projets innovants avec les acteurs locaux",
    "Organiser des formations de mobilisation des ressources et des plaidoyer pour les leaders nationaux et regionaux de rmm",
    "Produire et diffuser 02 bulletins semestriels par an real mission news",
    "Mettre a jour les outils de fonctionnement de rmm",
    "Se doter des moyens de travail adaptes",
    "Se doter des moyens de travail adaptesact 1.2.4 effectuer une evaluation des effets et impacts rmm programme",
    "Mener des formations en mission appliquee short et deep",
    "Mener des formations en mission appliquee approfondie",
    "Mener des formations en developpement holistique specifique",
    "Créer une ecole et appuyer la scolarisation des enfants et jeunes",
    "Mener des formations en alphabetisation fonctionnelle des adultes",
    "Former les locaux sur des pratiques de productions agricoles innovantes",
    "Former les locaux sur des pratiques de transformation et de conservation des produits agricoles",
    "Former les locaux sur des pratiques de commercialisation selon le concept agrobusiness",
    "Créer un complexe sportif pour les jeunes et enfants",
    "Créer des sites de demonstration en pratique agricole innovante",
    "Créer des infrastructure de sante et des structures pour des operations chirurgicales mobiles",
    "Distribuer des medicaments, vetements, ustenciles de cuisines",
    "Soutenir la diversification culturale et l'integration agriculture elev",
    "Mettre en œuvre l'approche cash + pour les menages les plus vulnerables",
    "Appuyer les petits metiers et surtout ceux qui sont lies a l'agriculture, elevage, forêt et pêche",
    "Developper la mise en place d'un système d'epargne mutuelle",
    "Proteger et ameliorer la gestion des ressources en eau existantes",
    "Developper des solutions naturelles et biologiques pour la protection des cultures et la fertilisation du sol",
    "Mener une vaccination et deparasitage de masse des animaux d'elevage",
    "Créer des dispositifs de securisation des semences grainotheque",
    "Conduire la communaute locale vers l'adoption et effectivite d'une eco-village",
    "Mettre en relation les acteurs a travers une plate forme d'echange"
];

export const Action = component$(() => {
    const state = useStore({ currentPage: 1 });
    const itemsPerPage = 9; // Display 9 items per page
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