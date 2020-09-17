# MCBlock

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.block.MCBlock
```

## Méthodes
### format@@0 canSpawnInBlock

Type de retour: booléen

```zenscript
myMCBlock.canSpawnInBlock();
```

### getDefaultState

Type de retour : [crafttweaker.api.block.MCBlockState](/vanilla/api/blocks/MCBlockState)

```zenscript
myMCBlock.getDefaultState();
```


## Propriétés

| Nom               | Type de texte        | A un Getter | A un Setter |
| ----------------- | -------------------- | ----------- | ----------- |
| table de butin    | Chaîne de caractères | vrai        | Faux        |
| Clé de traduction | Chaîne de caractères | vrai        | Faux        |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | Faux          |

