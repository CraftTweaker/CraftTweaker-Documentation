# Create Splashing

### This support is added by [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker), you need [CreateTweaker](https://www.curseforge.com/minecraft/mc-mods/createtweaker) for this to work.

The Splashing mechanic is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script will add a recipe that will output a Diamond and an Apple 45% of the time when a piece of Dirt is Splashed.

```zenscript
// <recipetype:create:splashing>.addRecipe(String name, MCWeightedItemStack[] output, IIngredient input)
<recipetype:create:splashing>.addRecipe("splashing_test", [<item:minecraft:diamond>, <item:minecraft:apple> % 45], <item:minecraft:dirt>);
```

#### Remove Recipes

The follow script will remove all Splashing recipes that output Yellow Concrete.

```zenscript
// <recipetype:create:splashing>.removeRecipe(IItemStack output);
<recipetype:create:splashing>.removeRecipe(<item:minecraft:yellow_concrete>);
```

