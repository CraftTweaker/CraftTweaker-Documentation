# Raffinerie

## Paket

`mods.thermalexpansion.Refinery`

## Adding a Recipe

`Refinery.addRecipe(output, outputItem, input, energy);`

- `Ausgabe` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Rfinery;

// Fügt ein Rezept hinzu, das 1 mB Lava und einen Diamanten (bei einer 100%igen Chance) pro 1mB Wasser
Raffinerie ausgibt. ddRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Fügt ein Rezept hinzu, das 5mB Lava und einen Diamanten (bei einer 1% Chance) pro 100mB Wasser ausgibt
Raffinerie. ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Hinzufügen eines Trank Rezepts

Fügt ein Rezept hinzu, das bei der Alchemie-Retort-Augmentation verwendet werden soll

`Refinery.addRecipePotion(Ausgabe, Eingabe, Energie);`

- `Ausgabe` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## Removing a Recipe

`Refinery.removeRecipe(Eingabe);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Rfinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Entfernen eines Trank Rezepts

`Refinery.removeRecipePotion(Eingabe);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Raffery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```