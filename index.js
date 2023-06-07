// 24


let users = [
  {
  "index": 0,
  "isActive": true,
  "balance": "$2,226",
  "name": "Eugenia",
  "gender": "female",
  "phone": "+1 666 232 4242",
  "address": "949 John Street, Rose, Puerto Rico, 1857"
  },
  {
  "index": 1,
  "isActive": true,
  "balance": "$2,613",
  "name": "Pauline",
  "gender": "female",
  "phone": "+1 434 965 4342",
  "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
  },
  {
  "index": 2,
  "isActive": false,
  "balance": "$3,976",
  "name": "Dmitryi",
  "gender": "male",
  "phone": "+1 432 434 852",
  "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
  },
  {
  "index": 3,
  "isActive": true,
  "balance": "$1,934",
  "name": "Andrew",
  "gender": "male",
  "phone": "+1 322 422 4242",
  "address": "730 Seba Avenue, Osage, Alabama, 6290"
  },
  {
  "index": 4,
  "isActive": true,
  "balance": "$3,261",
  "name": "Victor",
  "gender": "male",
  "phone": "+1 437 959 1111",
  "address": "120 Scholes Street, Kirk, Michigan, 1018"
  },
  {
  "index": 5,
  "isActive": false,
  "balance": "$1,790",
  "name": "Polina",
  "gender": "female",
  "phone": "+1 777 666 4343",
  "address": "314 Dunne Place, Bawcomville, Guam, 9053"
  }
  ];
  
  let activeUsers = users.filter(user => user.isActive);
  
  let userNames = users.map(user => user.name);

  let totalBalance = users.reduce((total, user) => {
  let balance = parseFloat(user.balance.replace('$', '').replace(',', ''));
  return total + balance;
  }, 0);
  
  console.log(activeUsers);
  console.log(userNames);
  console.log(totalBalance);

// 25


function convert(obj) {
  const newObj = {};
  
  function flatten(obj, prefix = '') {
  for (const key in obj) {
  if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
  flatten(obj[key], prefix + key + '.');
  } else {
  newObj[prefix + key] = obj[key];
  }
  }
  }
  
  flatten(obj);
  return newObj;
  }
  
  const obj = {
  x: 10,
  y: 20,
  inner: { x: 20, z: 30 },
  foo2: { k: 23, p: 13 }
  };
  
  const newObj = convert(obj);
  console.log(newObj);