export const miniatureArtData = Array.from({ length: 76 }, (_, i) => {
  const titles: Record<number, string> = {
    1: 'Navratri',
    2: 'Navratri',
    3: 'Navratri',
    4: 'Christmas',
    5: 'Uttarayan',
    6: 'Natraj',
    7: 'Navratri',
    8: 'YogaDay',
    9: 'Navratri',
    10: 'RathYatra',
    11: 'Navratri',
    12: 'RakshaBandhan',
    13: 'Janmashtami',
    14: 'Narendra Modi',
    15: 'Ramapir',
    16: 'Krishna',
    17: 'Ganesh Chaturthi',
    18: 'Durga Puja',
    19: 'Dashara',


    
    
    // You can keep adding more titles here later
  };

  // const prices: Record<number, string> = {
  //   1: '₹4,610.00',
  //   2: '₹4,250.00',
  //   3: '₹4,610.00',
  // };

  // const artists: Record<number, string> = {
  //   1: 'Mahaveer Swami',
  //   2: 'Mahaveer Swami',
  //   3: 'Mahaveer Swami',
  // };

  return {
    id: i,
    title: titles[i] ?? '',
    image: `/images/Miniature/${i}.jpg`,
  //  artist: artists[i] ?? '',
  //  price: prices[i] ?? '',
    description: '',
  };
});
