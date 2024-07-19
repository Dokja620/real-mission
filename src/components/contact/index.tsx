import { component$ } from '@builder.io/qwik';

export const Contact = component$(() => {
    return (
        <section id="contact">
            <form action="">
                <label for="">E-mail</label>
                <input type="text" name="mail" placeholder="this.is.a.gmail@gmail.com"/>
                
                <label for="">Objet</label>
                <input type="text" name="reason" placeholder="…"/>
                
                <textarea name="message" id="" rows={10} placeholder="Votre message"></textarea>

                <button class="send">Envoyer</button>

                <button class="close">
                    <div><span></span><span></span></div>
                </button>
            </form>
        </section>
    )
});