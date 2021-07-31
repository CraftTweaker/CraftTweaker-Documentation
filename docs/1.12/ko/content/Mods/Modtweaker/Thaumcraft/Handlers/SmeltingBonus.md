# Smelting bonus

This package allows you to add and remove items to/from the Smelting bonus list.  
The Smelting Bonus list is queried whenever an infernal furnace cooks an item.

## 패키지 임포트하기

You can [import](/AdvancedFunctions/Import/) the package and its methods to facilitate the retrival of the methods.

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## Adding items

Notice: Input needs to be either an IItemStack or an IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient input, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Removing items

Notice: Input needs to be either an IItemStack or an IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```