import { component$ } from '@builder.io/qwik';
import Img002 from '/public/media/map.webp?jsx';

export const Map = component$(() => {
  return (
    <>
        <section id="map" class="container">
            <div class="illu">
                <h5>NOS SITES D'ACTION</h5>
                <div class="mada">
                    <Img002 alt="map of madagascar" />
                </div>
            </div>
            <div class="region">
                <h5>SOFIA</h5>
                <h5>DIANA</h5>
                <h5>BOENY</h5>
                <h5>MELAKY</h5>
                <h5>ANALAMANGA</h5>
                <h5>ANTSINANANA</h5>
                <h5>HAUTE MATSIATRA</h5>
                <h5>ALAOTRA MANGORO</h5>
                <h5>ATSIMO ATSINANANA</h5>
                <h5>VATOVAVY FITOVINANY</h5>
            </div>
        </section>
    </>
  )
});