::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# Immersive Engineering Blast Furnace

The Blast Furnace is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`. Along with the Blast Furnace is the Blast Furnace Fuel, which is also a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script will add a recipe that will output Charcoal, and a piece of String (as Slag), after 1000 ticks when any Item from the Wool Tag is given to the Blast Furnace.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.addRecipe(string recipePath, IIngredient ingredient, int time, IItemStack output, @Optional(<item:minecraft:air>) IItemStack slag)

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:items:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

#### Add Fuel

The following script will add a Fuel to the Blast Furnace that will take a Golden Sword with the name "Sword of the Sungod" and will burn for 100000 ticks.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.addFuel(string name, IIngredient fuel, int burnTime)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({display: {Name: "{\"text\":\"Sword of the Sungod\"}" as string}}), 100000);
```

#### Remove Recipes

The follow script will remove all recipes from the Blast Furnace that outputs Charcoal.

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:minecraft:charcoal>);
```

#### Remove Fuels

The follow script will remove Charcoal as a Fuel for the Blast Furnace.

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```