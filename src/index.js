module.exports = function check(str, bracketsConfig) {
if (str.length%2!==0) return false 
for (let i = 0; i < str.length ;i++){
 for (let j = i+1; j< str.length;){
   let num1 = str.indexOf(')',j)
   let num2 = str.indexOf(']',j)
   let num3 = str.indexOf('}',j)
   let num4 = str.indexOf('|',j)
   if ((str[i]=='(')&&((num1-i)%2==0)) return false 
   if ((str[i]=='[')&&((num2-i)%2==0)) return false 
   if ((str[i]=='{')&&((num3-i)%2==0)) return false 
   if ((str[i]=='|')&&((num4-i)%2==0)) return false 
 }
}
return true
}
// (str[i]=='('||str[i]=='['||str[i]=='{')?sum+=1:sum-=1
// if (sum<0) {
//   return false
//   break
//  }