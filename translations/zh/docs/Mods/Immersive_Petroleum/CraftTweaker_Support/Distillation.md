# Distillation

## addRecipe

The Distillation "addRecipe" method consists of:

| Type          | Data Type                                            |
| ------------- | ---------------------------------------------------- |
| Output        | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) Array[] |
| Output        | [ItemStack](/Vanilla/Items/IItemStack/) Array[]      |
| Input         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)         |
| Flux/t        | Integer                                              |
| Time in Ticks | Integer                                              |
| Chance        | Float Array []                                       |

### Preface:

Each ItemStack Entry is linked to the corresponding "Chance" array entry.

Example:

    [<minecraft:diamond>, <minecraft:leather> * 2]
    [1, 1]
    

The Chance "Float" value should be between 0 and 1. Since it converts it from a float value to a percentage value between 0% and 100% I.E:

    0.5     = 50%
    0.22374 = 22.374%
    1       = 100%
    

While you can submit a float higher than 1, it'll never yield a value over 100%

### Code Example:

```JAVA
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```