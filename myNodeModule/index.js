/**
 * @file Describe the file
 * @author daihongtao
 */

var myName = 'daihongtao';

function changeName(name) {
    myName = name;
}

function showName() {
    console.log(myName);
}

var hongtao = {
    showName: showName,
    changeName: showName
};

console.log(module);
console.log(module.exports);

module.exports = hongtao;