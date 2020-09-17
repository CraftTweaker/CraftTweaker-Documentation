# Grindstone

Możesz użyć CrT do dodawania lub usuwania przepisów z sztynku AS.

## Dzwonienie

Możesz wywołać pakiet InfusionRecipe używając `mods.astralsorcery.Grindstone`.

## Usuwanie

Spowoduje to usunięcie pierwszego przepisu na szlifowanie który tworzy dostarczony [IItemStack](/Vanilla/Items/IItemStack/) `wyjściowy`.  
Jeśli istnieje wiele receptur, które zwracają podaną wartość, musisz wywołać tę metodę wielokrotnie!

```zenscript
//mods.astralsorcery.Grindstone.removeRecipe(wyjście IItemStack);
mods.astralsorcery.Grindstone.removeRecipe(<minecraft:redstone>);
```

## Dodanie

```zenscript
//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:stone>, <minecraft:gravel>);

//mods.astralsorcery.Grindstone.addRecipe(IItemStack input, IItemStack output, float doubleChance);
mods.astralsorcery.Grindstone.addRecipe(<minecraft:cobblestone>, <minecraft:gravel>, 0.5f);
```