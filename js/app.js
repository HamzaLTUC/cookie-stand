'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let branches =[];
// Let Total = [];

let table= document.getElementById('SalmonTable');

// header Function
function header (){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableData1=document.createElement('td');
  tableRow.appendChild(tableData1);
  tableData1.textContent= ' ';
  for (let index = 0; index < hours.length; index++) {
    let tableData=document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent=hours[index];

  }
  let tableData2=document.createElement('td');
  tableRow.appendChild(tableData2);
  tableData2.textContent= 'Daily Location Total';
}
header();
// content function
Stores.prototype.content=function(){
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  let tableData1=document.createElement('td');
  tableRow.appendChild(tableData1);
  tableData1.innerHTML = this.storeName;
  for (let index = 0; index < this.data.length; index++) {
    let tableData=document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent= this.data[index];
  }
  let tableData=document.createElement('td');
  tableRow.appendChild(tableData);
  tableData.textContent= this.sum;

};

// Random function
function Stores (storeName,maxHoursCustomers,minHoursCustomer,avgCookiesByCustomer) {
  this.storeName = storeName;
  this.maxHoursCustomers=maxHoursCustomers;
  this.minHoursCustomer=minHoursCustomer;
  this.avgCookiesByCustomer=avgCookiesByCustomer;
  this.sum= 0;
  this.data= [];
  this.random();
  branches.push(this);
}

Stores.prototype.random= function () {
  for (let i = 0; i < hours.length; i++) {
    let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByCustomer);
    this.data.push(arrData);
    this.sum = this.sum + arrData;
  }
};



new Stores('Seattle', '65','23','6.3');
new Stores('Tokyo', '24','3','1.2');
new Stores('Dubai', '38','11','3.7');
new Stores('Paris', '38','20','2.3');
new Stores('Lima', '16','2','4.6');




for(let i=0; i< branches.length;i++){
  branches[i].content();
}



//Here is is the 2nd branch

// let secondtBranch = document.getElementById('Tokyo');
// let para2 = document.createElement('P');
// secondtBranch.appendChild(para2);
// para2.innerHTML = 'Tokyo';
// let divTokyo = document.getElementById('TokyoList');

// let unorderlist2 = document.createElement('ul');
// divTokyo.appendChild(unorderlist2);


// let Tokyo = {
//   maxHoursCustomers: 24,
//   minHoursCustomer: 3,
//   avgCookiesByHour: 1.2,
//   data: [],
//   sum: 0,

//   random: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
//       this.data.push(arrData);
//       this.sum = this.sum + arrData;
//     }

//   },
//   cookieRender: function () {



//     for (let i = 0; i < hours.length; i++) {
//       let list = document.createElement('li');
//       unorderlist2.appendChild(list);
//       list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
//     }
//     let list = document.createElement('li');
//     unorderlist2.appendChild(list);
//     list.innerHTML = 'Total: ' + this.sum + ' cookies';

//   }
// };
// Tokyo.random();
// Tokyo.cookieRender();




// //here the third branch
// let thirdtBranch = document.getElementById('Dubai');
// let para3 = document.createElement('P');
// thirdtBranch.appendChild(para3);
// para3.innerHTML = 'Dubai';
// let div2 = document.getElementById('DubaiList');

// let unorderlist3 = document.createElement('ul');
// div2.appendChild(unorderlist3);

// let Dubai = {
//   maxHoursCustomers: 38,
//   minHoursCustomer: 11,
//   avgCookiesByHour: 3.7,
//   data:[],
//   sum:0 ,

//   random: function () {
//     for (let i = 0; i < hours.length; i++) {
//       let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
//       this.data.push(arrData);
//       this.sum = this.sum + arrData;
//     }

//   },
//   cookieRender: function () {



//     for (let i = 0; i < hours.length; i++) {
//       let list = document.createElement('li');
//       unorderlist3.appendChild(list);
//       list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
//     }
//     let list = document.createElement('li');
//     unorderlist3.appendChild(list);
//     list.innerHTML = 'Total: ' + this.sum + ' cookies';

//   }
// };


// Dubai.random();
// Dubai.cookieRender();

// //here the fourth branch

// let fourthBranch = document.getElementById('Paris');
// let para4 = document.createElement('P');
// fourthBranch.appendChild(para4);
// para4.innerHTML = 'Paris';
// let divParis = document.getElementById('ParisList');

// let unorderlist4 = document.createElement('ul');
// divParis .appendChild(unorderlist4);


// let Paris = {
//   maxHoursCustomers: 38,
//   minHoursCustomer: 20,
//   avgCookiesByHour: 2.3,
//   data:[],
//   sum:0,

//   random : function () {
//     for (let i = 0; i < hours.length; i++) {
//       let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
//       this.data.push(arrData);
//       this.sum = this.sum + arrData;
//     }

//   },
//   cookieRender: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let list = document.createElement('li');
//       unorderlist4.appendChild(list);
//       list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
//     }
//     let list = document.createElement('li');
//     unorderlist4.appendChild(list);
//     list.innerHTML = 'Total: ' + this.sum + ' cookies';

//   }
// };

// Paris.random();
// Paris.cookieRender();

// //here the 5th branch

// let fivthBranch = document.getElementById('Lima');
// let para5 = document.createElement('P');
// fivthBranch.appendChild(para5);
// para5.innerHTML = 'Lima';
// let divLima = document.getElementById('LimaList');

// let unorderlist5 = document.createElement('ul');
// divLima .appendChild(unorderlist5);

// let Lima = {
//   maxHoursCustomers: 16,
//   minHoursCustomer: 2,
//   avgCookiesByHour: 4.6,
//   data:[],
//   sum:0,

//   random : function () {
//     for (let i = 0; i < hours.length; i++) {
//       let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
//       this.data.push(arrData);
//       this.sum = this.sum + arrData;
//     }

//   },
//   cookieRender: function () {

//     for (let i = 0; i < hours.length; i++) {
//       let list = document.createElement('li');
//       unorderlist5.appendChild(list);
//       list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
//     }
//     let list = document.createElement('li');
//     unorderlist5.appendChild(list);
//     list.innerHTML = 'Total: ' + this.sum + ' cookies';


//   }



// };
// Lima.random();
// Lima.cookieRender();







function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
