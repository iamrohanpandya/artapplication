export const miniatureArtData = Array.from({ length: 76 }, (_, i) => {
  const titles: Record<number, string> = {
    1: 'Balarama',
    2: 'Laxmi and Narasimha',
    3: 'Krishna 2',
    // You can keep adding more titles here later
  };

  const prices: Record<number, string> = {
    1: '₹4,610.00',
    2: '₹4,250.00',
    3: '₹4,610.00',
  };

  const artists: Record<number, string> = {
    1: 'Mahaveer Swami',
    2: 'Mahaveer Swami',
    3: 'Mahaveer Swami',
  };

  return {
    id: i,
    title: titles[i] ?? '',
    image: `/images/Miniature/${i}.jpg`,
    artist: artists[i] ?? '',
    price: prices[i] ?? '',
    description: '',
  };
});
