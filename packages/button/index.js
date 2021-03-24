// 为组件提供 install 方法，供组件对外按需引入
import winkButton from './src/button'
winkButton.install = Vue => {
  Vue.component(winkButton.name, winkButton)
}
export default winkButton
