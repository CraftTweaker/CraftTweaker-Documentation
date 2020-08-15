# Factorizer

Menedżer Factorizer pozwala na dodawanie przepisów do faktora.

## Importuj pakiet

Aby skrócić połączenia metodą, możesz [zaimportować](/AdvancedFunctions/Import/) pakiet taki jak tak:

```zenscript
importuj mods.thermalexpansion.Factorizer,
```

## Dodaj przepisy

Możesz dodać jednokierunkowe podzielenie/łączenie przepisów lub dwustronne powiązania.

```zenscript
//mods.thermalexpansion.Factorizer.addRecipeSplit(IItemStack in, IItemStack out);
mods.thermalexpansion.Factorizer.addRecipeSplit(<minecraft:dirt>, <minecraft:grass> * 5);

//mods.thermalexpansion.Factorizer.addRecipeCombine(IItemStack in, IItemStack out);
mods. hermalexpansion.Factorizer.addRecipeCombine(<minecraft:grass> * 5, <minecraft:dirt>);

//mods.thermalexpansion.Factorizer.addRecipeBoth(IItemStack łącznie, IItemStack);
mods.thermalexpansion.Factorizer.addRecipeBoth(<minecraft:trapped_chest>, <minecraft:chest> * 13);
```

## Usuń przepisy

Oczywiście możesz również usunąć przepisy.  
Jeśli chcesz usunąć dwustronne powiązanie, będziesz jednak potrzebował dwóch połączeń.

```zenscript
//mods.thermalexpansion.Factorizer.removeRecipeSplit(IItemStack);
mods.thermalexpansion.Factorizer.removeRecipeSplit(<minecraft:iron_block>);

//mods.thermalexpansion.Factorizer.removeRecipeCombine(IItemStack);
mods.thermalexpansion.Factorizer.removeRecipeCombine(<minecraft:iron_ingot> * 9);
```