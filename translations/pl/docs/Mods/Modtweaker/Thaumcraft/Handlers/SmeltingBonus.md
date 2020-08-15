# Premia do wytapiania

Ten pakiet pozwala na dodawanie i usuwanie produktów do/z listy bonusów.  
Lista bonusów na wytapianie jest sprawdzana za każdym razem, gdy piec domowy gotuje przedmiot.

## Importowanie pakietu

Możesz [zaimportować](/AdvancedFunctions/Import/) paczkę i jej metody, aby ułatwić ponowne triwalowanie metod.

```zenscript
import mods.thaumcraft.SmeltingBonus;
```

## Dodawanie elementów

Uwaga: Wejście musi być IItemStack lub IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.addSmeltingBonus(IIngredient inputt, WeightedItemStack stack)
mods.thaumcraft.SmeltingBonus.addSmeltingBonus(<minecraft:cobblestone>, <minecraft:button> % 20);
```

## Usuwanie elementów

Uwaga: Wejście musi być IItemStack lub IOreDictEntry

```zenscript
//mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(IIngredient input, IItemStack stack);
mods.thaumcraft.SmeltingBonus.removeSmeltingBonus(<minecraft:gold_ore>, <minecraft:gold_nugget>);
```