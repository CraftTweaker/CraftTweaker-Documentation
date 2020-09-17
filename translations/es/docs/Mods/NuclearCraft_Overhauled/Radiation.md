# Radiación

## Triturador de radiación

### Importando el Paquete
`mods.nuclearcraft.SupercoolerRadiación de goma`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double processEfficiency);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerRadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();RadiationScrubber.removeAll-Recipes();
```

## Bloquear mutación

### Importando el Paquete
`mods.nuclearcraft.SupercoolerRadiationBlockmut`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.SupercoolerRadiationBlockMutation.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockSalput);
mods.nuclearcraft.RadiationBlockMutation.removeAlleccipes();
```

## Purificación de Bloques

### Importando el Paquete
`mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockPurification`

### Añadiendo recetas
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Eliminando recetas
```zenscript
mods.nuclearcraft.RadiationScrubberRadiationBlockPurification.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockSalput);
mods.nuclearcraft.RadiationBlockPurification.remover todos los recetas ();
```

## Radiación de entidades

### Radiación
`cantidad` es la cantidad de radiación añadida a la `IEntityLivingBase`. `useInmunity` controla si la función ocurre incluso la `IEntityLivingBase` es inmune.
```zenscript
IEntityLivingBase::addRadiation(doble monto, @Optional boolean useInmunity);
IEntityLivingBase::setRadiation(doble monto, @Optional boolean useImmunity);
IEntityLivingBase::getRadiation();
```

### Búfer Radaway
`cantidad` es la cantidad de Radaway Buffer añadido a la `IEntityLivingBase`. `lento Buffer` decide si el Radaway Buffer añadido es un búfer lento.
```zenscript
IEntityLivingBase::addRadawayBuffer(doble monto, @Optional boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(doble monto, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Note: Si `slowBuffer` es `true`, `getRadawayBuffer()` devolverá el búfer de eliminación de radiación de acción lenta en lugar del búfer normal.**

### Veneno
`cantidad` es la cantidad de Búfer de Veneno añadido a la `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(doble cantidad);
IEntityLivingBase::setPoisonBuffer(doble cantidad);
IEntityLivingBase::getPoisonBuffer();
```

### Resistencia a radiaciones
`cantidad` es la cantidad de Resistencia a Radiación añadida a la `IEntityLivingBase`.
```zenscript
ItityLivingBase::addRadiationResistance(doble monto);
IEntityLivingBase::setRadiationResistance(doble monto);
IEntityLivingBase::getRadiationResistance();
```

### Obtención de Nivel de Radiación

#### Nivel de radiación rauda
Este método devuelve la radiación de la `IEntityLivingBase` en rads.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Nivel de radiación
Este método devuelve el cambio en el nivel de radiación de la `IEntityLivingBase` en rads/tick.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Radiación
Este método obtiene la radiación de un `IIngrediente` en rads/tick.
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Radiation.getRadiationLevel(IIngredient itemInput);
```

## Inmunidad por radiación
Este método da la capacidad de controlar la inmunidad de los jugadores dependiendo del escenario. `defaultInmunity` es un booleano que especifica la inmunidad de los jugadores sin las etapas especificadas. `stageNames` es un array de los nombres de todas las etapas que pueden cambiar la inmunidad de los jugadores.
```zenscript
mods.nuclearcraft.Supercoolermods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```