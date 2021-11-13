const addUser = document.getElementById('add-user');
const doubleWealth = document.getElementById('double-wealth');
const millionaire = document.getElementById('miilionaire');
const sortByW = document.getElementById('sort');
const total = document.getElementById('total');
const main = document.getElementById('main');


//create an array
const listOfNm = [];

//fetch api data
async function getUser(){
    let url = "https://randomuser.me/api/";
    try {
        let response = await fetch(url);
        let data = await response.json();
        let name = data.results[0].name;
        let firstName = name.first;
        let lastName = name.last;
        let title = name.title;
        let fullName = `${title} ${firstName} ${lastName}`;
        let wealth = Math.floor(Math.random() * 1000000);
          const userData = {
            name: `${fullName}`,
            wealth: wealth
        }
        printUser(userData);
    } catch (error) {
        console.log(error);
    }
}
//formatting the wealth in money format
const moneyFormat = (wealth) => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });
    return formatter.format(wealth);
}
//double the money
const doubleTheMoney = () => {
    //refresh the main container
    main.innerHTML = '<h2><strong>Name of person</strong> Amount of wealth</h2>';
    listOfNm.forEach(element => {
        let h3 = document.createElement('h3');
        element.wealth *= 2;
        h3.innerHTML = `${element.name} <strong id="wealth">${moneyFormat(element.wealth)}</strong>`;
        main.appendChild(h3);
    })
}
const printUser = (obj) =>{
        listOfNm.push(obj);
        //refresh the main container
        main.innerHTML = '<h2><strong>Name of person</strong> Amount of wealth</h2>';
        listOfNm.forEach((element,index)=>{
            let h3 = document.createElement('h3');
            h3.innerHTML = `${element.name} <strong id="wealth">${moneyFormat(element.wealth)}</strong>`;
            main.appendChild(h3);
        });
        // console.log(listOfNm);
}
addUser.addEventListener('click',function(){
    getUser();
});
doubleWealth.addEventListener('click',function() {
    doubleTheMoney();
});