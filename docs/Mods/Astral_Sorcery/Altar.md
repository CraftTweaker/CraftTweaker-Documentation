# Altar Crafting
You can add and remove crafting recipes from the AS Altar.


## Calling
You can call the AltarRecipe package using `mods.astralsorcery.Altar`.  


## Altar Levels
Some recipes require an altar level:

|Altar Level | Level Name             |
|------------|------------------------|
|0           |Luminous Crafting Table |
|1           |Starlight Crafting Altar|
|2           |Celestial Altar         |


## Remove Altar Recipes

This function removes the first recipe it finds that returns provided [IItemStack](/Vanilla/Items/IItemStack) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

```JAVA
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<minecraft:dirt>, 0);
```


## Add Altar Recipes

All Recipe addition Methods require these parameters:  
[IItemStack](/Vanilla/Items/IItemStack) `output`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngredient](/Vanilla/Variable_Types/IIngredient)[] `inputs`

The `inputs` parameter is, unlike in Crafting Table recipes only a 1Dimensional Array.  
You can use [IItemStacks](/Vanilla/Items/IItemStack), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack), [IOreDictEntries](/Vanilla/OreDict) or `null` as the array's members

These recipes cannot be shapeless!


### Discovery
`inputs` length *has to be* 9

`inputs` Order:
```
[ 0] [ 1] [ 2]  
[ 3] [ 4] [ 5]  
[ 6] [ 7] [ 8]  
```

```JAVA
mods.astralsorcery.Altar.addDiscoveryAltarRecipe(<minecraft:dirt>, 200, 200, [
			<minecraft:grass>, null, <ore:treeLeaves>,
			null, <minecraft:grass>, null,
			<liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```


### Attunement
`inputs` length *has to be* 13

`inputs` Order:
```
[ 9]                [10]  
     [ 0] [ 1] [ 2]  
     [ 3] [ 4] [ 5]  
     [ 6] [ 7] [ 8] 
[11]                [12]  
```

```JAVA
mods.astralsorcery.Altar.addAttunmentAltarRecipe(<minecraft:dirt>, 500, 300, [
			null, null, null,
			<ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
			null, <liquid:astralsorcery.liquidstarlight>, null,
			<ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```


### Constellation
`inputs` length *has to be* 21

`inputs` Order:
```
[ 9] [13]      [14] [10] 
[15] [ 0] [ 1] [ 2] [16] 
     [ 3] [ 4] [ 5] 
[17] [ 6] [ 7] [ 8] [18] 
[11] [19]      [20] [12] 
```

```JAVA
mods.astralsorcery.Altar.addConstellationAltarRecipe(<astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
			<ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
			<ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
			<ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
			null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
			<ore:blockMarble>, <ore:blockMarble>,
			<minecraft:nether_star>, <minecraft:nether_star>,
			<minecraft:nether_star>, <minecraft:nether_star>,
			<ore:blockMarble>, <ore:blockMarble>]);
```