import { component$ } from "@builder.io/qwik";
import logo from '/public/media/logo.jpg';

export default component$(() => {
    return (
        <header>
            <nav>
                <a href="/" class="logo"><span><img src={logo} alt="Real Mission Mouvement Logo" width={79} height={63} /></span></a>
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
