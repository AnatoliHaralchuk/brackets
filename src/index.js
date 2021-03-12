module.exports = function check(str, bracketsConfig) {
if (str.length%2!==0) return false
let sum = 0
for (let i = 0; i < bracketsConfig.length;i++){
  for (let j=1; j<str.length;){
   let open = bracketsConfig[i[0]]
   let close = bracketsConfig[i[1]]
   let i1 = 0
   let i2 = 1
   let str1 = str.indexOf(open,i1)
   let str2 = str.indexOf(close,i2)
   if cur1


  }
}}
return true
}
