export const paperArtData = Array.from({ length: 57 }, (_, i) => {
  const id = i + 1; // Start from 1

  const titles: Record<number, string> = {
    1: 'Layered Paper Lotus',
    2: 'Paper Lantern (Kandil)',
    // Add more titles here as needed
  };

  const descriptions: Record<number, string> = {
    1: 'A delicate lotus flower made entirely with layered paper cuts.',
    2: 'A handmade paper kandil made for Diwali festival.',
    // Add more descriptions here as needed
  };

  return {
    id,
    title: titles[id] ?? '',
    image: `/images/PaperArt/${id}.jpg`,
    description: descriptions[id] ?? '',
  };
});
