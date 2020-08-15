# MCMaterial

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Méthodes
### mouvements de blocs

Renvoie si ce matériau est considéré comme solide ou non

Retourne un booléen

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Récupère l'index de couleur du bloc. Il s'agit de la même couleur utilisée par les cartes vanilla pour représenter ce bloc.

Retourne [crafttweaker.api.block.material.MCMaterialColor](/vanilla/api/block/material/MCMaterialColor)

```zenscript
myMCMaterial.getColor();
```

### inflammable

Retourne si le bloc peut brûler ou non.

Retourne un booléen

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Renvoie si les blocs de ces matériaux sont des liquides.

Retourne un booléen

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indiquer si le matériau est opaque

Retourne un booléen

```zenscript
myMCMaterial.isOpaque();
```

### est remplaçable

Retourne si le matériau peut être remplacé par d'autres blocs lorsqu'il est placé - par exemple la neige, la vigne et l'herbe haute.

Retourne un booléen

```zenscript
monMCMaterial.isReplaceable();
```

### isSolid

Renvoie vrai si le bloc est considéré comme solide. C'est vrai par défaut.

Retourne un booléen

```zenscript
myMCMaterial.isSolid();
```

### n'est pas requis

Renvoie vrai si le matériau peut être récolté sans outil (ou avec le mauvais outil)

Retourne un booléen

```zenscript
monMCMaterial.isToolNotRequired();
```


