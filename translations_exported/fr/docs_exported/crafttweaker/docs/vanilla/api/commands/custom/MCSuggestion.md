# MCSuggestion

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCSuggestion
```

## Méthodes
### appliquer

Type de retour: chaîne de caractères

```zenscript
myMCSuggestion.apply(input as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| input     | Chaîne de caractères | Aucune description fournie |


### comparer à

Type de retour: int

```zenscript
myMCSuggestion.compareTo(o as crafttweaker.api.commands.custom.MCSuggestion);
```

| Paramètre | Type de texte                                                                              | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| o         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Aucune description fournie |


### Comparer à Ignorer le cas

Type de retour: int

```zenscript
myMCSuggestion.compareToIgnoreCase(b comme crafttweaker.api.commands.custom.MCSuggestion);
```

| Paramètre | Type de texte                                                                              | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------ | -------------------------- |
| b         | [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion) | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCSuggestion.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### agrandir

Type de retour : [crafttweaker.api.commands.custom.MCSuggestion](/vanilla/api/commands/custom/MCSuggestion)

```zenscript
myMCSuggestion.expand(commande comme String, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| commande  | Chaîne de caractères                                                                         | Aucune description fournie |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Aucune description fournie |


### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCSuggestion.getRange();
```

### getText

Type de retour: chaîne de caractères

```zenscript
myMCSuggestion.getText();
```

### format@@0 getTooltip

Type de retour: chaîne de caractères

```zenscript
myMCSuggestion.getTooltip();
```

### hashCode

Type de retour: int

```zenscript
myMCSuggestion.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCSuggestion.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCSuggestion == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

