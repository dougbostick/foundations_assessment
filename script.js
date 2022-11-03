const higherOrLower = (num1, num2) => {
    if(num1 > num2) return 'higher';
    if(num1 < num2) return 'lower';
    if(num1 === num2) return 'equal';
    return 'error'
    // if(typeof num1 !== 'number' || typeof num2 !== 'number') return 'error'
  }
  
  const dvdCollection = (arr1, arr2, arr3) => {
    const result = [];
    arr1.forEach((dvd) => result.push(dvd));
    arr2.forEach((dvd) => result.push(dvd));
    arr3.forEach((dvd) => result.push(dvd));
    return result.sort();
  }
  
  
  // const studentBody = (arr) => {
  //   const result = arr.reduce((acc, student) => {
  //     acc.total += 1;
  //     acc.age += student.age;
  //     acc.grade += student.grade;
  //     return acc;
  //   }, {total: 0, age: 0, grade: 0})
  //  result.age = result.age / arr.length;
  //  result.grade = result.grade / arr.length;
  //   return result;
  // }
  function studentBody(students){
    let total = students.reduce((acc,student) => acc + 1,0)
    let age = students.reduce((acc,student)=> acc +student.age/total,0)
    let grade = students.reduce((acc,student)=> acc + student.grade/total,0)
    return {total ,  age , grade  }
     }
  
  class Fruit {
    constructor(name){
      this.name = name;
      this.weight = Math.floor(Math.random() * 10 + 1);
    }
    eat(){
      return `You ate a ${this.name}!`
    }
    throwAway(){
      return `You threw away a ${this.name}!`
    }
  }
  
  const fruitBasket = (arr) => {
    return arr.map((fruitElm) => new Fruit(fruitElm))
  }
  
  
  // const getBooksByLanguage = (arr) => {
  //   return arr.reduce((acc, book) => {
  //     if(acc.hasOwnProperty(book.language)){
  //       acc[book.language].push(book.title)
  //     } else {
  //       acc[book.language] = [book.title]
  //     }
  //     return acc
  //   }, {})
  // }
  const getBooksByLanguage = (arr) => {
    return arr.reduce((a, c) => {
      a.hasOwnProperty(c.language) ? a[c.language].push(c.title) : a[c.language] = [c.title];
      return a;
    } , {})
  }

  const coinMachine = (num) => {
    const result = {
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0
    };
    
      while(num > 25){
        num -= 25;
        result.quarters+=1;
      } 
      while(num > 10){
        num -= 10;
        result.dimes+=1;
      }
      while(num > 5){
        num -= 5;
        result.nickels+=1;
      }
      while(num > 0){
        num-= 1;
        result.pennies+=1;
      }
    
    return result;
  }