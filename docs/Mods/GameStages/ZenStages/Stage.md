# Stage
Stage is the class you are given when you create a new "Stage" the class contains all the main method you need to stage an entry to that _Stage_. It's as simple as that! Once you have added all the entries you need. Don't forget to build the stage!

## Importing the package
`import mods.zenstages.Stage;`

## What to do with it

### ZenGetters and parameterless ZenMethods
| ZenGetter              | What does it do             | Return Type                                                                                                                        |
|------------------------|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| stage                  | Returns the stage name      | string                                                                                                                             |

### Staging Methods
**Note: All these methods will only work with the Stage class given when you create a Stage using [ZenStager](/Mods/GameStages/ZenStages/ZenStager/) so save these to a static so you can reference from other classes if need be.**

Check to see if a [Custom Type](/Mods/GameStages/ZenStages/CustomType/) has been Staged to this Stage.
```java
// isCustomStaged(String slug, String value);
// isCustomStaged(String slug, String[] values);
// isCustomStaged(String slug, int value);
// isCustomStaged(String slug, int[] values);
// isCustomStaged(String slug, IIngredient value);
// isCustomStaged(String slug, IIngredient[] values);
TestStage.isCustomStaged("blockBreak", <minecraft:stone>);
TestStage.isCustomStaged("container", "com.test");
```

Add an Ingredient to a stage. Defaulted to true the optional parameter to stage the recipe for said Ingredient.
```java
// addIngredient(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
// addIngredients(IIngredient[] ingredients, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredient(<minecraft:stick>);
TestStage.addIngredient(<ore:wool>);
TestStage.addIngredients([<minecraft:boat>, <minecraft:string>], false);
```

Add an Ingredient Override. This is used when you're Staging an entire mod via the ModId but you need to re-stage some items from the mod to another [Stage](/Mods/GameStages/ZenStages/Stage/), so this allows you to re-stage items.
```java
// addIngredientOverride(IIngredient ingredient, @Optional(valueBoolean = true) boolean recipeStage);
TestStage.addIngredientOverride(<myawesomemod:generator>, true);
```

Add a ModId to a stage. This will stage all the items found which are registered by the modId provided to the Stage. You can also provide an array of IIngredients which the provided items won't be staged.
```java
// addModId(String modId);
// addModId(String[] modIds);
// addModId(String modId, IIngredient[] ignoreStaging);
TestStage.addModId("bloodmagic");
TestStage.addModId("bloodmagic", [<bloodmagic:someitem>]);
```

Add an ILiquidStack to a stage.
```java
// addLiquid(ILiquidStack liquidStack);
// addLiquids(ILiquidStack[] liquidStacks);
TestStage.addLiquid(<liquid:water>);
TestStage.addLiquids([<minecraft:water>, <minecraft:lava>]);
```

Add a dimension to a stage. Requires [DimStages](/Mods/GameStages/DimensionStages/DimensionStages/) to be installed.
```java
// addDimension(int dimId);
TestStage.addDimension(-1);
```

Add a recipe name to a stage. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// addRecipeName(string recipeName);
TestStage.addRecipeName("minecraft:boat");
```

Add a recipe name to a stage. Requires [RecipeStages](/Mods/GameStages/RecipeStages/RecipeStages/) to be installed.
```java
// addRecipeName(string recipeName);
TestStage.addRecipeRegex("crafttweaker:test_.*");
```

Add a mob to a stage. Requires [MobStages](/Mods/GameStages/MobStages/MobStages/) to be installed.
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

Add a TiC material name to a stage. Requires [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) to be installed.
```java
// addTiCMaterial(string materialName);
// addTiCMaterials(string materialNames);
TestStage.addTiCMaterial("iron");
TestStage.addTiCMaterials(["bronze", "iron"]);
```

Add a TiC modifier to a stage. Requires [TinkerStages](/Mods/GameStages/TinkerStages/TinkerStages/) to be installed.
```java
// addTiCModifier(string modifierName);
TestStage.addTiCModifier("mending_moss");
```

Add a IE Multiblock to a stage. Requires [Multi Block Stages](https://github.com/The-Acronym-Coders/MultiBlock-Stages/) to be installed.
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
