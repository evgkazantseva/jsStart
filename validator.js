class Validator {
    isEmail(str) {
        let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return regexp.test(str);
    }

    isDomain(str) {
        let regexp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        return regexp.test(str);
    }
    isDate(str) {
        return (Date.parse(str) != NaN) ? true : false;
    }

    isPhone(str) {
        let regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return regexp.test(str);
    }
}

class ValidatorStatic {
    static isEmail(str) {
        let regexp = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
        return regexp.test(str);
    }

    static isDomain(str) {
        let regexp = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
        return regexp.test(str);
    }
    static isDate(str) {
        return (Date.parse(str) != NaN) ? true : false;
    }

    static isPhone(str) {
        let regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return regexp.test(str);
    }

}
//стандартная вызывается вот так
var validator = new Validator();
console.log(validator.isEmail('alisa@mail.ru'));
console.log(validator.isDomain('itgirlschool.ru'));
console.log(validator.isDate('12.05.2021'));
console.log(validator.isPhone('+7(910)123-45-67')); //тут используем формат своей страны

//а статическая так
console.log(ValidatorStatic.isEmail('alisa@mail.ru'));
console.log(ValidatorStatic.isDomain('itgirlschool.ru'));
console.log(ValidatorStatic.isDate('12.05.2021'));
console.log(ValidatorStatic.isPhone('+7(910)123-45-67')); //тут используем формат своей страны