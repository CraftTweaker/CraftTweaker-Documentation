# Mekanism Ingredients

## About this page

This page contains some example about how to include Mekanism's custom and expanded Ingredients.
Keep in mind that since Ingredients accept multiple and different elements, they cannot be used as the output of a recipe!

While most of the time using this is unnecessary due to the magic of Implicit Casting, these are useful to have around.

Make sure to check out each ingredient's page to see what can cast to this and what you can do with them!

### FluidStackIngredient

The [FluidStackIngredient](/mods/Mekanism/api/ingredient/FluidStackIngredient) is an Ingredient related to the use of fluids.

```zenscript
<recipetype:mekanism:rotary>.addRecipe("decondensentrate_sulfur_dioxide", FluidStackIngredient.from(<tag:fluids:forge:sulfur_dioxide>, 1), <gas:mekanism:sulfur_dioxide>);
//An alternate implementation of the above recipe is shown commented below. This implementation makes use of implicit casting to allow easier calling:
<recipetype:mekanism:rotary>.addRecipe("decondensentrate_sulfur_dioxide", <tag:fluids:forge:sulfur_dioxide> * 1, <gas:mekanism:sulfur_dioxide>);
```

### ItemStackIngredient

The [ItemStackIngredient](/mods/Mekanism/api/ingredient/ItemStackIngredient) is a type of Ingredient that requires Items to be met.

```zenscript
<recipetype:mekanism:energy_conversion>.addRecipe("redstone_ore_to_power", ItemStackIngredient.from(<tag:items:forge:ores/redstone>), FloatingLong.create(45000));

// <tag:items:forge:ores/redstone> is also applicable here.
```


### GasStackIngredient

The [GasStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/GasStackIngredient) is a type of [ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient) that requires GasStack s

```
import mods.mekanism.api.ingredient.ChemicalStackIngredient.GasStackIngredient;

<recipetype:mekanism:activating>.addRecipe("activate_water_vapor", GasStackIngredient.from(<gas:mekanism:water_vapor>), <gas:mekanism:brine>);

//This also works, due to implicit casting!

<recipetype:mekanism:activating>.addRecipe("activate_water_vapor", <gas:mekanism:water_vapor>, <gas:mekanism:brine>);
```

### PigmentStackIngredient

The [PigmentStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/PigmentStackIngredient) is a type of
[ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient) that is related to the use of pigments in recipes.

```zenscript

<recipetype:mekanism:pigment_mixing>.addRecipe("pigment_mixing/white_dark_red_to_red", PigmentStackIngredient.from(<pigment:mekanism:white>), PigmentStackIngredient.from(<pigment:mekanism:dark_red> * 4), <pigment:mekanism:red> * 5);
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
<recipetype:mekanism:pigment_mixing>.addRecipe("pigment_mixing/white_dark_red_to_red", <pigment:mekanism:white>, PigmentStackIngredient.from(<pigment:mekanism:dark_red> * 4), <pigment:mekanism:red> * 5);
<recipetype:mekanism:pigment_mixing>.addRecipe("pigment_mixing/white_dark_red_to_red", PigmentStackIngredient.from(<pigment:mekanism:white>), <pigment:mekanism:dark_red> * 4, <pigment:mekanism:red> * 5);
<recipetype:mekanism:pigment_mixing>.addRecipe("pigment_mixing/white_dark_red_to_red", <pigment:mekanism:white>, <pigment:mekanism:dark_red> * 4, <pigment:mekanism:red> * 5);
```

### InfusionStackIngredient

The [InfusionStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/InfusionStackIngredient) is a type of
[ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient) that is related to the use of infusion types in recipes.

```zenscript
<recipetype:mekanism:metallurgic_infusing>.addRecipe("infuse_planks", ItemStackIngredient.from(<item:minecraft:oak_planks>), InfusionStackIngredient.from(<infuse_type:mekanism:fungi> * 10), <item:minecraft:crimson_planks>);
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
<recipetype:mekanism:metallurgic_infusing>.addRecipe("infuse_planks", <item:minecraft:oak_planks>, InfusionStackIngredient.from(<infuse_type:mekanism:fungi> * 10), <item:minecraft:crimson_planks>);
<recipetype:mekanism:metallurgic_infusing>.addRecipe("infuse_planks", ItemStackIngredient.from(<item:minecraft:oak_planks>), <infuse_type:mekanism:fungi> * 10, <item:minecraft:crimson_planks>);
<recipetype:mekanism:metallurgic_infusing>.addRecipe("infuse_planks", <item:minecraft:oak_planks>, <infuse_type:mekanism:fungi> * 10, <item:minecraft:crimson_planks>);
```

### SlurryStackIngredient

The [SlurryStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient/SlurryStackIngredient) is a type of
[ChemicalStackIngredient](/mods/Mekanism/api/ingredient/ChemicalStackIngredient) that is related to the use of slurries in recipes.

```zenscript

<recipetype:mekanism:washing>.addRecipe("cleaning_uranium_slurry", FluidStackIngredient.from(<tag:fluids:minecraft:water>, 10), SlurryStackIngredient.from(<slurry:mekanism:dirty_uranium>), <slurry:mekanism:clean_uranium>);
//Alternate implementations of the above recipe are shown commented below. These implementations make use of implicit casting to allow easier calling:
<recipetype:mekanism:washing>.addRecipe("cleaning_uranium_slurry", <tag:fluids:minecraft:water> * 10, SlurryStackIngredient.from(<slurry:mekanism:dirty_uranium>), <slurry:mekanism:clean_uranium>);
<recipetype:mekanism:washing>.addRecipe("cleaning_uranium_slurry", FluidStackIngredient.from(<tag:fluids:minecraft:water>, 10), <slurry:mekanism:dirty_uranium>, <slurry:mekanism:clean_uranium>);
<recipetype:mekanism:washing>.addRecipe("cleaning_uranium_slurry", <tag:fluids:minecraft:water> * 10, <slurry:mekanism:dirty_uranium>, <slurry:mekanism:clean_uranium>);

```

All Mekanism Ingredients are Implicitly castable to IData, in case you need to.