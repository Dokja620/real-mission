import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <header>
            <nav>
                <a href="/" class="logo"></a>
                <ul class="nav-links">
                    <li><a href="/pages/galerie">Galerie</a></li>
                    <li><a href="/pages/strategie">Nos strategies</a></li>
                </ul>
                <div class="menu">
                    <p>FR / EN</p>
                </div>
            </nav>
        </header>
    );
});
