# Czarna lista

Pakiet czarnej listy jest używany do dodawania/usuwania przepisów z/do czarnej listy topni.

## Dzwonienie

Możesz wywołać pakiet czarnej listy, używając `mods.tcomplement.Czarna lista`

## Dodanie czarnej listy

```zenscript
//mods.tcomplement.Blacklist.addRecipe(ILiquidStack output, IItemStack);
mods.tcomplement.Blacklist.addRecipe(<liquid:seared_stone>, <minecraft:stone>);
```

## Usuwanie wpisu z czarnej listy

```zenscript
//mods.tcomplement.Blacklist.removeRecipe(IItemStack);
mods.tcomplement.Blacklist.removeRecipe(<minecraft:cobblestone>);
```