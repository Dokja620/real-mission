import { component$, useVisibleTask$, useStore, $ } from '@builder.io/qwik';

export const GetTop = component$(() => {
  const state = useStore({ showButton: false });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const checkScrollPosition = () => {
      const scrollPosition = window.scrollY;
      state.showButton = scrollPosition >= window.innerHeight;
    };

    checkScrollPosition();
    window.addEventListener('scroll', checkScrollPosition);
    return () => window.removeEventListener('scroll', checkScrollPosition);
  });

  const scrollToNavbar = $(() => {
    document.querySelector('#navbar')?.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <section id="get-to-top">
      {state.showButton && <button onClick$={scrollToNavbar}></button>}
    </section>
  );
});
