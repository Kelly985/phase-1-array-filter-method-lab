// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers, name) {
     return drivers.filter(driver => driver.toLocaleLowerCase() === name.toLocaleLowerCase());
  }
  const filteredDrivers = findMatching(drivers, 'bobby');
  console.log(filteredDrivers);
  
 

  function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
  }
  const startingLetter = fuzzyMatch(drivers, 's');
  console.log(startingLetter);
  

  const drivers2 = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
  function matchName(drivers2, name) {
    return drivers2.filter(driver => driver.name === name);
  }
  const matchingDrivers = matchName(drivers2, 'Bobby');
  console.log(matchingDrivers);
  
  