'use strict';
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let firstBranch = document.getElementById('Seattle');
let para = document.createElement('P');
firstBranch.appendChild(para);
para.innerHTML = 'Seattle';
let div1 = document.getElementById('SeattleList');

let unorderlist = document.createElement('ul');
div1.appendChild(unorderlist);



let Seattle = {
  maxHoursCustomers: 65,
  minHoursCustomer: 23,
  avgCookiesByCustomer: 6.3,
  sum: 0,
  data: [],

  random: function () {
    for (let i = 0; i < hours.length; i++) {
      let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByCustomer);
      this.data.push(arrData);
      this.sum = this.sum + arrData;
    }

  },
  cookieRender: function () {



    for (let i = 0; i < hours.length; i++) {
      let list = document.createElement('li');
      unorderlist.appendChild(list);
      list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
    }
    let list = document.createElement('li');
    unorderlist.appendChild(list);
    list.innerHTML = 'Total: ' + this.sum + ' cookies';

  }
};
Seattle.random();
Seattle.cookieRender();

//Here is is the 2nd branch

let secondtBranch = document.getElementById('Tokyo');
let para2 = document.createElement('P');
secondtBranch.appendChild(para2);
para2.innerHTML = 'Tokyo';
let divTokyo = document.getElementById('TokyoList');

let unorderlist2 = document.createElement('ul');
divTokyo.appendChild(unorderlist2);


let Tokyo = {
  maxHoursCustomers: 24,
  minHoursCustomer: 3,
  avgCookiesByHour: 1.2,
  data: [],
  sum: 0,

  random: function () {
    for (let i = 0; i < hours.length; i++) {
      let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
      this.data.push(arrData);
      this.sum = this.sum + arrData;
    }

  },
  cookieRender: function () {



    for (let i = 0; i < hours.length; i++) {
      let list = document.createElement('li');
      unorderlist2.appendChild(list);
      list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
    }
    let list = document.createElement('li');
    unorderlist2.appendChild(list);
    list.innerHTML = 'Total: ' + this.sum + ' cookies';

  }
};
Tokyo.random();
Tokyo.cookieRender();




//here the third branch
let thirdtBranch = document.getElementById('Dubai');
let para3 = document.createElement('P');
thirdtBranch.appendChild(para3);
para3.innerHTML = 'Dubai';
let div2 = document.getElementById('DubaiList');

let unorderlist3 = document.createElement('ul');
div2.appendChild(unorderlist3);

let Dubai = {
  maxHoursCustomers: 38,
  minHoursCustomer: 11,
  avgCookiesByHour: 3.7,
  data:[],
  sum:0 ,

  random: function () {
    for (let i = 0; i < hours.length; i++) {
      let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
      this.data.push(arrData);
      this.sum = this.sum + arrData;
    }

  },
  cookieRender: function () {



    for (let i = 0; i < hours.length; i++) {
      let list = document.createElement('li');
      unorderlist3.appendChild(list);
      list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
    }
    let list = document.createElement('li');
    unorderlist3.appendChild(list);
    list.innerHTML = 'Total: ' + this.sum + ' cookies';

  }
};


Dubai.random();
Dubai.cookieRender();

//here the fourth branch

let fourthBranch = document.getElementById('Paris');
let para4 = document.createElement('P');
fourthBranch.appendChild(para4);
para4.innerHTML = 'Paris';
let divParis = document.getElementById('ParisList');

let unorderlist4 = document.createElement('ul');
divParis .appendChild(unorderlist4);


let Paris = {
  maxHoursCustomers: 38,
  minHoursCustomer: 20,
  avgCookiesByHour: 2.3,
  data:[],
  sum:0,

  random : function () {
    for (let i = 0; i < hours.length; i++) {
      let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
      this.data.push(arrData);
      this.sum = this.sum + arrData;
    }

  },
  cookieRender: function () {

    for (let i = 0; i < hours.length; i++) {
      let list = document.createElement('li');
      unorderlist4.appendChild(list);
      list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
    }
    let list = document.createElement('li');
    unorderlist4.appendChild(list);
    list.innerHTML = 'Total: ' + this.sum + ' cookies';

  }
};

Paris.random();
Paris.cookieRender();

//here the 5th branch

let fivthBranch = document.getElementById('Lima');
let para5 = document.createElement('P');
fivthBranch.appendChild(para5);
para5.innerHTML = 'Lima';
let divLima = document.getElementById('LimaList');

let unorderlist5 = document.createElement('ul');
divLima .appendChild(unorderlist5);

let Lima = {
  maxHoursCustomers: 16,
  minHoursCustomer: 2,
  avgCookiesByHour: 4.6,
  data:[],
  sum:0,

  random : function () {
    for (let i = 0; i < hours.length; i++) {
      let arrData = Math.ceil((getRandomInt(this.minHoursCustomer, this.maxHoursCustomers)) * this.avgCookiesByHour);
      this.data.push(arrData);
      this.sum = this.sum + arrData;
    }

  },
  cookieRender: function () {

    for (let i = 0; i < hours.length; i++) {
      let list = document.createElement('li');
      unorderlist5.appendChild(list);
      list.innerHTML = hours[i] + ' : ' + this.data[i] + ' cookies';
    }
    let list = document.createElement('li');
    unorderlist5.appendChild(list);
    list.innerHTML = 'Total: ' + this.sum + ' cookies';


  }



};
Lima.random();
Lima.cookieRender();







function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
