class Cat {
    constructor(catname, catage, species, sex, food) {
        this.catname = catname;
        this.catage = catage;
        this.species = species;
        this.sex = sex;
        this.food = food;
    }
}

function logCatObject() {
    let catname = document.getElementById('catname').value;
    let catage = document.getElementById('catage').value;

    let species = document.getElementById('species').value;
    let sex = document.querySelector('input[name=sex]:checked').value;
    let foods = document.querySelectorAll('input[name=food]:checked');
    let checkedFood = [];
    for (let food of foods) {
        checkedFood.push(food.value);
    }

    let cat = new Cat(catname, catage, species, sex, checkedFood);
    console.log(cat);
}