# Представление данных о симптомах

Представление данных симптомов представляет собой данные трюков конструирования и является предметом.  
Такой объект можно получить из существующего объекта [симптома](/Mods/ContentTweaker/Tinkers_Construct/Trait/) поставив IItemStack к методу `getData`.

## Импорт класса

Возможно, вам потребуется импортировать класс, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import mods.contenttweaker.tconstruct.TraitDataRepresentation`

## ZenGetter и ZenSetter

| Название                  | Геттер | ZenSetter | Тип    |
| ------------------------- | ------ | --------- | ------ |
| цвет                      | ✔      | ✔         | int    |
| текущий                   | ✔      | ✔         | int    |
| дополнительная информация | ✔      | ✔         | string |
| identifier                | ✔      | ✔         | string |
| уровень                   | ✔      | ✔         | int    |
| макс                      | ✔      | ✔         | int    |
| инфо                      | ✔      |           | string |
| цветная строка            | ✔      |           | string |

## Методы ZenScript

```zenscript
//Содержит то же самое, что и myTraitData.info;
myTraitData.calcInfo();

//Содержит то же самое, что и myTraitData.colorString;
myTraitData.getColorString();
```