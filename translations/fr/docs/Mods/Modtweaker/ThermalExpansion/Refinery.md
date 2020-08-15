# Raffinerie

## Paquet

`mods.thermalexpansion.Refinery`

## Ajout d'une recette

`Refinery.addRecipe(output, outputItem, input, energy);`

- `sortie` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

// Ajoute une recette qui donne 1mB de lave et un diamant (à une chance de 100%) par 1 mB d'eau
Refinery. ddRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Ajoute une recette qui donne 5mB de lave et un diamant (à une chance de 1%) pour 100mB d'eau
Refinerie. ddRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Ajout d'une recette de potion

Ajoute une recette à utiliser avec l'Augmentation de Retort Alchimique

`Refinery.addRecipePotion(sortie, entrée, énergie);`

- `sortie` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## Suppression d'une recette

`Refinery.removeRecipe(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery ;

Refinery.removeRecipe(<liquid:resin>);
```

### Recette de potion retirée

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```