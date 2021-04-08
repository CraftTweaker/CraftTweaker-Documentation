::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Blueprint

The Blueprint is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Categories

Blueprints use different categories to determine what type of Blueprint is needed, you can use:

```
/ct dump ieBlueprintCategories
```

to print all the known categories to the CraftTweaker log file.

With Immersive Engineering alone, the following is printed to the log:

```
- bannerpatterns
- bullet
- components
- electrode
- molds
- specialBullet
```

## Methods

#### Add Recipe

The following script will add a "bullet" Blueprint recipe that will use a piece of Redstone and any item from the Forge Gems tag and output an Iron Sword.

```zenscript
// <recipetype:immersiveengineering:blueprint>.addRecipe(name as string, blueprintCategory as string, inputs as IIngredient[], output as IItemStack)

<recipetype:immersiveengineering:blueprint>.addRecipe("test_gaps", "bullet", [<item:minecraft:redstone>, <tag:items:forge:gems>], <item:minecraft:iron_sword>);
```

#### Remove Recipes

The follow script will remove all Blueprint recipes that output a Casull Cartridge.

```zenscript
// <recipetype:immersiveengineering:blueprint>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blueprint>.removeRecipe(<item:immersiveengineering:casull>);
```