# MCSuggestionsBuilder

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionsBuilder
```

## Méthodes
### Ajouter

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.add(autres que crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Paramètre | Type de texte                                                                                              | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| autres    | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Aucune description fournie |


### construire

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionsBuilder.build();
```

### créerOffset

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.createOffset(start as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Début     | Indice        | Aucune description fournie |


### est égal à

Type de retour: booléen

```zenscript
myMCSuggestionsBuilder.equals(o en tant qu'objet) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### getInput

Type de retour: chaîne de caractères

```zenscript
myMCSuggestionsBuilder.getInput();
```

### Rester en cours

Type de retour: chaîne de caractères

```zenscript
myMCSuggestionsBuilder.getRemaining();
```

### getStart

Type de retour: int

```zenscript
myMCSuggestionsBuilder.getStart();
```

### hashCode

Type de retour: int

```zenscript
myMCSuggestionsBuilder.hashCode();
```

### Redémarrer

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.restart();
```

### suggérer

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(text as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| texte     | Chaîne de caractères | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| valeur    | Indice        | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(text as String, tooltip as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| texte     | Chaîne de caractères | Aucune description fournie |
| infobulle | Chaîne de caractères | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder)

```zenscript
myMCSuggestionsBuilder.suggest(value as int, tooltip as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| valeur    | Indice               | Aucune description fournie |
| infobulle | Chaîne de caractères | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCSuggestionsBuilder.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCSuggestionsBuilder == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

