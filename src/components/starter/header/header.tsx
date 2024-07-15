import { component$ } from "@builder.io/qwik";
import logo from '/media/logo.jpg';

export default component$(() => {
    return (
        <header>
            <nav>
                <a href="/" class="logo"><span><img src={logo} alt="Real Mission Mouvement Logo" width={79} height={63} /></span></a>
                <div class="menu">
                    <p>FR / ENG</p>
                </div>
            </nav>
        </header>
    );
});
