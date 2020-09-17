# Патрон давления

Камера давления представляет собой многоблочную структуру, которая использует сжатый воздух для преобразования одного или нескольких входных элементов в один или несколько выходных элементов. Рецепты камеры давления имеют сопутствующее значение давления, которое является давлением воздуха в баре, необходимое для конвертирования.

## Звонок

Вы можете вызвать пакет камеры давления, используя `mods.pneumaticcraft.pressurechamber`.

## Удаление

Эта функция удаляет первый рецепт, который он найдет, с данным [IItemStack](/Vanilla/Items/IItemStack/) `выводит` массив:

```zenscript
mods.pneumaticcraft.pressurechamber.removeRecipe(IItemStack[] outputs);
// Пример
mods.pneumaticcraft.pressurechamber.removeRecipe([<pneumaticcraft:ingot_iron_compressed>]);
```

Эта функция удаляет *всех рецептов камеры давления:*

```zenscript
mods.pneumaticcraft.pressurechamber.removeAllRecipes();
```

## Добавление

Эта функция используется для добавления новых рецептов в камеру давления:

```zenscript
mods.pneumaticcraft.pressurechamber.addRecipe(IIngredient[] входов, двойное давление, IItemStack[] выход);

// Пример
mods.pneumaticcraft.pressurechamber.addRecipe([<minecraft:gold_ingot> * 2,<minecraft:apple>], 2.0, [<minecraft:golden_apple>]);
```