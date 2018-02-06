# ai scripts

## jpeg-export.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/jpeg-export.js)   
Скрипт создает превью в формате JPG из файлов формата EPS или AI. 

Как работать со скриптом:
1. Запустить скрипт из иллюстратора File => Scripts => Jpeg Export или File => Scripts => Other Script...
2. Указать Source Directory - папку с готовыми EPS или AI для которых хотим сохранить превью
3. Указать Destination Directory - папку, куда скрипт сохранит JPG
4. Установить Jpeg Resolution, чем больше разрешение, тем больше будет размер превью.
5. Нажать Start   

Если работа скрипта была прервана и вы запускаете скрипт заново, то он учтет уже сохраненные файлы и начнет работу с того места, где был остановлен.
![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/jpeg-export.ru.png?raw=true)   

## prepare-for-stock.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/prepare-for-stock.js)   
Скрипт подготавливает файлы к загрузке на стоки:
* Разблокирует все элементы или целые слои, если на них стоит блокировка
* Разбирает неразобранный текст
* Закрывает все открытые пути
* Запускает Cleanup Path
* Конвертирует все в RGB
* Удаляет неиспользуемые стили, символы, и т.д 

Как работать со скриптом:
1. Запустить скрипт из иллюстратора File => Scripts => Prepare-for-stock или File => Scripts => Other Script...
2. Указать Source Directory - папку с готовыми EPS или AI 
3. Указать Destination Directory - папку, куда скрипт сохранит почищенные EPS
4. Указать фотмат EPS - 8 или 10
5. Снять галочки на действиях, которые хотим пропустить
6. Нажать Start  

Если работа скрипта была прервана и вы запускаете скрипт заново, то он учтет уже сохраненные файлы и начнет работу с того места, где был остановлен.

![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/prepare-for-stock.ru.png?raw=true)   

## apply-style.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/apply-style.js)     
Скрипт автоматизирует применение приготовленных стилей на большое количество объектов. 

Как работать со скриптом:
1. Создать серию объектов для которых мы хотим применять подготовленные стили. Сохранить каждый как отдельный EPS файл.
2. Создать темплейт - EPS файл, в котором сохранены подготовленные стили. Артборд может быть пустым или с заблокированным бэкграундом.
3. Открыть темплейт
4. Запустить скрипт из иллюстратора File => Scripts => Apply-style или File => Scripts => Other Script…
5. Указать Source Directory - папку с серией объектов
6. Указать Destination Directory - папку, куда скрипт сохранит AI с примененным стилем
7. Отметить галочками те стили из списка, которые хотим применить 
8. Нажать Start  

Если работа скрипта была прервана и вы запускаете скрипт заново, то он учтет уже сохраненные файлы и начнет работу с того места, где был остановлен.

![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/apply-style.ru.png?raw=true)   
