# Radiation

## Radiation Scrubber

### Importing the Package
`mods.nuclearcraft.RadiationScrubber`

### Adding Recipes
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double processEfficiency);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();
```

## Block Mutation

### Importing the Package
`mods.nuclearcraft.RadiationBlockMutation`

### Adding Recipes
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockMutation.removeAllRecipes();
```

## Block Purification

### Importing the Package
`mods.nuclearcraft.RadiationBlockPurification`

### Adding Recipes
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Removing Recipes
```zenscript
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.RadiationBlockPurification.removeAllRecipes();
```

## Entity Radiation

### Radiation
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` controls whether the function occurs even the `IEntityLivingBase` is immune.
```zenscript
IEntityLivingBase::addRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::setRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::getRadiation();
```

### Radaway Buffer
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` decides if the Radaway Buffer added is a slow buffer.
```zenscript
IEntityLivingBase::addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Note: If `slowBuffer` is `true`, `getRadawayBuffer()` will return the slow-acting radiation removal buffer instead of the normal one.**

### Poison
`amount` is the amount of Poison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(double amount);
IEntityLivingBase::setPoisonBuffer(double amount);
IEntityLivingBase::getPoisonBuffer();
```

### Radiation Resistance
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addRadiationResistance(double amount);
IEntityLivingBase::setRadiationResistance(double amount);
IEntityLivingBase::getRadiationResistance();
```

### Radiation Level Getters

#### Raw Radiation Level
This method returns the radiation of the `IEntityLivingBase` in rads.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Radiation Level
This method returns the change in radiation level of the `IEntityLivingBase` in rads/tick.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Radiation
This method gets the radiation of an `IIngredient` in rads/tick.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel(IIngredient itemInput);
```

## Radiation Immunity
This method gives the ability to control the immunity of players depending on the stage. `defaultImmunity` is a boolean specifiying the players' immunity without the specified stages. `stageNames` is an array of the names of all stages that can toggle the immunity of players.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```