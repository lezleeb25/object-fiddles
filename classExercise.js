//4/18/2015

var nums = ["hello", "javascript", "awesome"];

var finder = function (word, tmpArr) {
	for(var i = 0; i < tmpArr.length; i++) {
		if(word === tmpArr[i]){
			return true;
		}
	}
	return false;
}

var isTrue = finder("javascript", nums);
console.log('Sent javascript: ' + isTrue);
var temp = finder("lame", nums);
console.log('Sent lame: ' + temp);


//OBJECTS
// Objects have key value pairs
var obj = {
	key: 'value',
	key2: 'value2',
	whatever: 'myWhatever value',
	myMethod: function() {}
};

// to call the object
//function is a method attached to an object
obj.myMethod();
obj.key;
//can use bracket notation
obj['key'];
//stick with dot notation

//Adding to an object
obj.myKey2 = 'something else';

//Override values
obj.key = '6';


//Objects use for in loop to loop into the object
var obj = {};
obj.val1 = 1;
obj.val2 = 2;
obj.val3 = 3;

//key is the key value of the key value pairs
for (var key in obj) {
	console.log(key, obj[key]);
	console.log(key);
	console.log(obj[key]);
}

// Will delete off of an object
//delete obj.obj2;


//Nesting objects (two ways)
var obj = {
	obj2: {
		obj3: {

		}
	}
}

var obj = {};
var obj.obj2 = {};
var obj.obj2.obj3 = {};

obj.normalProperty = true;


//These two are the same
obj['obj2'];
obj.obj2;


















