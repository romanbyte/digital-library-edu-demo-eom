# Демо ЭОМ

Проект предназначен для демонстрации работы ЭОМ, работающим в Библиотеке контента внутри 
IFRAME.

На что нужно обратить внимание при разработке ЭОМ 

1. Для оформления ЭОМ нужно использовать фреймворк bootstrap версии 5. Тема bootstrap генерируется
на стороне Библиотеки контента и доступна по ссылке, приведенной в файле template.html.

2. Для взаимодействия с родительским окном, используется библиотека IframeResizer (https://github.com/davidjbradshaw/iframe-resizer),
она отвечает за передачу событий прохождения ЭОМ в родильское окно и за корректную работу ЭОМ в IFAME,
Корректной работой является перерасчет размеров IFRAME при изменении DOM. 
При разработке IFRAME ЭОМ **библиотека IframeResizer должна использоваться обязательно**.

3. Пути до графических элементов, медиа элементов, стилей и скриптов, используемых в ЭОМ, должны быть относительными  
корневого файла index.html. То есть не должны содержать доменного имени и символа `/` в начле пути

4. В файле src/eom.json находится информация о типе ЭОМ, о том, что он предназначен для работы
через IFRAME и его главный файл index.html

Демо ЭОМ разработан на javascript, для сборки используется Webpack.

Функция передачи данных в родительское окно расположена в файле `./src/dom/send-x-api-message.js`

Перечень Глаголов для передачи в xAPI распложен в файле `./src/constants/verbs.js` 

Работа с проектом:

- установить зависимости `yarn install`
- запустить в режиме разработки `yarn dev`
- собрать продуктовую версию `yarn build`

После сборки проекта в папке `dist` будут находиться все необходимые ЭОМ файлы, которые нужно
загрузить в Библиотеку контента. 

Основной файл — `dist/index.html`.