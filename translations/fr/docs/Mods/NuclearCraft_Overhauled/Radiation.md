# Rayonnement

## Scrubber de Radiation

### Importation du paquet en cours
`mods.nuclearcraft.format@@0 RadiationScrubber`

### Ajout de recettes
```zenscript
mods.nuclearcraft.RadiationScrubber.addRecipe(IIngredient itemInput, ILiquidStack fluidInput, IIngredient itemOutput, ILiquidStack fluidOutput, int processTime, int processPower, double efficacité du processus);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.RadiationScrubber.removeRecipeWithInput(IIngredient itemInput, ILiquidStack fluidInput);
mods.nuclearcraft.RadiationScrubber.removeRecipeWithOutput(IIngredient itemOutput, ILiquidStack fluidOutput);
mods.nuclearcraft.RadiationScrubber.removeAllRecipes();
```

## Mutation du bloc

### Importation du paquet en cours
`mods.nuclearcraft.format@@0 RadiationBlockMutation`

### Ajout de recettes
```zenscript
mods.nuclearcraft.RadiationBlockMutation.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockMutation.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.
```

## Purification de bloc

### Importation du paquet en cours
`mods.nuclearcraft.format@@0 RadiationBlockPurification`

### Ajout de recettes
```zenscript
mods.nuclearcraft.RadiationBlockPurification.addRecipe(IIngredient blockInput, IIngredient blockOutput, double radiationThreshold);
```

### Suppression des recettes
```zenscript
mods.nuclearcraft.mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithInput(IIngredient blockInput);
mods.nuclearcraft.RadiationBlockPurification.removeRecipeWithOutput(IIngredient blockOutput);
mods.nuclearcraft.
```

## Rayonnement de l'entité

### Rayonnement
`amount` est la quantité de radiation ajoutée à la `IEntityLivingBase`. `useImmunity` contrôle si la fonction se produit même la `IEntityLivingBase` est immunisée.
```zenscript
IEntityLivingBase::addRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::setRadiation(double amount, @Optional boolean useImmunity);
IEntityLivingBase::getRadiation();
```

### Tampon de Radaway
`amount` est le montant du tampon de Radaway ajouté à la `IEntityLivingBase`. `Le tampon plus lent` décide si le tampon Radaway ajouté est un tampon lent.
```zenscript
IEntityLivingBase::addRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::setRadawayBuffer(double amount, @Optional boolean slowBuffer);
IEntityLivingBase::getRadawayBuffer(boolean slowBuffer);
```
**Note: Si `slowBuffer` est `true`, `getRadawayBuffer()` retournera le tampon de suppression de rayonnements à action lente au lieu du tampon normal.**

### Poison
`amount` est le montant du tampon de poison ajouté à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addPoisonBuffer(double quantité);
IEntityLivingBase::setPoisonBuffer(double amount);
IEntityLivingBase::getPoisonBuffer();
```

### Résistance aux rayonnements
`amount` est le montant de Radiation Resistance ajouté à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase::addRadiationResistance(double amount);
IEntityLivingBase::setRadiationResistance(double amount);
IEntityLivingBase::getRadiationResistance();
```

### Éléments de niveau de rayonnement

#### Niveau de rayonnement brut
Cette méthode retourne le rayonnement de la `IEntityLivingBase` en rads.
```zenscript
IEntityLivingBase::getRawRadiationLevel();
```

### Niveau de rayonnement
Cette méthode retourne le changement de niveau de radiation de la `IEntityLivingBase` en rads/tick.
```zenscript
IEntityLivingBase::getRadiationLevel();
```

## Rayonnement
Cette méthode obtient le rayonnement d'un `Ingrédient` en rads/tick.
```zenscript
mods.nuclearcraft.Radiation.getRadiationLevel(IIngredient itemInput);
```

## Immunité aux rayonnements
Cette méthode donne la possibilité de contrôler l'immunité des joueurs en fonction de la scène. `defaultImmunity` est un booléen spécifiant l'immunité des joueurs sans les étapes spécifiées. `stageNames` est une table de noms de toutes les étapes qui peut basculer l'immunité des joueurs.
```zenscript
mods.nuclearcraft.Radiation.setRadiationImmunityGameStages(boolean defaultImmunity, String[] stageNames);
```