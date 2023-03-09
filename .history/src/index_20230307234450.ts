interface User {
  birthYear?: number
}

function calculateAgeOfUser(usuario) {
  return new Date().getFullYear() - user.birthYear
}

calculateAgeOfUser('Diego')
calculateAgeOfUser({})