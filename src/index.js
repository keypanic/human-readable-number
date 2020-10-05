
let numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',    
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    decade: {
        0: '',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty', 
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }
}

function doubleD(array) {  
    let tmp = parseInt(array.join(''));  
    if(tmp <= 20 && tmp > 0)
        return numbers[tmp];
    return numbers.decade[array[0]] + ((array[1] > 0) ? ' ' + numbers[array[1]] : '');
}

module.exports = function toReadable (number) {
    if(number <= 20)
        return numbers[number];
    let tmp = Array.from(String(number));
    let array =  tmp;
    if(number <=  99) 
        return doubleD(array)
        
    result = numbers[(array.shift())] + ' hundred ';
    result += doubleD(array);
    return result.trim();
}

