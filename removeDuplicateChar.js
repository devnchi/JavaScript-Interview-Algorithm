/*
Question: How will you remove duplicate characters from a sting?

You: This is very similar to first non repeating char. You will asks similar question. 

Is it case sensitive? If interviewer says, this is case sensitive then life become easier for us. 
If they say no, you can either use string.toLowercase() to make whole string lower. 
They might not like it if the return string does not have the same case.
*/

function removeDuplicateChar(str){
  var len = str.length,
      char, 
      charCount = {}, 
      newStr = [];
  for(var i =0; i<len; i++){
    char = str[i];
    if(charCount[char]){
      charCount[char]++;
    }
    else
      charCount[char] = 1;
  }
  for (var j in charCount){
    if (charCount[j]==1)
       newStr.push(j);
  }
  return newStr.join('');
}

> removeDuplicateChar('Learn more javascript dude');
  = "Lnmojvsciptu"
  
  
  
