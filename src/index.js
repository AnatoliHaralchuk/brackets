module.exports = function check(str, bracketsConfig) {
if (str.length%2!==0) return false
let result = true
for (let i = 0; i < bracketsConfig.length;i++){
  let open = bracketsConfig[i][0]
  let close = bracketsConfig[i][1]
  let j1 = 0
  let j2 = 1
    for (let j=0; j<str.length;j++){
      let str1 = str.indexOf(open,j1)
      let str2 = str.indexOf(close,j2)
      if (str1 == -1)break
      if (open == close&&(str2-str1)%2 !== 0){
        j1 = j2+1
        j2 = str.indexOf(open,j1) + 1
      }
      else if (open!==close&&str2>str1&&(str2-str1)%2 !== 0) {
        j1 = str1+1
        j2 = str2+1
      }
      else {result = false}
    }
}
return  result
}
