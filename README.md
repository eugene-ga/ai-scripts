# Ai Scripts

## Table of Contents:
* [Инструкция на русском языке](https://github.com/shvendala/ai-scripts/blob/master/README.ru.md)
* [Jpeg Export](https://github.com/shvendala/ai-scripts#jpeg-exportjs)
* [Prepare for stocks](https://github.com/shvendala/ai-scripts#prepare-for-stockjs)
* [Apply Style](https://github.com/shvendala/ai-scripts#apply-stylejs)

---

## jpeg-export.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/jpeg-export.js)   

Script generates raster JPG preview for vector EPS or AI files. 
How to:
1. Run script from Adobe Illustrator: File => Scripts => Jpeg Export or File => Scripts => Other Script…
2. Specify Source Directory - folder containing EPS or AI files ready to create preview
3. Specify Destination Directory - folder to save JPG files to
4. Set the Jpeg Resolution. The more the resolution the bigger the preview will be.
5. Push Start

In case the script was interrupted and you run it over again, it will take into account already saved files and resume it’s work from the place where it was previously stopped

![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/jpeg-export.png?raw=true)   

## prepare-for-stock.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/prepare-for-stock.js)   

Script prepares vector files for publication to microstock sites (e.g. shutterstock, istock, etc…):
* Unlock all objects and entire layers
* Expand text
* Close all open paths
* Cleanup Paths
* Convert to RGB
* Delete unused panel items
* 
How to:
1. Run script from Adobe Illustrator: File => Scripts => Prepare-for-stock or File => Scripts => Other Script…
2. Specify Source Directory - folder containing EPS or AI files ready for cleanup.
3. Specify Destination Directory - folder to save EPS files to
4. Set the EPS format - 8 or 10
5. Uncheck boxes with actions you want to skip
6. Push Start

In case the script was interrupted and you run it over again, it will take into account already saved files and resume it’s work from the place where it was previously stopped

![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/prepare-for-stock.png?raw=true)   

## apply-style.js
[download](https://raw.githubusercontent.com/shvendala/ai-scripts/master/scripts/apply-style.js)   

Apply selected styles to multiple objects and save new document per each style.

How to:
1. Create multiple objects you want to apply selected styles to. Save each object as a separate EPS file
2. Create template  - EPS file with prepared graphic styles. Artboard might be empty or with background locked.
3. Open template file
4. Run script from Adobe Illustrator: File => Scripts => Apply-style или File => Scripts => Other Script…
5. Specify Source Directory - folder containing EPS files with prepared objects
6. Specify Destination Directory - folder to save AI file with style applied
7. Check boxes with styles you wish to apply 
8. Push start

In case the script was interrupted and you run it over again, it will take into account already saved files and resume it’s work from the place where it was previously stopped

![screenshot](https://github.com/shvendala/ai-scripts/blob/master/assets/apply-style.png?raw=true)   
