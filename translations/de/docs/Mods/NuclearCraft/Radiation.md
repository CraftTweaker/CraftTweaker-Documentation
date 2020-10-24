# Radiation
**Note: The double set of brackets `([...])` is not required here!**

## Radiation
This method gets the radiation of an `IIngredient` in rads/tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Block Mutations
This method adds a block mutation. The Block will not mutate when the radiation is below `radiationThreshold`.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, double radiationThreshold);
```

## Radiation Immunity
This method gives the ability to control the immunity of players depending on the stage. `defaultImmunity` is a boolean specifiying the players' immunity without the specified stages. `stageNames` is an array of the names of all stages that can toggle the immunity of players.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Radiation Getters/Setters

### Adding Radiation
`amount` is the amount of radiation added to the `IEntityLivingBase`. `useImmunity` controls whether the function occurs even the `IEntityLivingBase` is immune.
```zenscript
IEntityLivingBase.addRadiation(double amount, @Optional boolean useImmunity);
```

### Setting Radiation
`amount` is the level of radiation that is applied to the `IEntityLivingBase`. `useImmunity` controls whether the function occurs even the `IEntityLivingBase` is immune.
```zenscript
IEntityLivingBase.setRadiation(double amount, @Optional boolean useImmunity);
```

### Getting Radiation
This method returns the level of radiation of the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Radaway Buffer Getters/Setters

### Adding Radaway Buffer
`amount` is the amount of Radaway Buffer added to the `IEntityLivingBase`. `slowBuffer` decides if the Radaway Buffer added is a slow buffer.
```zenscript
IEntityLivingBase.addRadiationResistance(double amount, @Optional boolean slowBuffer);
```
### Setting Radaway Buffer
`amount` is the amount of Radaway Buffer that is applied to the `IEntityLivingBase`. `slowBuffer` decides if the Radaway Buffer added is a slow buffer.
```zenscript
IEntityLivingBase.setRadiationResistance(double amount, @Optional boolean slowBuffer);
```

### Getting Radaway Buffer
This method returns the Radaway Buffer of the `IEntityLivingBase`. `slowBuffer` determines whether slow buffer is included in the returned value.
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slowBuffer);
```

## Poison Buffer Getters/Setters

### Adding Poison Buffer
`amount` is the amount of Poison Buffer added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addPoisonBuffer(double amount);
```
### Setting Poison Buffer
`amount` is the amount of Poison Buffer that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setPoisonBuffer(double amount);
```

### Getting Poison Buffer
This method returns the Poison Buffer of the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Radiation Resistance Getters/Setters
### Adding Radiation Resistance
`amount` is the amount of Radiation Resistance added to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addRadawayBuffer(double amount);
```
## Setting Radiation Resistance
`amount` is the amount of Radiation Resistance that is applied to the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setRadawayBuffer(double amount);
```

## Getting Radiation Resistance
This method returns the Radiation Resistance of the `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Radiation Level Getters

### Raw Radiation Level
This method returns the radiation of the `IEntityLivingBase` in rads.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Radiation Level
This method returns the change in radiation level of the `IEntityLivingBase` in rads/tick.
```zenscript
IEntityLivingBase.getRadiationLevel();
```