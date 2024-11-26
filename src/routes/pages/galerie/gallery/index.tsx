import { component$ } from '@builder.io/qwik';
import BackgroundAgri from '/public/media/gall/Agriculture/001.webp?jsx';
import BackgroundEdu from '/public/media/gall/Education/001.webp?jsx';
import BackgroundSchool from '/public/media/gall/School/001.webp?jsx';

export const Gallery = component$(() => {
    return (
        <section id="gallery" class="container">
            <a href="/pages/galerie/agriculture" id="card" class="card">
                <div class="bg">
                    <BackgroundAgri/>
                </div>
                <div class="title">
                    <h4>Agriculture</h4>
                </div>
            </a>
            <a href="/pages/galerie/education" id="card" class="card">
                <div class="bg">
                    <BackgroundEdu/>
                </div>
                <div class="title">
                    <h4>Education</h4>
                </div>
            </a>
            <a href="/pages/galerie/school" id="card" class="card">
                <div class="bg">
                    <BackgroundSchool/>
                </div>
                <div class="title">
                    <h4>School of Real Mission</h4>
                </div>
            </a>
        </section>
    );
});

