import router from './src/routes'
import './styles.css'

window.addEventListener('load', router)
window.addEventListener('hashchange', router)

console.log('hello')
