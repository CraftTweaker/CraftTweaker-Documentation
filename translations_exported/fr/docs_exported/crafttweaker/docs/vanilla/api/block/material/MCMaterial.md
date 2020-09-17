# MCMaterial

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.block.material.MCMaterial
```

## Interfaces implémentées
MCMaterial implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Méthodes
### mouvements de blocs

Renvoie si ce matériau est considéré comme solide ou non

Type de retour: booléen

```zenscript
myMCMaterial.blocksMovement();
```

### getColor

Récupère l'index de couleur du bloc. Il s'agit de la même couleur utilisée par les cartes vanilla pour représenter ce bloc.

Type de retour: MCMaterialColor

```zenscript
myMCMaterial.getColor();
```

### inflammable

Retourne si le bloc peut brûler ou non.

Type de retour: booléen

```zenscript
myMCMaterial.isFlammable();
```

### isLiquid

Renvoie si les blocs de ces matériaux sont des liquides.

Type de retour: booléen

```zenscript
myMCMaterial.isLiquid();
```

### isOpaque

Indiquer si le matériau est opaque

Type de retour: booléen

```zenscript
myMCMaterial.isOpaque();
```

### est remplaçable

Retourne si le matériau peut être remplacé par d'autres blocs lorsqu'il est placé - par exemple la neige, la vigne et l'herbe haute.

Type de retour: booléen

```zenscript
monMCMaterial.isReplaceable();
```

### isSolid

Renvoie vrai si le bloc est considéré comme solide. C'est vrai par défaut.

Type de retour: booléen

```zenscript
myMCMaterial.isSolid();
```


## Propriétés

| Nom                | Type de texte        | A un Getter | A un Setter |
| ------------------ | -------------------- | ----------- | ----------- |
| Chaîne de commande | Chaîne de caractères | vrai        | Faux        |

