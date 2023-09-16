const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers 
  function printDeveloper() {
    for(let i=0;i<data.length;i++){
      console.log(data[i].name);
    }
  }
  
  // 2. Add Data here
  function addData() {
    let newData = {};
    let n = prompt("please enter name:");
    if (n != null){
      newData.name = n;
    }
    let a = prompt("please enetr age:");
    if(a != null){
      newData.age = a;
    }
    let p = prompt("please enter profession:");
    if(p != null){
      newData.profession = p;
    }
    data.push(newData);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i=0;i<data.length;i++){
      if(data[i].profession==="admin"){
        data.splice(i,1);
      }
    }
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const data1 = [
      { name: "joe", age: 20, profession: "developer" },
      { name: "janu", age: 27, profession: "developer" },
    ];
    const arr = data.concat(data1);
    for(let i=0;i<arr.length;i++){
      console.log(arr[i]);
    }
  }
  
  // 5. Average Age
  function averageAge() {
    let sum = 0;
    let n = data.length;
    for(let i=0;i<data.length;i++){
      sum += data[i].age;
    }
    let avgAge = sum/n;
    console.log(avgAge);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for(let i=0;i<data.length;i++){
      if(data[i].age >= 25){
        console.log(true);
        return;
      }
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let map = {};
    for(let i=0;i<data.length;i++){
      if(map[data[i]["profession"]] === undefined){
        map[data[i]["profession"]] = 1;
      }
    }
    for (const key in map) {
        console.log(key);
    }
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => {
        return (a.age<b.age) ? -1 : (a.age>b.age) ? 1 : 0;
    })
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for(let i=0;i<data.length;i++){
      if(data.name === "john"){
        data[i].profession="manager";
      }
    }
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let dev=0, admin=0;
    for(let i=0;i<data.length;i++){
      if(data[i].profession==="developer"){
        dev++;
      }
      else if(data[i].profession==="admin"){
        admin++;
      }
    }
    console.log("total number of developers are: "+ dev+" and total number of admins are "+admin);
  }