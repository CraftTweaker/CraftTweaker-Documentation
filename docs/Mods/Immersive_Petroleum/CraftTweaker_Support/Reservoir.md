# Reservoir

## registerReservoir

|Type              |Data Type                                  |
|------------------|-------------------------------------------|
|Name Identifier   |String                                     |
|Fluid             |[Fluidstack](/Vanilla/Liquids/ILiquidStack/)|
|Minimum Size      |Integer                                    |
|Maximum Size      |Integer                                    |
|Replenish Rate    |Integer                                    |
|Weight            |Integer                                    |

### Weight
Weight is the Weighted Chance of a chunk containing that specific fluid reservoir.
The weight is counted as in X in Total.

So if you have 5 Reservoir values at:
5, 5, 6, 8, 10

Then each respective entry will have a weighted chance of:
```
5  in 34
5  in 34
6  in 34
8  in 34
10 in 34
```


### Code Example:
```JAVA
mods.immersivepetroleum.Reservoir.registerReservoir(String name, ILiquidStack fluid, int minSize, int maxSize, int replenishRate, int weight);
mods.immersivepetroleum.Reservoir.registerReservoir("WaterTest", <liquid:water>, 48000, 64000, 200, 5);
```
