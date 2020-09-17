# Raffineria

## Pacchetto

`mods.thermalexpansion.Refinery`

## Aggiungere una Ricetta

`Refinery.addRecipe(output, outputItem, input, energy);`

- `output` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energia` &lt;int> Il costo totale dell'energia

```zenscript
import mods.thermalexpansion.Refinery;

// Aggiunge una ricetta che produce 1mB di lava e un diamante (a una probabilità del 100%) per 1mB di acqua
Raffineria. ddRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Aggiunge una ricetta che produce 5mB di lava e un diamante (a una probabilità dell'1%) per 100mB di acqua
Raffineria. ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Aggiungere una ricetta pozione

Aggiunge una ricetta da usare con l'Aumento Ritorta Alchemica

`Refinery.addRecipePotion(output, input, energia);`

- `output` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energia` &lt;int> Il costo totale dell'energia

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Pozione: "cofhcore:leaping4"}) * 100, 100);
```

## Rimuovere una RIcetta

`Refinery.removeRecipe(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Rimozione di una ricetta pozione

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```