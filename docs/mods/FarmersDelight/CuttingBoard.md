::requiredMod[Farmer's Delight]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/farmers-delight}

# Farmer's Delight Cutting Board

The Cutting Board is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

##### Recipes with Tool Types

The following script will add two Cutting Board recipes, the recipes will do the following:
1) When a Diamond is placed on a Cutting Board, it can be cut with any pickaxe to cut it into a Coal Block and a piece of Coal.
2) When a Coal Block is placed on a Cutting Board, it can be cut with any axe to cut it into a Diamond, giving off the axe stripping sound.

```zenscript
// <recipetype:farmersdelight:cutting>.addRecipe(String name, IIngredient input, IItemStack[] results, String toolType, @OptionalString String sound);

<recipetype:farmersdelight:cutting>.addRecipe("test_cutting_tool_type", <item:minecraft:diamond>, [<item:minecraft:coal_block>, <item:minecraft:coal>], "pickaxe");
<recipetype:farmersdelight:cutting>.addRecipe("test_cutting_tool_type_sound", <item:minecraft:coal_block>, [<item:minecraft:diamond>], "axe", "minecraft:item.axe.strip");
```

##### Recipes with a Tool Ingredient

The following script will add two Cutting Board recipes, the recipes will do the following:
1) When a Dirt block is placed on a Cutting Board, it can be cut with a Diamond Sword into a Diamond.
2) When a Gravel block is placed on a Cutting Board, it can be cut with a String into a flint, giving off the gravel breaking sound.

```zenscript
// <recipetype:farmersdelight:cutting>.addRecipe(String name, IIngredient input, IItemStack[] results, IIngredient tool, @OptionalString String sound);

<recipetype:farmersdelight:cutting>.addRecipe("test_cutting_ingredient", <item:minecraft:dirt>, [<item:minecraft:diamond>], <item:minecraft:diamond_sword>);
<recipetype:farmersdelight:cutting>.addRecipe("test_cutting_ingredient_sound", <item:minecraft:gravel>, [<item:minecraft:flint>], <item:minecraft:string>, "minecraft:block.gravel.break");
```

#### Remove Recipes

##### Single Item Outputs

The following script will remove all Cutting Board recipes that output Crimson Planks:

```zenscript
// <recipetype:farmersdelight:cutting>.removeRecipe(IItemStack output);

<recipetype:farmersdelight:cutting>.removeRecipe(<item:minecraft:crimson_planks>);
```

##### Multiple Item Outputs

The following script will remove all Cutting Board recipes that output Cooked Salmon Slices and Bone Meal:

```zenscript
// <recipetype:farmersdelight:cutting>.removeRecipe(IItemStack[] outputs);

<recipetype:farmersdelight:cutting>.removeRecipe([<item:farmersdelight:cooked_salmon_slice> * 2, <item:minecraft:bone_meal>]);
```
