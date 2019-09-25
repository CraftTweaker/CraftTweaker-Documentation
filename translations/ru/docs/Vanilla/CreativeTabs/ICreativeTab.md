# ICreativeTab

Объект ICreativeTab представляет вкладку творческого режима.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.creativetabs.ICreativeTab;`

## Получение такого объекта

Вы можете получить ICreativeTab из [обработчика скобок для вкладок творческого режима](/Vanilla/Brackets/Bracket_CreativeTab/).

## Геттеры и методы без параметров

| Геттер/метод     | Возвращаемый тип |
| ---------------- | ---------------- |
| searchBarWidth   | int              |
| tabLabel         | string           |
| setNoScrollBar() | void             |
| setNoTitle()     | void             |

## Метод

#### setBackgroundImageName

Использует строку (например, `"item_search.png"`).  
Ничего не возвращает.

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```