# Использование IItemDefinitions для экономии времени при обращении к мета-элементам

## Problem

Допустим, мы хотим удалить рецепты некоторых конкретных цветов шерсти.  
Белая шерсть имеет метаданные 0, все цветовые диапазоны от мета 1 до мета 15, поэтому в общей сложности существует 16.

Мы хотим удалить шерсти с мета 3 до 12. Что мы делаем?  
Мы не можем просто удалить все из них (иными словами, используйте `<minecraft:wool:*>`), но мы также не хотим 10 раз писать то же самое.  
В этом примере это полностью работает, в большом масштабе это становится довольно раздражающим!

## Что мы знаем/должны знать

- recipes.remove требует [IIngredient](/Vanilla/Variable_Types/IIngredient/) объект
- [IItemStack](/Vanilla/Items/IItemStack/) может использоваться как [Ingredient](/Vanilla/Variable_Types/IIngredient/) как [IItemstack](/Vanilla/Items/IItemStack/) расширяет [ингредиенты](/Vanilla/Variable_Types/IIngredient/)
- Мы можем использовать [IItemDefinitions](/Vanilla/Items/IItemDefinition/) для создания [IItemStacks](/Vanilla/Items/IItemStack/)

## Решение

Мы используем [IItemDefinitions](/Vanilla/Items/IItemDefinition/) и целочисленный диапазон и итерацию через последний.  
Если мы не можем использовать int диапазон, мы также можем использовать массив чисел, но это потребует от вас ввести все необходимые цифры.  
Вы также можете использовать это для исключения использования некоторых предметов.

```zenscript
val itemDef = <minecraft:wool>.definition;

//does this for <minecraft:wool:3> to <minecraft:wool:12>
for i in 3 to 13{
    recipes.remove(itemDef.makeStack(i));
}


val numArray = [3,4,5,6,7,8,9,10,11,12] as int[];


//<minecraft:wool:3> to <minecraft:wool:12>
for i in numArray{
    itemDef.makeStack(i).addTooltip("Un-Craftable");
}

//<minecraft:wool:3> to <minecraft:wool:12>, but without 5 and 9
for i in 3 .. 13{
    if(i != 5 & i != 9){
        itemDef.makeStack(i).addShiftTooltip("Help me!");
    }
}

```