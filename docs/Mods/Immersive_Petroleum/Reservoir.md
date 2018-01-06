#Reservoir

##registerReservoir
|Type              |Data Type       |
|------------------|----------------|
|Name Identifier   |String          |
|Fluid             |FluidStack      |
|Minimum Size      |Integer         |
|Maximum Size      |Integer         |
|Replenish Rate    |Integer         |
|Weight            |Integer         |


###Code Example:
```JAVA
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```