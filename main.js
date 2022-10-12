// Your code here.

function getFirstName(person){
  return person.firstName
}

function getLastName(person){
  return person.lastName
}

function getFullName(person){
  return person.firstName + ' ' + person.lastName
}

function setFirstName(person, new_f_name){
  person.firstName = new_f_name
  return person
}

function setAge(person, new_age){
  person.age = new_age
  return person
}

function giveBirthday(person){
  if(person.age){
    person.age += 1
  } else {
    person.age = 1
  }
  return person
}

function marry(person1, person2){
  person1.married = true
  person2.married = true
  person1.spouseName = getFullName(person2)
  person2.spouseName = getFullName(person1)
  return person1, person2
}

function divorce(person1, person2){
  person1.married = false
  person2.married = false
  delete person1.spouseName
  delete person2.spouseName
  return person1, person2
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
