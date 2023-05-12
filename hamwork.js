// const guests = [
//     {
//       firstName: 'Adaliah',
//       lastName: 'Lin',
//       species: 'Human'
//     },
//     {
//       firstName: 'Cole',
//       lastName: 'Macgrath',
//       species: 'Conduit'
//     },
//     {
//       firstName: 'Luigi',
//       lastName: 'Mario',
//       species: 'Italian PLumber'
//     },
//     {
//       firstName: 'Gehrmen',
//       lastName: 'The First Hunter',
//       species: 'Human'
//     },
//     {
//       firstName: 'Shroedinger',
//       lastName: 'Cat',
//       species: 'psychic Human'
//     },
//     {
//       firstName: 'Black',
//       lastName: 'March',
//       species: 'Ignition weapon'
//     },
//     {
//       firstName: 'King',
//       lastName: 'Mickey',
//       species: 'Magic Mouse'
//     },
//     {
//       firstName: 'Son',
//       lastName: 'Goku',
//       species: 'Saiyan'
//     },
//     {
//       firstName: 'Saitama',
//       lastName: 'Caped Baldy',
//       species: 'N/A'
//     },
//     {
//       firstName: 'King',
//       lastName: 'The Strongest man on earth',
//       species: 'Human'
//     }
//   ];
  
//   const smallDessertOptions = ['Chocolate Pudding', 'Vanilla Ice Cream', 'Strawberry Short Cake', 'Lemon Cake', 'Red Velvet Cake', 'Peach Cobbler', 'Macadamia Nut Cookie', 'Blueberry Muffin', 'Tubby Custard'];
//   const teaPartyTable = {};
  
//   for (let i = 0; i < guests.length; i++) {
//     const guest = guests[i];
//     const smallDessert = smallDessertOptions[Math.floor(Math.random() * smallDessertOptions.length)];
    
//     teaPartyTable[guest.firstName] = {
//       firstName: guest.firstName,
//       lastName: guest.lastName,
//       species: guest.species,
//       teaCup: true,
//       teaPlate: true,
//       smallDessert
//     };
//   }
  
//   for (let guest in teaPartyTable) {
//     console.log(`First Name: ${teaPartyTable[guest].firstName}`);
//     console.log(`Last Name: ${teaPartyTable[guest].lastName}`);
//     console.log(`Species: ${teaPartyTable[guest].species}`);
//     console.log(`Tea Cup: ${teaPartyTable[guest].teaCup}`);
//     console.log(`Tea Plate: ${teaPartyTable[guest].teaPlate}`);
//     console.log(`Small Dessert: ${teaPartyTable[guest].smallDessert}`);
//     console.log();
//   }
  
const guests = [
    { firstName: 'Adaliah', lastName: 'Lin', species: 'Human' },
    { firstName: 'Cole', lastName: 'Macgrath', species: 'Conduit' },
    { firstName: 'Luigi', lastName: 'Mario', species: 'Italian Plumber' },
    { firstName: 'Gehrmen', lastName: 'The First Hunter', species: 'Human' },
    { firstName: 'Shroedinger', lastName: 'Cat', species: 'Psychic Human' },
    { firstName: 'Black', lastName: 'March', species: 'Ignition Weapon' },
    { firstName: 'King', lastName: 'Mickey', species: 'Magic Mouse' },
    { firstName: 'Son', lastName: 'Goku', species: 'Saiyan' },
    { firstName: 'Saitama', lastName: 'Caped Baldy', species: 'N/A' },
    { firstName: 'King', lastName: 'The Strongest Man on Earth', species: 'Human' }
  ];
  
  const smallDessertOptions = ['Senzu Bean', 'SuperMan Ice Cream', 'Purin', 'Lemon Cake', 'Red Velvet Cake', 'Mut Fruit', 'Macadamia Nut Cookie', 'Blueberry Muffin', 'Tubby Custard'];
  
  const teaPartyTable = {};
  
  for (const guest of guests) {
    const { firstName, lastName, species } = guest;
    const smallDessert = smallDessertOptions[Math.floor(Math.random() * smallDessertOptions.length)];
    
    teaPartyTable[firstName] = { firstName, lastName, species, teaCup: true, teaPlate: true, smallDessert };
  }
  
  for (const guest of Object.values(teaPartyTable)) {
    console.log(`First Name: ${guest.firstName}`);
    console.log(`Last Name: ${guest.lastName}`);
    console.log(`Species: ${guest.species}`);
    console.log(`Tea Cup: ${guest.teaCup}`);
    console.log(`Tea Plate: ${guest.teaPlate}`);
    console.log(`Small Dessert: ${guest.smallDessert}`);
    console.log();
  }
  