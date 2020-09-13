# Distillation

## addRecipe

The Distillation "addRecipe" method consists of:

|Type          |Data Type                                           |
|:------------:|----------------------------------------------------|
|Name          |String                                              |
|Output        |[Fluidstack](/Vanilla/Liquids/IFluidStack/) Array[]|
|Output        |[ItemStack](/Vanilla/Items/IItemStack/) Array[]     |
|Input         |String "Fluid Tag, Amount" or "Fluid Tag"           |
|Chance        |Float Array[]                                       |
|Flux/t        |Integer                                             |
|Time in Ticks |Integer                                             |

### Preface:
Each ItemStack Entry is linked to the corresponding "Chance" array entry.

Example:
```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2],
[1, 1]
```

The Chance "Float" value should be between 0 and 1.
Since it converts it from a float value to a percentage value between 0% and 100%
I.E:
```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

While you can submit a float higher than 1, it'll never yield a value over 100%

### Code Example:
```zenscript
// mods.immersivepetroleum.DistillationTower.addRecipe(String name, IFluidStack[] fluidOutputs, String fluidInputTag, IItemStack[] itemOutputs, float[] chance, int energy, int time);

mods.immersivepetroleum.DistillationTower.addRecipe("example_recipe", [<fluid:lava> * 5, <fluid:gasoline> * 5], "forge:water", [<minecraft:diamond>, <minecraft:leather> * 2], [1, 1], 5, 5);
```

## remove

The Distillation "remove" method consists of:

|Type              |Data Type|
|------------------|---------|
|Recipe Name       |String   |

### Code Example:
```zenscript
// mods.immersivepetroleum.DistillationTower.remove(String name);

mods.immersivepetroleum.DistillationTower.remove("example_recipe");
```

## removeAll

### Code Example:
```zenscript
// mods.immersivepetroleum.DistillationTower.removeAll();

mods.immersivepetroleum.DistillationTower.removeAll();
```
