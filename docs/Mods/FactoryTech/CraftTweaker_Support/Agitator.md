# Agitator
The Agitator package can be used to add recipes to Factory Tech's Fluid Agitator.

## Calling the Package
You can call the Agitator package using `mods.factorytech.Agitator`

## Add Recipe

|Required  |Type              |Data Type                                           |
|----------|------------------|----------------------------------------------------|
|Required  |Input Fluid 1     |[ILiquidStack](/Vanilla/Variable_Types/ILiquidStack)|
|Optional  |Input Fluid 2     |[ILiquidStack](/Vanilla/Variable_Types/ILiquidStack)|
|Optional  |Input Item        |[IIngredient](/Vanilla/Variable_Types/IIngredient)  |
|Optional  |Output Fluid      |[ILiquidStack](/Vanilla/Variable_Types/ILiquidStack)|
|Optional  |Output Item       |[IItemstack](/Vanilla/Items/IItemStack)             |



### Example
```JAVA
//Example:
mods.factorytech.Agitator.addRecipe(IIngredient fluid1, @Optional IIngredient fluid2, @Optional IIngredient itemIn, @Optional ILiquidStack fluidOut, @Optional IItemStack itemOut);
mods.factorytech.Agitator.addRecipe(<factorytech:glowstone> * 1000, <factorytech:h2so4> * 1000, <minecraft:quartz> * 4, <factorytech:energite> * 500, <minecraft:diamond>);
```



## Remove Recipe

|Type              |Data Type                                          |
|------------------|---------------------------------------------------|
|Fluid Output      |[IItemstack](/Vanilla/Items/ILiquidStack)          |
|Item  Output      |[IItemstack](/Vanilla/Items/IItemStack)            |


### Example
```JAVA
//Example:
mods.factorytech.Agitator.removeRecipe(IFluidStack fs, IItemStack is);
mods.factorytech.Agitator.removeRecipe(<factorytech:energite> * 500, <minecraft:diamond>);
```
