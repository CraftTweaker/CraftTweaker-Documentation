# Stage
Stage is the class you are given when you create a new "Stage" the class contains all the main method you need to stage an entry to that _Stage_. It's as simple as that! Once you have added all the entries you need. Don't forget to build the stage!

## Importing the package
`import mods.zenstages.Stage;`

## What to do with it

### ZenGetters and parameterless ZenMethods
| ZenGetter              | What does it do             | Return Type                                                                                                                        |
|------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| name                   | Returns the stage name      | string                                                                                                                             |
| getStagedIngredients() | Gets all staged Ingredients | Map<[IIngredient](/Vanilla/Variable_Types/IIngredient/), [StagedIngredient](/Mods/GameStages/ZenStages/Wrappers/StagedIngredient)> |
| getStagedOres()        | Gets all staged Ores        | Map<[IIngredient](/Vanilla/Variable_Types/IIngredient/), [StagedOre](/Mods/GameStages/ZenStages/Wrappers/StagedOre)>               |
| getStagedTypes()       | Gets all staged Types       | List<[StagedType](/Mods/GameStages/ZenStages/Wrappers/StagedType)>                                                                 |
| getStagedLiquids()     | Gets all staged Liquids     | List<[ILiquidStack](/Vanilla/Liquids/ILiquidStack/)>                                                                               |

### Staging Methods
**Note: All these methods will only work with the Stage class given when you create a Stage using [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) so save these to a static so you can reference from other classes if need be.**

Add an Ingredient to a stage. Defaulted to true the optional parameter to stage the recipe for said Ingredient.
```java
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Add an ILiquidStack to a stage.
```java
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Add an dimension to a stage. Requires [DimStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Add an recipe name to a stage. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Add an recipe name to a stage. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Add an mob to a stage. Requires [MobStages](/Mods/GameStages/MobStages/MobStages/) to be installed.
```java
// addMob(string mobName);
// addMobs(string[] mobNames);
// addMob(string mobName, int dimId);
// addMobs(string[] mobNames, int dimId);
TestStage.addMob("minecraft:skeleton");
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"]);
TestStage.addMob("minecraft:skeleton", 0);
TestStage.addMobs(["minecraft:skeleton", "minecraft:skeleton_horse"], 9);
```

Add an TiC material name to a stage. Requires [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) to be installed.
```java
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

Add an TiC modifier to a stage. Requires [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) to be installed.
```java
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Add an IE Multiblock to a stage. Requires [Multi Block Stages](https://github.com/The-Acronym-Coders/MultiBlock-Stages) to be installed.
```java
// addIEMultiBlock(string multiblock);
// addIEMultiBlocks(string multiblocks);
TestStage.addIEMultiBlock("IE:ArcFurnace");
TestStage.addIEMultiBlocks(["IE:Mixer", "IE:SheetmetalTank"]);
```

Add an Ore Replacment to a stage. Requires [OreStages](https://github.com/Darkhax-Minecraft/Ore-Stages/#crafttweaker-methods) to be installed.
```java
// addOreReplacement(IIngredient blockToHide, @Optional(valueBoolean = false) boolean isNonDefaulting);
// addOreReplacement(IIngredient blockToHide, IItemStack blockToShow, @Optional(valueBoolean = false) boolean isNonDefaulting);
TestStage.addOreReplacement(<minecraft:iron_bars:*>);
TestStage.addOreReplacement(<minecraft:iron_bars:*>, true);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>);
TestStage.addOreReplacement(<chisel:redstone>, <chisel:granite>, true);
```