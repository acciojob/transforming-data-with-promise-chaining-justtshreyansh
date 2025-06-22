//your JS code here. If required.
const input = document.querySelector("#ip");
const button = document.querySelector("#btn");
const output = document.querySelector("#output");
function clickHandler(){
	let val = input.value.trim();
	val = parseInt(val);
	promise1(val).then((val)=>{
		output.innerHTML += `Result: ${val} <br/>`;
		return promise2(val);
	}).then((val)=>{
		output.innerHTML += `Result: ${val} <br/>`;
		return promise3(val);
	}).then((val)=>{
		output.innerHTML += `Result: ${val} <br/>`;
		return promise4(val);
	}).then((val)=>{
		output.innerHTML += `Result: ${val} <br/>`;
		return promise5(val);
	}).then((val)=>{
		output.innerHTML += `Final Result: ${val} <br/>`;
	})
	
	
}

function promise1(val){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve(val);
		},2000);
	})
	
}
function promise2(val){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve(val*2);
		},2000);
	})
}
function promise3(val){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve(val-3);
		},1000);
	})
}

function promise4(val){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve(val/2);
		},1000);
	})
}
function promise5(val){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
		resolve(val+10);
		},1000);
	})}





