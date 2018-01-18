# Mortars

## Importing The Package
You can call the Mortar package using `mods.advancedmortars.Mortar`.

## Add Recipe

|Type          |Data Type                                		 |Examples:                             |
|--------------|-------------------------------------------------|--------------------------------------|
|Mortar Types  |String[] 		   								 |["wooden", "stone", "iron", "diamond"]|
|Output        |[IItemstack](/Vanilla/Items/IItemStack)			 |<minecraft:diamond>					|
|Duration      |Integer											 |2000									|
|Inputs        |[IIngredient](/Vanilla/Variable_Types/IIngredient|[<ore:logWood>, <ore:plankWood>]		|

### Example:
```
///// "Crushing"
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:15> * 4, 8, [<minecraft:bone>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <plants2:generic:4> * 2, 8, [<botania:flower>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:10> * 2, 8, [<botania:flower:5>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:5> * 2, 8, [<botania:flower:10>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:14> * 2, 8, [<botania:flower:1>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:9> * 2, 8, [<botania:flower:6>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:7> * 2, 8, [<botania:flower:8>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:8> * 2, 8, [<botania:flower:7>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:6> * 2, 8, [<botania:flower:9>]);

///// "Mixing"
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:7> * 2, 4, [<ore:dyeBlack>, <ore:dyeWhite>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:8> * 2, 4, [<ore:dyeBlack>, <ore:dyeWhite> * 2]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:12> * 2, 4, [<ore:dyeBlue>, <ore:dyeWhite>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:5> * 2, 4, [<ore:dyeRed>, <ore:dyeBlue>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:9> * 2, 4, [<ore:dyeRed>, <ore:dyeWhite>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:13> * 2, 4, [<ore:dyeRed>, <ore:dyeYellow>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:6> * 2, 4, [<ore:dyeGreen>, <ore:dyeBlue>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:10> * 2, 4, [<ore:dyeGreen>, <ore:dyeWhite>]);
Mortar.addRecipe(["wood", "stone", "iron", "diamond"], <minecraft:dye:13> * 2, 4, [<ore:dyePurple>, <ore:dyePink>]);
```