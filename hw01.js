document.write('<p>과제1번</p> ');

var studentScore = 35
var grade;

switch(true) {
    case studentScore >= 90 :
        grade = 'A';
        break;
    case studentScore >= 70 && studentScore < 90:
        grade = 'B';
        break;
    case studentScore >= 60 && studentScore < 70:
        grade = 'C';
        break;
    case studentScore >= 50 && studentScore < 60:
        grade = 'D';
        break;
    case studentScore < 50:
        grade = 'F';
        break;  
    default:
        grade = '측정 불가능합니다.'
}
console.log(`당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.`);