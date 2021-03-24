import winkLink from './src/link'
winkLink.install = Vue => {
  Vue.component(winkLink.name, winkLink)
}
export default winkLink