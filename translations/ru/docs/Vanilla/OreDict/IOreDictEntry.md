# IOreDictEntry

Когда [IOreDict](/Vanilla/OreDict/IOreDict/) является лексиконом, IOreDictEntries являются записями лексикона.  
Они состоят из имени (названия словаря) и объяснения (все соответствующие элементы).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import crafttweaker.oredict.IOreDictEntry;`

## Получение такого объекта.

Существует множество способов получения IOreDictEntry объекта: Если вы ссылаетесь на oreDict, который еще не существует, он будет создан.

- Используя класс [IOreDict](/Vanilla/OreDict/IOreDict/).
- Использование обработчика руд [](/Vanilla/Brackets/Bracket_Ore/).
- Используя [IItemDefinition `получил` руды](/Vanilla/Items/IItemDefinition/).

## ZenGetters

Вы можете использовать эти устройства для получения некоторой информации на oredict:

| имя          | Описание                                    | Возвращаемый тип                         |
| ------------ | ------------------------------------------- | ---------------------------------------- |
| имя          | Возвращает имя oreDict                      | string                                   |
| пустой       | Возвращает если oreDict пуст                | bool                                     |
| первый пункт | Возвращает первый элемент программы oreDict | [IItemStack](/Vanilla/Items/IItemStack/) |

## ZenMethods

Вы можете использовать эти методы на IOreDictEntry объекте:

### Добавить/Удалить элементы

```zenscript
val oreDictEnt = <ore:ingotIron>;

//oreDictEnt.add(IItemStack... item_items);
oreDictEnt.add(<minecraft:grass>);
oreDictEnt.add(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.addItems(IItemStack[] items);
oreDictEnt.addItems([<minecraft:redstone>, <minecraft:gold_ore>]);

//oreDictEnt.addAll(IOreDictEntry otherEntry);
oreDictEnt.addAll(<ore:ingotGold>);



//oreDictEnt.remove(IItemStack... item_items);
oreDictEnt.remove(<minecraft:grass>);
oreDictEnt.remove(<minecraft:iron_ore>, <minecraft:dirt>);

//oreDictEnt.removeItems(IItemStack[] items);
oreDictEnt.removeItems([<minecraft:redstone>, <minecraft:gold_ore>]);
```

### Отметьте, если IOreDictEntry содержит элемент

Вы можете проверить, содержит ли IOreDictEntry товар, используя `в` или `имеет` ключевые слова:

```zenscript
val oreDictEnt = <ore:ingotIron>;

//При использовании
if(oreDictEnt in <minecraft:iron_ingot>){
    print("Iron is in oreDict! );
}

//Многие предпочитают иметь так как это может иметь больше смысла в грамматике
if(oreDictEnt has <minecraft:iron_ingot>){
    print("Iron всё ещё находится в oreDict! );
}
```

### Отражать IOreDictEntry

Отражение IOreDictEntry означает, что все элементы в другом oreDictEntry будут заменены элементами в oreDictEntry метод:

```zenscript
//изготовить чугун и медь эквивалент
утюга = <ore:ingotIron>;
меди валы = <ore:ingotCopper>;

//добавляет все записи из железа в медь, чтобы в медь содержались как железные, так и медные записи
железа. ddAll(медь); 


//зеркала меди на железо, так что все элементы железа будут заменены всеми из меди.
//В этом случае это означает все железные и медные oreDictEntries
copper.mirror(железо);
```

## Реализация Иингредиента

IOreDictEntry расширяет [Ingredient](/Vanilla/Variable_Types/IIngredient/). Это означает, что все методы, доступные [IIngredient](/Vanilla/Variable_Types/IIngredient/) , также доступны для IOreDictEntries. Это также означает, что вы можете поместить IOreDictEntries в IIngredient Arrays (например, в методы создания рецептов).

### Итерация через элементы oreDictEntry,

```zenscript
val iron = <ore:ingotIron>;

для предмета iron.items{
    recipe.remove(item);
}
```