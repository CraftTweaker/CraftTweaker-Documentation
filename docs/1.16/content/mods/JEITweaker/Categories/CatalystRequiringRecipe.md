::requiredMod[JEI]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/jei requiredMod=JEITweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/jeitweaker}

# Catalyst Requiring Recipe Category

This category implements all of `JeiCategory`'s methods.

## Package

`mods.jei.category.CatalystRequiringRecipe`

## Instance methods

### setCatalystDrawable
Sets the drawable of the category to be the specified one

```zenscript
MyCatalystRequiringRecipeCategory.setCatalystDrawable(@Nullable catalystDrawable as JeiDrawable)
```

### setInputs

Sets the amount of inputs that this recipe category allows. Inputs must be between 1 and 3 inclusive.

```zenscript
MyCatalystRequiringRecipeCategory.setInputs(inputs as int);
```

### setOutputs

Sets the amount of outputs that this recipe category allows. Outputs must be between 1 and 3 inclusive.
```zenscript
MyCatalystRequiringRecipeCategory.setOutputs(outputs as int);
```