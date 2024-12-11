import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  // Total number of images in the gallery
  const imageNumber = 55; // You can adjust this value dynamically
  
  // Current lightbox state
  const currentImageIndex = useSignal<number | null>(null);

  // Dynamic image import function
  const importImage = (number: number) => {
    return `/public/media/gall/School/${number.toString().padStart(3, '0')}.webp?jsx`;
  };

  // Image navigation handlers
  const nextImage = $(() => {
    if (currentImageIndex.value !== null) {
      currentImageIndex.value = 
        currentImageIndex.value === imageNumber - 1 ? 0 : currentImageIndex.value + 1;
    }
  });

  const prevImage = $(() => {
    if (currentImageIndex.value !== null) {
      currentImageIndex.value = 
        currentImageIndex.value === 0 ? imageNumber - 1 : currentImageIndex.value - 1;
    }
  });

  return (
    <>
      <section class="imgallery container">
        {Array.from({ length: imageNumber }, (_, index) => {
          const imageNum = index + 1;
          const ImageComponent = importImage(imageNum);
          
          return (
            <div
              key={imageNum}
              class="card"
              onClick$={() => currentImageIndex.value = index}
            >
              <img
                src={ImageComponent}
                alt={`Agriculture Image ${imageNum}`}
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
          );
        })}
      </section>

      {currentImageIndex.value !== null && (
        <div 
          class="lightbox-overlay"
          onClick$={(event) => {
            if (event.target === event.currentTarget) {
              currentImageIndex.value = null;
            }
          }}
        >
          <div class="lightbox-content">
            <button 
              class="lightbox-close" 
              onClick$={() => currentImageIndex.value = null}
            >
              ×
            </button>
            
            <button 
              class="lightbox-prev" 
              onClick$={prevImage}
            >
              ‹
            </button>
            
            <img
              src={importImage(currentImageIndex.value + 1)}
              alt={`Agriculture Image ${currentImageIndex.value + 1}`}
              class="lightbox-image"
            />
            
            <button 
              class="lightbox-next" 
              onClick$={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export const head: DocumentHead = {
  title: "Gallerie School of Real Mission",
  meta: [
    {
      name: "description",
      content: "Responsive Image Gallery of Agricultural Scenes",
    },
  ],
};