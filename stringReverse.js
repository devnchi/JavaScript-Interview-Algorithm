/*
Question: How would you reverse a string in JavaScript?

Answer: I can loop through the string and concatenate letters to a new string
*/

//O(n)
function reverse(str){
  var rtnStr = '';
  for(var i = str.length-1; i>=0;i--){
    rtnStr +=str[i];
  }
  return rtnStr;
}

> reverse('you are a nice dude');
  = "edud ecin a era uoy"
  
  
//with array applied  
function reverse(str){
  var rtnStr = [];
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
  
  for(var i = str.length-1; i>=0;i--){
    rtnStr.push(str[i]);
  }
  return rtnStr.join('');
}

function reverse(str) {
  str = str.split('');
  var len = str.length,
      halfIndex = Math.floor(len / 2) - 1,
      revStr;
  for (var i = 0; i <= halfIndex; i++) {
    revStr = str[len - i - 1];
    str[len - i - 1] = str[i];
    str[i] = revStr;
  }
  return str.join('');
}


//recursive
function reverse (str) {
    if (str === "") {
        return "";
    } else {
        return reverse(str.substr(1)) + str.charAt(0);
    }
}

//with method applied
function reverse(str){
  if(!str || str.length <2) return str;
  
  return str.split('').reverse().join('');
}
    
//reverse function as string extension
String.prototype.reverse = function (){
  if(!this || this.length <2) return this;
  
  return this.split('').reverse().join('');
}

> 'abc'.reverse();
  = 'cba'

