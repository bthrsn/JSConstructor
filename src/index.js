import {model} from './model'
import {App} from './classes/app'
import './styles/main.css'

// Чтобы точка входа была максимально абстрактной - подробный функционал перенесен в файл app.js в классах
new App(model)
