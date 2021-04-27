export default {
install(Vue, options) {
  // 1. добавление глобального метода или свойства
  Vue.prototype.$preparedData = function (data){
    if (data instanceof Object){
      let str = ''
      for (let key in data){
        if (key === 'divider'){
          continue
        }
        str = str + data[key] + data.divider
      }
      str = str.substring(0, str.length - 1)
      return str.trim()
    }
    return data
  }
}
}