import { component$, useVisibleTask$ } from '@builder.io/qwik';

const stats = [
  {
    numbers: '075',
    label: 'Stat 01',
  },
  {
    numbers: '100',
    label: 'Stat 02',
  },
  {
    numbers: '008',
    label: 'Stat 03',
  },
];

export const Stats = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const addIsInViewClass = (entries: { target: any; isIntersecting: any; }[]) => {
      entries.forEach((entry: { target: any; isIntersecting: any; }) => {
        const h1Element = entry.target;
        if (entry.isIntersecting) {
          h1Element.classList.add('is-in-view');
        } else {
          h1Element.classList.remove('is-in-view');
        }
      });
    };

    const observer = new IntersectionObserver(addIsInViewClass);

    const h1Elements = document.querySelectorAll('#stats .stats h1');
    h1Elements.forEach((h1Element) => observer.observe(h1Element));

    return () => observer.disconnect();
  });

  return (
    <section id="stats" class="container">
      {stats.map((data, dataIndex) => (
        <div class="stats" key={dataIndex}>
          <h1>
            {data.numbers.split('').map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </h1>
          <h5>{data.label}</h5>
        </div>
      ))}
    </section>
  );
});
