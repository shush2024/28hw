// Տրված է իրական թվերի հաջորդականություն
// ա)Արտածել այդ հաջորդականության տարրերի այն քանակը, որոնք փոքր են իրենց կարգահամարի քառակուսուց


// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let count = 0;

// for(let i = 0; i < d.length;i++){
//     let index = i + 1;
//     if(d[i] > index * index ){
//         count++
//     }

// }
// console.log(count);

// բ)բոլոր տարրերի միջին թվաբանականի և տարրերի տարբերությունները

// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let sum = 0;
// for(let i = 0; i < d.length; i++){ 
//      sum += d[i];
//     count = sum / d.length;
    
// }
// let dif = [];
// for(let i = 0; i < d.length;i++){
//     dif.push(d[i] - count)
   

// }

// console.log(count);
// console.log(dif);

// գ)այն տարրերի քանակը, որոնք փոքր են իրենց աջ ու ձախ հարևանների կիսագումարից

// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let count = 0;
// for(let i = 0; i < d.length; i++){
//     left = d[ i - 1];
//     right = d[ i + 1 ];
//     sum = (left + right) / 2;
//     if(d[i]>sum){
//         count++;
//     }
// }
// console.log(count);

// դ)մեծագույն տարրը և նրա կարգահամարը
// let d = [1,2,3,55,125,259,1588,1254,11,26,25]

// let max = d[0];
// let index = 0;

// for(let i = 1; i < d.length;i++){
//     if(d[i] > max) {
//         max = d[i];
//         index = i;
//     }

// }

// console.log(max);
// console.log(index + 1);

// ե)մեծագույն և փոքրագույն տարրերի տարբերությունները

// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let sum = 0;
// let max = d[0];
// let min = d[0];
// for(let i = 0; i < d.length; i++){
//      if(d[i] > max){
//         max = d[i];
//     }
//     if(d[i] < min){
//         min = d[i];
//     }
//     sum = max - min;
// }
// console.log(sum);

// զ)առաջին մեծագույն և վերջին փոքրագույն տարրերի միջև գտնվող անդամների գումարը


// է)մեծագույն և մեծությամբ երկրորդ տարրերը
// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let max = d[0];
// let sec = d[0];
// for(let i = 0; i < d.length; i++)
//     {
//     if(d[i] > max){
//         max = d[i];
//     }
//     else if(d[i]>sec && d[i] !== max){
//         sec = d[i]
//     }
    
// }

// console.log(max);
// console.log(sec);

// ը) դրական տարրերից փոքրագույնի արժեքը
// let d = [-1,2,-3,-55,-125,-259,-1588,-1254,-11,-26,-25]
// let min = Infinity;
// for(let i = 0; i < d.length; i++){
//     if( d[i] > 0 && d[i] < min){
//         min = d[i]
//     }
   
// }
// if( min === Infinity){
//     console.log("There is no positive number")
// }else{
//     console.log(min);
// }

// Տրված է իրական թվերի հաջորդականություն, արտածել YES եթե
// ա) դրանում դրական տարրերի քանակը ավելի մեծ է քան բացասական տարրերի քանակը

// let d = [1,2,3,55,125,259,1588,1254,11,26,25]
// let pos = d[0];
// let neg = d[0];
// for(let i = 0; i < d.length; i++){
//     if(d[i] > 0){
//         pos++;
//     }
//     else if( d[i] < 0){
// neg++;}
// }

//   if( pos > neg){
//     console.log("No");
// } else if(pos = neg){
//     console.log("They are equal");
// }
//   else{
//     console.log("No");
//   }



// բ) այն սիմետրիկ հաջորդականություն է
// let d = [2,2,3,3,2,2];
// let d1 = [];
// for(let i = d.length - 1; i >= 0; i--){
//     d1.push(d[i])

//     }
// if(d.toString() === d1.toString()){
//     console.log("Yes");
// }else{
//    console.log("No");
// }


// գ) այն թվաբանական պրոգրեսիա է
// let d = [2,4,6,8,10,12,14,16]
// let sum = true;
//  diff = d[1] - d[0];
//  for(let i = 1; i < d.length - 1; i++){
//         if(d[i + 1] - d[i] !== diff){
//             sum = false;
//             break;
//         }
//     }


// if (sum) {
//     console.log("YES");
    
// }else{
//     console.log("NO");
// }


// երկրաչափական պրոգրեսիա է
// let d = [1,2,4,8,16,32,64,128,256]
// let sum = true;
// if(d.length > 1){
//    diff = d[1] / d[0]

// for(let i = 0; i < d.length - 1; i++){
//     if(d[i + 1] / d[i] !== diff ){
//         sum = false;
//         break;
//     }
// }

// }

// if(sum){
//     console.log("YES");
// }else{
//     console.log("NO");
// }







