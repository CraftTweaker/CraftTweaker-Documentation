# Altar Crafting
You can add and remove crafting recipes from the AS Altar.


## Calling
You can call the AltarRecipe package using `mods.astralsorcery.Altar`.  


## Remove Altar Recipes


This function removes the recipe with the given resource location.  
You can get those locations by hovering over the recipe output in JEI or the Astral tome while the F3 screen is active.  
Prints a warning if the recipe does not exist.
```
//mods.astralsorcery.Altar.removeAltarRecipe(string recipeLocation);
mods.astralsorcery.Altar.removeAltarRecipe("astralsorcery:shaped/internal/altar/lightwell");
```



<details><summary>Pre v1.10 handler</summary>
This function removes the first recipe it finds that returns provided [IItemStack](/Vanilla/Items/IItemStack/) `output` and uses the provided altar level.  
If there are multiple recipes that return the provided output, you need to call this method multiple times!

|Altar Level | Level Name             |
|------------|------------------------|
|0           |Luminous Crafting Table |
|1           |Starlight Crafting Altar|
|2           |Celestial Altar         |

```JAVA
//mods.astralsorcery.Altar.removeAltarRecipe(IItemStack output, int altarLevel);
mods.astralsorcery.Altar.removeAltarRecipe(<astralsorcery:blockblackmarble>, 0);
```
</details>

## Add Altar Recipes

Since v1.10 all recipes require a resource location as first parameter.  
Unlike vanilla recipe names, they are not optional and you will encounter errors if you do not provide it.
If you want to override an existing recipe, you can just add a new recipe with the same location.  
You can get those locations by hovering over the recipe output in JEI or the Astral tome while the F3 screen is active.  


All recipe addition methods require these parameters:  
string `recipeLocation`,  
[IItemStack](/Vanilla/Items/IItemStack/) `output`,  
int `starlightRequired`,  
int `craftingTickTime`,  
[IIngredient](/Vanilla/Variable_Types/IIngredient/)[] `inputs`

The `inputs` parameter is, unlike in Crafting Table recipes only a 1 Dimensional Array.  
You can use [IItemStacks](/Vanilla/Items/IItemStack/), [ILiquidStacks](/Vanilla/Liquids/ILiquidStack/), [IOreDictEntries](/Vanilla/OreDict/IOreDictEntry/) or `null` as the array's members

These recipes cannot be shapeless!


### Discovery
`inputs` length *has to be* 9

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar1.png)

```JAVA
mods.astralsorcery.Altar.addDiscoveryAltarRecipe("mypackname:shaped/internal/altar/dirtfromstuff", <minecraft:dirt>, 200, 200, [
			<minecraft:grass>, null, <ore:treeLeaves>,
			null, <minecraft:grass>, null,
			<liquid:astralsorcery.liquidstarlight>, null, <ore:treeLeaves>]);
```


### Attunement

Adds a recipe to the Starlight Crafting Table (T2)

`inputs` length *has to be* 13

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar2.png)

```JAVA
mods.astralsorcery.Altar.addAttunmentAltarRecipe(mypackname:shaped/internal/altar/iguessmarble", <minecraft:dirt>, 500, 300, [
			null, null, null,
			<ore:treeLeaves>, <astralsorcery:blockmarble:2>, <ore:treeLeaves>,
			null, <liquid:astralsorcery.liquidstarlight>, null,
			<ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>, <ore:blockMarble>]);
```


### Constellation

Adds a recipe to the Celestial Altar (T3)

`inputs` length *has to be* 21

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar3.png)

```JAVA
mods.astralsorcery.Altar.addConstellationAltarRecipe("mypackname:shaped/internal/altar/thisisveryexpensive", <astralsorcery:itemcraftingcomponent:2>, 2000, 10, [
			<ore:blockMarble>, <astralsorcery:blocklens>, <ore:blockMarble>,
			<ore:blockMarble>, <astralsorcery:itemcraftingcomponent:2>, <ore:blockMarble>,
			<ore:blockMarble>, <minecraft:nether_star>, <ore:blockMarble>,
			null, null, <liquid:astralsorcery.liquidstarlight>, <liquid:astralsorcery.liquidstarlight>,
			<ore:blockMarble>, <ore:blockMarble>,
			<minecraft:nether_star>, <minecraft:nether_star>,
			<minecraft:nether_star>, <minecraft:nether_star>,
			<ore:blockMarble>, <ore:blockMarble>]);
```

### Trait

Adds a recipe to the Trait Altar (T4)

`Constellation` the Constellation as an unlocalized String. This is an optional parameter.

`inputs` length *has to be* 25 or higher. Items at index 25 or higher will be considered as "outer items" that need to be put on relays around the altar.

`inputs` Order:  
![Inputs Order](/Mods/Astral_Sorcery/Assets/guialtar4.png)

```JAVA
//mods.astralsorcery.Altar.addTraitAltarRecipe(string recipeLocation, IItemStack output, int starlight, int craftTickTime, IIngredient[] inputs, @optional String iRequiredConstellationFocusName);

mods.astralsorcery.Altar.addTraitAltarRecipe("mypackname:shaped/internal/altar/seemsalotforjusttnt", <minecraft:tnt>, 4500, 100, [
	<liquid:lava>, <liquid:lava>, <liquid:lava>,<liquid:lava>, <minecraft:gunpowder>, 
	<liquid:lava>, <liquid:lava>, <liquid:lava>, <liquid:lava>,null, 
	null, null, null,<ore:blockMarble>, <ore:blockMarble>,
	<astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>, <astralsorcery:itemusabledust>,<ore:blockMarble>, 
	<ore:blockMarble>,<minecraft:redstone>, <minecraft:redstone>,<minecraft:redstone>, <minecraft:redstone>,
	//Outer Items, indices 25+
	<minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>, <minecraft:sand>
],
"astralsorcery.constellation.evorsio");
```