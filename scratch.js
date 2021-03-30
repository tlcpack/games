function weave(a,b) {
	let final = '';
  const stringA = a.toString();
  const stringB = b.toString();
  
  for (let i = 0; i < stringA.length || i < stringB.length; i++) {
  	if (stringA[i]) {
  		final += stringA[i];
    }
    if (stringB[i]) {
      final += stringB[i]; 
    }
  }
  return final;
}

// console.log(weave("abcghgfhdlds", "123"));


let users = {
  1: {
    id: '1',
    firstName: 'Robin',
    lastName: 'Wieruch',
    isDeveloper: true,
  },
  2: {
    id: '2',
    firstName: 'Dave',
    lastName: 'Davddis',
    isDeveloper: false,
  },
};

const getUsers = () => Object.values(users);
const result = getUsers();
console.log(result);