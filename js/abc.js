/*document.addEventListener('DOMContentLoaded',function(){
	
	var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
	var frame_1 = [arr[0],arr[0],arr[0]], frame_2 = [0,arr[1],arr[1]], frame_3 = [0,0,arr[2]];
	var arrFalse = ['F','F','F'];
  var arrIndex = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
	
	var rallyArrs = [frame_1,frame_2,frame_3]; 
	for(let i = 3; i < len; i++ ){
		if(arr[i] === frame_1[i-1] || arr[i] === frame_2[i-1] || arr[i] === frame_3[i-1]){
			arrFalse.push('T');
			for(let j = 0; j < rallyArrs.length; j++){
				rallyArrs[j].push(rallyArrs[j][i-1]);
			}
		}else{
			let subArr = arr.slice(0, i), len_1, len_2, len_3,arrMax = [];
			len_1 = subArr.lastIndexOf(frame_1[i-1]);
			len_2 = subArr.lastIndexOf(frame_2[i-1]);
			len_3 = subArr.lastIndexOf(frame_3[i-1]);

			let firstElem = []; const number = 100000;
			firstElem.push(frame_1[i-1],frame_2[i-1],frame_3[i-1])
			arrMax.push(len_1,len_2,len_3);

			let t = 0, maxFirstElem = 0;
			let min = arrMax.reduce((a,b) =>{
        if(a<b){ return a;}
        else{ return b;}
			});
		
			for(let j = 0; j < firstElem.length; j++){
				if(firstElem[j] == arr[min]){
					rallyArrs[j].push(arr[i]);
				}else{
					rallyArrs[j].push(rallyArrs[j][i-1]);
				}
			}
			arrFalse.push("F");
		}
	}
  console.log(arrIndex);
  console.log(arr);
  console.log()
  console.log(frame_1);
  console.log(frame_2);
  console.log(frame_3);
  console.log(arrFalse);
},false)*/

var arr = [1,2,3,4,2,1,5,6,2,1,2,3,7,6,3,2,1,2,3,6], len = arr.length;
//
var sumFrame = 3;
var rallyFrame = [];
var arrFalse = [];
for(let i = 0; i < sumFrame; i++){
  rallyFrame.push([]);
  for(let j = 0; j < i; j++){
    rallyFrame[i].push(0);
  }
  for(let j = 0; j < sumFrame-i; j++){
    rallyFrame[i].push(arr[i]);
  }
  arrFalse.push("F");
}


for(let i = sumFrame; i < len; i++){
  let t = 0;
  for(let j = 0; j < sumFrame; j++){
    if(rallyFrame[j][i-1] == arr[i]){
      ++t;
      arrFalse.push(' ');
      for(let j = 0; j < sumFrame; j++){
        rallyFrame[j].push(rallyFrame[j][i-1]);
      }
      break;
    }
  }
  //console.log(t)

  if(t == 0){
    arrFalse.push("F");
    let positionArr = [];
    let subArr = arr.slice(0,i); 
    for(let j = 0; j < sumFrame; j++){
     positionArr.push(subArr.lastIndexOf(rallyFrame[j][i-1]));
    }
    let min = positionArr.reduce((a,b) => {
      if(a < b) { return a;}
      else{ return b;}
    });
    for(let j = 0; j < sumFrame; j++){
      if(rallyFrame[j][i-1] == arr[min]){
        rallyFrame[j].push(arr[i]);
      }
      else{
        rallyFrame[j].push(rallyFrame[j][i-1]);
      }
    }
  }
  else{
    continue;
  }
}

console.log(arr);
console.log();
for(let j = 0; j < sumFrame; j++){
  console.log(rallyFrame[j])
}
console.log(arrFalse)