# Факторизатор

Менеджер Factorizer позволяет добавлять рецепты к факторингу.

## Импортировать пакет

Чтобы сократить вызовы методов, вы можете [импортировать](/AdvancedFunctions/Import/) пакет так:

```zenscript
import mods.thermalexpansion.Factorizer;
```

## Добавить рецепты

Вы можете добавить уникальные комбайны или привязки.

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
hermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack, разделитель IItemStack);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## Удалить рецепты

Конечно, вы можете удалить рецепты.  
Если вы хотите удалить двустороннюю привязку, вам потребуются два вызова.

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack in);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```