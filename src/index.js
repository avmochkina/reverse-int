module.exports = function reverse (n) {
    n = Math.abs(n) + '';
    let result = n.split('').reverse().join('');
    return result;
};
    
