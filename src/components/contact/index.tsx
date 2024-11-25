import { component$, $, useOnDocument } from '@builder.io/qwik';
import type { PropFunction} from '@builder.io/qwik';

type ContactProps = {
  onClose$: PropFunction<() => void>;
};

export const Contact = component$<ContactProps>(({ onClose$ }) => {
  // Function to handle clicks outside the form
  const handleOutsideClick = $((event: MouseEvent) => {
    const target = event.target as Node;
    const formElement = document.getElementById('contact-form');

    if (formElement && !formElement.contains(target)) {
      onClose$();
    }
  });

  // Attach the outside click listener when the component is mounted
  useOnDocument('click', handleOutsideClick);

  return (
    <section id="contact" style={{ display: 'grid' }}>
      <form id="contact-form" action="">
        <label for="email">E-mail</label>
        <input type="text" name="mail" placeholder="this.is.a.gmail@gmail.com" />

        <label for="reason">Objet</label>
        <input type="text" name="reason" placeholder="…" />

        <textarea name="message" rows={10} placeholder="Votre message"></textarea>

        <button type="submit" class="send">Envoyer</button>

        <button type="button" class="close" onClick$={onClose$}>
          <div><span></span><span></span></div>
        </button>
      </form>
    </section>
  );
});
