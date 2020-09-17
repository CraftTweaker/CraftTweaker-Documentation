# Fournisseur MCSuggestion

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCSuggestionProvider
```

## Constructeurs
```zenscript
new crafttweaker.api.commands.custom.MCSuggestionProvider(fun as function.BiFunction<crafttweaker.api.commands.custom.MCCommandContext, crafttweaker.api.commands.custom.MCSuggestionsBuilder, crafttweaker.api.commands.custom.MCSuggestions>);
```
| Paramètre | Type de texte                                                                                                                                                                                                                                                                                                                                       | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| amusant   | function.BiFunction&lt;[crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext), [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder), [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)&gt; | Aucune description fournie |



## Méthodes
### est égal à

Type de retour: booléen

```zenscript
myMCSuggestionProvider.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### getSuggestions

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCSuggestionProvider.getSuggestions(contexte comme crafttweaker.api.commands.custom.MCCommandContext, builder comme crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Paramètre    | Type de texte                                                                                              | Libellé                    |
| ------------ | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| Contexte     | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | Aucune description fournie |
| constructeur | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | Aucune description fournie |


### hashCode

Type de retour: int

```zenscript
myMCSuggestionProvider.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCSuggestionProvider.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCSuggestionProvider == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

