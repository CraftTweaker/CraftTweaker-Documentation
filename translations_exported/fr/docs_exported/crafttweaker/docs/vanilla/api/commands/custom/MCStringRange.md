# MCStringRange

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCStringRange
```

## Méthodes
### à

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.at(pos as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| pos       | Indice        | Aucune description fournie |


### entre

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.between(start as int, end as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Début     | Indice        | Aucune description fournie |
| fin       | Indice        | Aucune description fournie |


### englobant

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
crafttweaker.api.commands.custom.MCStringRange.encompassing(a as crafttweaker.api.commands.custom.MCStringRange, b as crafttweaker.api.commands.custom.MCStringRange);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| a         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Aucune description fournie |
| b         | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCStringRange.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### obtenir

Type de retour: chaîne de caractères

```zenscript
myMCStringRange.get(string as String);
```

| Paramètre            | Type de texte        | Libellé                    |
| -------------------- | -------------------- | -------------------------- |
| chaîne de caractères | Chaîne de caractères | Aucune description fournie |



Type de retour: chaîne de caractères

```zenscript
myMCStringRange.get(reader as crafttweaker.api.commands.custom.MCImmutableStringReader);
```

| Paramètre | Type de texte                                                                                                    | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| lecteur   | [crafttweaker.api.commands.custom.MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | Aucune description fournie |


### getEnd

Type de retour: int

```zenscript
myMCStringRange.getEnd();
```

### getLength

Type de retour: int

```zenscript
myMCStringRange.getLength();
```

### getStart

Type de retour: int

```zenscript
myMCStringRange.getStart();
```

### hashCode

Type de retour: int

```zenscript
myMCStringRange.hashCode();
```

### isEmpty

Type de retour: booléen

```zenscript
myMCStringRange.isEmpty();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCStringRange.toString();
```


