document.write('<p>과제2번</p> ')

var gym = {
    name: '김종국',
    birth: '76.04.25',
    nationality: '한국',
    job: '가수'
};

var cute = {
    name: '김태리',
    birth: '90.04.04',
    nationality: '한국',
    job: '배우'
};

function introduce(person){
    return `안녕하세요, 반갑습니다.
    제 이름은 ${person.name}입니다.
    생년월일은 ${person.birth}입니다.
    국적은 ${person.nationality}입니다.
    직업은 ${person.job}입니다.
    잘 부탁드립니다.`
}

console.log(introduce(gym));
console.log(introduce(cute));