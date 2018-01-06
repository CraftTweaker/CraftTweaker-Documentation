# Distillation

##addRecipe

The Distillation "addRecipe" method consists of:
|Type              |Data Type         |
|------------------|------------------|
|Output            |FluidStack Array[]|
|Output            |ItemStack Array[] |
|Input             |FluidStack        |
|Cost/t            |Integer           |
|Time in Ticks     |Integer           |
|Chance            |Float Array []    |


###Preface:
Each ItemStack Entry is Linked to the corresponding "Chance" array entry.

Example:
```JAVA
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

The Chance "Float" value should be between 0 and 1.
Since it converts it from a float value to a procentage value between 0% and 100%
Ie:
```
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

While you can submit a float higher than 1.
It'll never yield a value over 100%

###Code Example:
```JAVA
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```