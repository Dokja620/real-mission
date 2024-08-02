import { component$ } from "@builder.io/qwik";

export default component$(() => {
    return (
        <header id="navbar">
            <nav>
                <a href="/" class="logo"></a>
                <ul class="nav-links">
                    <li><a href="/pages/galerie">Galerie</a></li>
                </ul>
                <div class="lang">
                    <label for="switch"></label>
                    <input type="checkbox" name="lang" id="switch" checked/>
                    <div class="flag">
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </header>
    );
});
