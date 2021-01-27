::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Milling

The Milling mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond and an Apple 45% of the time when a piece of Dirt is Milled with a duration of 100.

```zenscript
// <recipetype:create:milling>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:milling>.addRecipe("milling_test", [<item:minecraft:diamond>, <item:minecraft:apple> % 45], <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Milling recipes that output Limesand.

```zenscript
// <recipetype:create:milling>.removeRecipe(IItemStack output)

<recipetype:create:milling>.removeRecipe(<item:create:limesand>);
```