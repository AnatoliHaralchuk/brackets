module.exports = function check(str, bracketsConfig) {
  let open = []
  let close = []
  stage = []
  for (let key in bracketsConfig){
    open.push(bracketsConfig[key][0])
    close.push(bracketsConfig[key][1])
  }
  for (let i = 0; i < str.length; i++){
    current = str[i]
    if (open.includes(current)&&close.includes(current)){
      (stage.includes(current)) ? stage.pop(current) : stage.push(current)
    }
    else {if (open.includes(current)){stage.push(current)}
          else {
                if (stage.length == 0) return false
                let top = stage[stage.length - 1]
                if (close.includes(current)&&(close.indexOf(current) == open.indexOf(top))){
                  stage.pop(current)
                }
              }
          }
  }
  return (stage.length == 0)
}
