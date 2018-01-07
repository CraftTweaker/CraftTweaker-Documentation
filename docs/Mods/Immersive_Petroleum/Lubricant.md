#Lubricant Registration

##registerLubricant

|Type                   |Data Type                                      |
|-----------------------|-----------------------------------------------|
|Input                  |[Fluidstack](/Vanilla/Liquids/ILiquidStack)    |
|Usage/4tick            |Integer                                        |


###Code Example:
```JAVA
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```