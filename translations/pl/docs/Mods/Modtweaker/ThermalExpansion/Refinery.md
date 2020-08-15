# Rafineria

## Pakiet

`Mods.thermalexpansion.Rafineria`

## Dodawanie przepisu

`Refinery.addRecipe(output, outputItem, input, energy);`

- `wyjścia` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energia` &lt;int> Całkowity koszt energii

```zenscript
importuj mods.thermalexpansion.Refinery;

// Dodaje recepturę, która wyniesie 1 mB lawy i diamentu (przy 100% szansy) na 1 mB wody
Rafineria. ddReceptura(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Dodaje przepis na wyjście 5 mB lawy i diamentów (przy 1% szansy) na 100 mB wody
Rafinera. ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Dodawanie przepisu na miksturę

Dodaje przepis do użycia z Alchemicznym Ulepszeniem

`Refinery.addRecipePotion(wyjście, wejście, energia);`

- `wyjścia` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energia` &lt;int> Całkowity koszt energii

```zenscript
importuj mods.thermalexpansion.Rafinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## Usuwanie przepisu

`Refinery.removeRecipe(wejście);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
importuj mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Usuwanie przepisu na miksturę

`Refinery.removeRecipePotion(wejście);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```