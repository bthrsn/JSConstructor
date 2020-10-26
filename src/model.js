import image from './assets/imageAchievment.png'
import {TitleBlock, ImageBlock, ColumnsBlock, TextBlock} from './classes/blocks'

const text = 'ЗА ЭТИМ КОДОМ ОХОТЯТСЯ ЛУЧШИЕ ФРОНТЕНДЕРЫ МИРА! МУЖ ОТНОСИТ ДЕТЕЙ НА РУКАХ ПОДАЛЬШЕ ОТ КОМПЬЮТЕРА! СОСЕДИ И РОДСТВЕННИКИ ТРЕЩАТ ПО ШВАМ! ПОДРУГИ ПОУМИРАЛИ ОТ ЗАВИСТИ (НЕ С КЕМ ДРУЖИТЬ). УДАЛЮ ЧЕРЕЗ 234 ДНЯ! ВСТРЕЧАЙТЕ:'

export const model = [
  new TitleBlock ('Конструктор cайтов на чистом JavaScript', {
    tag: 'h2',
      styles: {
        background: 'linear-gradient(to right, #ff0099, #493240)', 
        color: '#fff', 
        padding: '1.5rem',
        'text-align': 'center',
      }
    }
  ),
  new ImageBlock (image, {
      styles: {
       padding: '2rem 0',
       display: 'flex',
       'justify-content': 'center'
      },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Звук получения достижения на консоли'
    }
  ),
  new ColumnsBlock (
    [
      'Без использования библиотек',
      'Принципы SOLID и ООП в JavaScript',
      'UI своими руками'      
    ], 
    {
      styles: {
        background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
        padding: '2rem',
        color: '#fff',
        'font-weight': 'bold'
      }
    }
  ),
  new TextBlock (text, { 
      styles: {
        background: 'linear-gradient(to left, #f2994a, #f2c94c)',
        padding: '1rem',
        'font-weight': 'bold'
      }
    }
  ),
]