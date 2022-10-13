# ICreativeTab

Объект ICreativeTab представляет вкладку творческого режима.

## Импорт пакета
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
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


## ZenMethod
#### setBackgroundImageName
Uses a string (e.g. `"item_search.png"`).  
Returns void (nothing).

```zenscript
tab.setBackgroundImageName(String backgroundImage);
```