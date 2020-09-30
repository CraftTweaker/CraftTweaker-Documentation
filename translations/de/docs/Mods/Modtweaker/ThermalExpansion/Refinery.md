# Refinery

## Package

`mods.thermalexpansion.Refinery`

## Adding a Recipe

`Refinery.addRecipe(output, outputItem, input, energy);`

- `output` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `outputItem` <[WeightedItemStack](/Vanilla/Items/WeightedItemStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

// Adds a recipe that outputs 1mB of lava and a diamond (at a 100% chance) per 1mB of water
Refinery.addRecipe(<liquid:lava>, <minecraft:diamond>, <liquid:water>, 50);

// Adds a recipe that outputs 5mB of lava and a diamond (at a 1% chance) per 100mB of water
Refinery.addRecipe(<liquid:lava> * 5, <minecraft:diamond> % 1, <liquid:water> * 100, 50);
```

### Adding a Potion Recipe

Adds a recipe to be used with the Alchemical Retort Augmentation

`Refinery.addRecipePotion(output, input, energy);`

- `output` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>
- `energy` &lt;int> The total energy cost

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.addRecipePotion(<liquid:potion>.withTag({Potion: "minecraft:mundane"}) * 500, <liquid:potion>.withTag({Potion: "cofhcore:leaping4"}) * 100, 100);
```

## Removing a Recipe

`Refinery.removeRecipe(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipe(<liquid:resin>);
```

### Removing a Potion Recipe

`Refinery.removeRecipePotion(input);`

- `input` <[ILiquidStack](/Vanilla/Liquids/ILiquidStack)>

```zenscript
import mods.thermalexpansion.Refinery;

Refinery.removeRecipePotion(<liquid:potion_lingering>.withTag({Potion: "cofhcore:healing3"}));
```