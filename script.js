const sampleObject = { red: "#FF0000", green: "#00FF00", white: "#FFFFFF" };

function hasKey(key) {
  //   write your code here
	let x=sampleObject.keys();
	(for let i=0;i<x.length;i++){
		if(key==x[i]){
			return true;
		}
	}
	return false;
}

// Do not change the code below
const key = prompt("Enter Key.");
alert(hasKey(key));
