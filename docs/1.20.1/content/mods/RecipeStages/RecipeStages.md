::requiredMod[Recipe Stages]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/recipe-stages}

# Recipe Stages
This mod is an addon for the [GameStages API](https://minecraft.curseforge.com/projects/game-stages). Recipe Stages allows for Crafting Table Recipes to be restricted by a custom progression system. For more info, check out the mod page [here](https://minecraft.curseforge.com/projects/recipe-stages)

## Methods

Adds a shaped recipe that is locked behind a stage.
```zenscript
// mods.recipestages.Recipes.addShaped(String stage, String recipeName, IItemStack output, IIngredient[][] ingredients, @Optional RecipeFunctionMatrix recipeFunction);

mods.recipestages.Recipes.addShaped("one", "name_one", <item:minecraft:iron_leggings>,[[<item:minecraft:gold_ingot>, <item:minecraft:gold_ingot>, <item:minecraft:iron_ingot>],[<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>],[<item:minecraft:iron_ingot>, <item:minecraft:air>, <item:minecraft:iron_ingot>]]);
```

Adds a mirrored shaped recipe that is locked behind a stage.
```zenscript
// mods.recipestages.Recipes.addShapedMirrored(String stage, String recipeName, mirrorAxis as MirrorAxis, IItemStack output, IIngredient[][] ingredients, @Optional RecipeFunctionMatrix recipeFunction);

mods.recipestages.Recipes.addShapedMirrored("two", "name_two", MirrorAxis.ALL, <item:minecraft:furnace>, [[<item:minecraft:diamond>, <item:minecraft:diamond>,<item:minecraft:diamond>], [<item:minecraft:diamond>, <item:minecraft:air>, <item:minecraft:diamond>], [<item:minecraft:diamond>,<item:minecraft:diamond>,<item:minecraft:diamond>]], null);
```

Adds a shapeless recipe that is locked behind a stage.
```zenscript
// mods.recipestages.Recipes.addShapeless(String stage, String recipeName, IItemStack output, IIngredient[] ingredients, @Optional RecipeFunctionArray recipeFunction);

mods.recipestages.Recipes.addShapeless("three", "name_three", <item:minecraft:clay> * 8, [<item:minecraft:water_bucket>, <item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>,<item:minecraft:clay_ball>], null);
```

Sets the stage of a non staged recipe.
```zenscript
//mods.recipestages.Recipes.setRecipeStage(String name, IItemStack output);
//mods.recipestages.Recipes.setRecipeStage(String name, ResourceLocation name);

mods.recipestages.Recipes.setRecipeStage("hoe", <item:minecraft:stone_hoe>);
mods.recipestages.Recipes.setRecipeStage("boat", <resource:minecraft:boat>);
```

Sets the stage of all recipes that make items from a certain mod.  
More specifically, stages all recipes that have the given modid as resource domain.  
```zenscript
//mods.recipestages.Recipes.setRecipeStageByMod(String name, String modid);
mods.recipestages.Recipes.setRecipeStageByMod("four", "minecraft");
```

Removes the stage of an already staged recipe.
This is useful if you combine it with `setRecipeStageByMod` and want to have some recipes of the mod be unstaged.
```zenscript
//mods.recipestages.Recipes.clearRecipeStage(IItemStack output);
//mods.recipestages.Recipes.clearRecipeStage(ResourceLocation name);

mods.recipestages.Recipes.clearRecipeStage(<item:minecraft:stone_hoe>);
mods.recipestages.Recipes.clearRecipeStage(<resource:minecraft:boat>);
```

Sets whether the "Stage: <stage>" text should be shown in JEI when looking at recipes.
By default, the label will be shown.
```zenscript
//mods.recipestages.Recipes.showJEILabel(boolean showLabel);

mods.recipestages.Recipes.showJEILabel(false);
```


## Packages and Containers

Sometimes you may find that you can't craft a recipe in a crafting table added by mods, and example being the Refined Storage Crafting Grid, or the Applied Energistics Crafting Terminal, the solution to this is to set the stages on these Containers or the Packages

Containers are the actual Java package and class name of what is trying to do the craft, an example is:
```
com.refinedmods.refinedstorage.apiimpl.network.node.GridNetworkNode$1
```
That is the Refined Storage Crafting Grid.

Packages are very similar to containers, except they can cover a range of Containers, for example, using the package:
```
appeng
```
would give a stage to *all* Applied Energistics Containers, so any machine in the mod would be able to craft recipes from a given stage.

To figure out what the Container or Package name is, you can use:
```zenscript
//mods.recipestages.Recipes.setPrintContainers(boolean printContainers);
mods.recipestages.Recipes.setPrintContainers(true);
```

When that is set to true, when you try and craft a recipe in a crafting table, it will print the Container name (and the Package name) to the `crafttweaker.log` file.

With that enabled, when you try and craft a recipe in the Refined Storage Crafting Grid, the following would be printed to the log:
```
Tried to craft a recipe in container: "com.refinedmods.refinedstorage.apiimpl.network.node.GridNetworkNode$1"
```

Now that you have that, you have the Container name of the Crafting Grid, and the Package name of Refined Storage.

The way that Package names work is they see if a given Container name starts with the Package name that you specified, so setting the stage of `com.refinedmods` to "one", would allow Refined Storage Containers to craft recipes from stage "one".
However, that is a very loose Package name, as `com.refinedmods` is also used in Refined Storage Addons, which you may want to give a different stage to, so when using Package names, try and be specific, so instead of `com.refinedmods`, you should use `com.refinedmods.refinedstorage`.

Gives a Container a stage
```zenscript
//mods.recipestages.Recipes.setContainerStages(String containerPath, String... stages);
mods.recipestages.Recipes.setContainerStages("primal_tech.inventory.ContainerWorkStump", "one");
mods.recipestages.Recipes.setContainerStages("com.refinedmods.refinedstorage.apiimpl.network.node.GridNetworkNode$1", ["one", "two"]);
```

Gives a Package a stage
```zenscript
//mods.recipestages.Recipes.setPackageStages(String packageName, String... stages);
mods.recipestages.Recipes.setPackageStages("appeng", "one");
mods.recipestages.Recipes.setPackageStages("com.refinedmods.refinedstorage", ["two", "three"]);
```