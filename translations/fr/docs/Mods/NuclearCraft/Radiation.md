# Rayonnement
**Remarque : Le double jeu de parenthèses `([...])` n'est pas requis ici !**

## Rayonnement
Cette méthode obtient le rayonnement d'un `Ingrédient` en rads/tick.
```zenscript
mods.nuclearcraft.radiation.getRadiationLevel(itemInput);
```
## Bloquer les mutations
Cette méthode ajoute une mutation de bloc. Le Bloc ne mutera pas lorsque le rayonnement est inférieur à `seuil de rayonnement`.
```zenscript
mods.nuclearcraft.radiation.addBlockMutation(blockInput, blockOutput, double radiationThreshold);
```

## Immunité aux rayonnements
Cette méthode donne la possibilité de contrôler l'immunité des joueurs en fonction de la scène. `defaultImmunity` est un booléen spécifiant l'immunité des joueurs sans les étapes spécifiées. `stageNames` est une table de noms de toutes les étapes qui peut basculer l'immunité des joueurs.
```zenscript
mods.nuclearcraft.radiation.setRadiationImmunityGameStages(boolean defaultImmunity, string[] stageNames);
```

## Getters/Setters de Radiation

### Ajout des rayonnements
`amount` est la quantité de radiation ajoutée à la `IEntityLivingBase`. `useImmunity` contrôle si la fonction se produit même la `IEntityLivingBase` est immunisée.
```zenscript
IEntityLivingBase.addRadiation(montant double, @Optional boolean useImmunity);
```

### Réglage des rayonnements
`la quantité` est le niveau de radiation qui est appliqué à la `IEntityLivingBase`. `useImmunity` contrôle si la fonction se produit même la `IEntityLivingBase` est immunisée.
```zenscript
IEntityLivingBase.setRadiation(montant double, @Optional boolean useImmunity);
```

### Récupération des rayonnements
Cette méthode retourne le niveau de radiation de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadiation();
```

## Getters/Setters du tampon de Radaway

### Ajout du tampon de Radaway
`amount` est le montant du tampon de Radaway ajouté à la `IEntityLivingBase`. `Le tampon plus lent` décide si le tampon Radaway ajouté est un tampon lent.
```zenscript
IEntityLivingBase.addRadiationResistance(montant double, @Buffer booléen facultatif);
```
### Réglage du tampon de Radaway
`amount` est le montant du tampon de Radaway qui est appliqué à la `IEntityLivingBase`. `Le tampon plus lent` décide si le tampon Radaway ajouté est un tampon lent.
```zenscript
IEntityLivingBase.setRadiationResistance(montant double, @Buffer booléen facultatif);
```

### Récupération du tampon Radaway
Cette méthode retourne le tampon Radaway de la `IEntityLivingBase`. `le Buffer` plus lent détermine si le tampon lent est inclus dans la valeur retournée.
```zenscript
IEntityLivingBase.getRadiationResistance(@Optional boolean slower);
```

## Getters/Setters du tampon de poison

### Ajout du tampon de poison
`amount` est le montant du tampon de poison ajouté à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addPoisonBuffer(double montant);
```
### Réglage du tampon de poison
`amount` est le montant du tampon de poison qui est appliqué à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setPoisonBuffer(double montant);
```

### Récupération du tampon de poison
Cette méthode retourne le tampon de poison de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getPoisonBuffer();
```

## Getters/Setters de Résistance aux Radiations
### Ajout de la résistance aux rayonnements
`amount` est le montant de Radiation Resistance ajouté à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.addRadawayBuffer(double montant);
```
## Réglage de la résistance aux rayonnements
`amount` est le montant de la résistance aux rayonnements qui est appliqué à la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.setRadawayBuffer(double montant);
```

## Résistance aux rayonnements
Cette méthode retourne la Résistance à Radiation de la `IEntityLivingBase`.
```zenscript
IEntityLivingBase.getRadawayBuffer();
```
## Éléments de niveau de rayonnement

### Niveau de rayonnement brut
Cette méthode retourne le rayonnement de la `IEntityLivingBase` en rads.
```zenscript
IEntityLivingBase.getRawRadiationLevel();
```

### Niveau de rayonnement
Cette méthode retourne le changement de niveau de radiation de la `IEntityLivingBase` en rads/tick.
```zenscript
IEntityLivingBase.getRadiationLevel();
```