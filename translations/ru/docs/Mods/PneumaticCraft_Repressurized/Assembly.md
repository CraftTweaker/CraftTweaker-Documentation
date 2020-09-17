# Robotic Assembly System

Система Роботизированной Ассамблеи представляет собой многоблочный комплект, состоящий из контроллера Скупщины, Единицы Скупщины, Платформы Скупщины, Скупщины Лазера и Скупщины. Она преобразует входные элементы в выходные элементы с помощью лазера и/или сверла.

Существует несколько функций для добавления и удаления рецептов, в зависимости от того, требует ли рецепт использования лазера, сверла или того и другого.

## Звонок

Вы можете вызвать пакет сборки с помощью `mods.pneumaticcraft.assembly`.

## Удаление

Эти функции удаляют первый рецепт, который они находят с данным [IItemStack](/Vanilla/Items/IItemStack/) `вывод`:

```zenscript
mods.pneumaticcraft.assembly.removeLaserRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillRecipe(IItemStack output);
mods.pneumaticcraft.assembly.removeDrillLaserRecipe(IItemStack output);

// Examples
mods.pneumaticcraft.assembly.removeLaserRecipe(<pneumaticcraft:aphorism_tile>);
mods.pneumaticcraft.assembly.removeDrillRecipe(<pneumaticcraft:pressure_chamber_valve>);
```

Эти функции удаляют *все* рецепты, которые в настоящее время определены для Системы сборки:

```zenscript
mods.pneumaticcraft.assembly.removeAllLaserRecipes();
mods.pneumaticcraft.assembly.removeAllDrillRecipes();
mods.pneumaticcraft.assembly.removeAllDrillLaserRecipes();
```

## Добавление

Эти функции используются для добавления новых рецептов для системы сборки:

```zenscript
mods.pneumaticcraft.assembly.addLaserRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillRecipe(IItemStack input, IItemStack output)
mods.pneumaticcraft.assembly.addDrillLaserRecipe(IItemStack input, IItemStack output)

// Examples
mods.pneumaticcraft.assembly.addLaserRecipe(<pneumaticcraft:ingot_iron_compressed> * 2, <pneumaticcraft:compressed_iron_gear>);
```