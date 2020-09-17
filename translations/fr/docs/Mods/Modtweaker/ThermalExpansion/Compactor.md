# Compacteur

## Paquet

`Compteur`

Le compacteur prend en charge 4 types de modificateurs:

    Monnaie
    Appuyez sur
    équipement de stockage
    
    

## Médicaments

Le modificateur de menthe modifie les recettes inscrites sur la carte de recette `COIN` en extension thermique.

Notez que ces recettes nécessitent l'Augmentation de la presse numérique.

### Ajouter

```zenscript
mods.thermalexpansion.Compactor.addMintRecipe(sortie IItemStack, entrée IItemStack, int energy);

mods.thermalexpansion.Compactor.addMintRecipe(<minecraft:sand>, <minecraft:stick>, 1500);
```

### Retirer

```zenscript
mods.thermalexpansion.Compactor.removeMintRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeMintRecipe(<thermalfoundation:material:167>);
```

## Presse

Le modificateur de presse modifie les recettes non enregistrées dans le `PLATE`, `COIN`, ou `GEAR` cartes de recettes en extension thermique.

Ces recettes ne nécessitent pas d'Augmentation spécifique.

### Ajouter

```zenscript
mods.thermalexpansion.Compactor.addPressRecipe(sortie IItemStack, entrée IItemStack, int energy);

mods.thermalexpansion.Compactor.addPressRecipe(<minecraft:sand>, <minecraft:apple>, 1500);
```

### Retirer

```zenscript
mods.thermalexpansion.Compactor.removePressRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removePressRecipe(<thermalfoundation:material:167>);
```

## Stockage

Le modificateur Stockage modifie les recettes enregistrées dans la carte de recettes `PLATE` en extension thermique.

Ces recettes ne nécessitent pas d'augmentation spécifique, et ne sont apparemment utilisées que pour les assiettes.

### Ajouter

```zenscript
mods.thermalexpansion.Compactor.addStorageRecipe(sortie IItemStack, entrée IItemStack, int energy);

mods.thermalexpansion.Compactor.addStorageRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Retirer

```zenscript
mods.thermalexpansion.Compactor.removeStorageRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeStorageRecipe(<thermalfoundation:material:167>);
```

## Équipement

Le modificateur d'équipement modifie les recettes enregistrées dans la carte des recettes `GEAR` en extension thermique.

Notez que ces recettes requièrent l'Augmentation de la Dure de l'Œuvre.

### Ajouter

```zenscript
mods.thermalexpansion.Compactor.addGearRecipe(sortie IItemStack, entrée IItemStack, int energy);

mods.thermalexpansion.Compactor.addGearRecipe(<minecraft:sand>, <minecraft:arrow>, 1500);
```

### Retirer

```zenscript
mods.thermalexpansion.Compactor.removeGearRecipe(IItemStack input);

mods.thermalexpansion.Compactor.removeGearRecipe(<thermalfoundation:material:167>);
```