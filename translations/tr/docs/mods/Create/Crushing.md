::requiredMod[Create]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/create requiredMod=CreateTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/createtweaker}

# Create Crushing

The Crushing mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output a Diamond 10% of the time when a piece of Dirt is crushed with a duration of 100.

```zenscript
// <recipetype:create:crushing>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input, @Optional(100) int duration)

<recipetype:create:crushing>.addRecipe("hopes_and_dreams", [<item:minecraft:diamond> % 10], <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Crushing recipes that output a Crushed Zinc Ore.

```zenscript
// <recipetype:create:crushing>.removeRecipe(IItemStack output)

<recipetype:create:crushing>.removeRecipe(<item:create:crushed_zinc_ore>);
```