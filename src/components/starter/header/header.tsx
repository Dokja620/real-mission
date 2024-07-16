import { component$ } from "@builder.io/qwik";
import Logo from '/public/media/icons/logo-h-f.webp?jsx';

export default component$(() => {
    return (
        <header>
            <nav>
                <a href="/" class="logo"><span><Logo/></span></a>
                <ul class="nav-links">
                    {/* <li><a href="/pages/galerie">Galerie</a></li>
                    <li><a href="/pages/strategie">Nos strategies</a></li> */}
                </ul>
                <div class="menu">
                    <p>FR / EN</p>
                </div>
            </nav>
        </header>
    );
});
