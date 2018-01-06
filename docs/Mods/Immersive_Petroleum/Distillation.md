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


###Code Example:
```JAVA
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods.immersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```