let lab1=[5,5,0,0,5,0,10];
let lab2=[4,5,5,2,4,5,10];
let lab3=[5,0,10,10];
let lab4_5=[10,5,1,5,5,5,6,10,10,10,0];
let lab6=[0];
let sum1=lab1[5]+lab1[5]+lab1[0]+lab1[0]+lab1[5]+lab1[0]+lab1[10];
let sum2=lab2[4]+lab2[5]+lab2[5]+lab2[2]+lab2[4]+lab2[5]+lab2[10];
let sum3=lab3[5]+lab3[0]+lab3[10]+lab3[10];
let sum4_5=lab4_5[10]+lab4_5[5]+lab4_5[1]+lab4_5[5]+lab4_5[5]+lab4_5[5]+lab4_5[6]+lab4_5[10]+lab4_5[10]+lab4_5[10]+lab4_5[0];
let sum6=lab6[0];
let sums=[sum1,sum2,sum3,sum4_5,sum6]
let quiz1="34"
let total_score=(sums*0.6)+(quiz1*0.4)
const results={
lab1:[5,5,0,0,5,0,10],
lab2:[4,5,5,2,4,5,10],
lab3:[5,0,10,10],
lab4_5:[10,5,1,5,5,5,6,10,10,10,0],
lab6:[0],
quiz1: 34,
sums:[sum1,sum2,sum3,sum4_5,sum6],
total_score: (sums*0.6)+(quiz1*0.4)
}
console.log(results)