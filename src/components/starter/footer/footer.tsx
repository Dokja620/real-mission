
import { component$ } from "@builder.io/qwik";
import logo from '/public/media/logo.jpg';

import facebook from '/public/media/icons/facebook.svg';
import whatsapp from '/public/media/icons/whatsapp.svg';
import gmail from '/public/media/icons/gmail.svg';

export default component$(() => {

    return (
        <footer>
            <div class="minimalist">
                <div class="get-in-touch">
                    <a href="mailto:">
                        <span>
                            <img src={gmail} alt="icon mail" width={32} height={32}/>
                        </span>
                    </a>
                    <a href="wa.link.com" target="_blank">
                        <span>
                            <img src={whatsapp} alt="icon whatsapp" width={32} height={32}/>
                        </span>
                    </a>
                    <a href="" target="_blank">
                        <span>
                            <img src={facebook} alt="icon facebook" width={32} height={32}/>
                        </span>
                    </a>
                </div>
            </div>
            <div class="principal">
                <div class="logo">
                    <img src={logo} alt="logo RMM" width={79} height={63}/>
                </div>
                <div class="get-in-touch">
                    {/* <h5>Nous contacter</h5> */}
                    <a href="mailto:">
                        <span>
                            <img src={gmail} alt="icon mail" width={24} height={24}/>
                        </span>
                        <span>
                            this.is.a.gmail@gmail.com
                        </span>
                    </a>
                    <a href="wa.link.com" target="_blank">
                        <span>
                            <img src={whatsapp} alt="icon whatsapp" width={24} height={24}/>
                        </span>
                        <span>
                            +261 33 00 000 00
                        </span>
                    </a>
                    <a href="" target="_blank">
                        <span>
                            <img src={facebook} alt="icon facebook" width={24} height={24}/>
                        </span>
                        <span>
                            Real Mission Movement
                        </span>
                    </a>
                </div>
                {/* <div class="get-in-touch">
                    <h5>Nous contacter</h5>
                    <a href="mailto:">
                        <span>
                            thisisagmail@gmail.com
                        </span>
                    </a>
                    <a href="wa.link.com" target="_blank">
                        <span>
                            +261 33 02 523 22
                        </span>
                    </a>
                    <a href="" target="_blank">
                        <span>
                            Real Mission Movement
                        </span>
                    </a>
                </div> */}
            </div>
            <div class="copyright">
                <p>© 2024 |</p>
                <a href="https://ohayo-dev-design.com/" target="_blank">Ohayo Dev & Design</a>
            </div>
        </footer>
    );
});
