module.exports = function check(str, bracketsConfig) {
let sum = 0
for (let i = 0; i < str.length;i++){
(str[i]=='('||str[i]=='['||str[i]=='{')?sum+=1:sum-=1
if (sum<0) {
  return false
  break
}}
if (str.length%2!==0) return false
return true
}
