# format@@0 MCRequiredArgumentBuilder

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Interfaces implémentées
MCRequiredArgumentBuilder implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Méthodes
### construire

Type de retour : [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### est égal à

Type de retour: booléen

```zenscript
myMCRequiredArgumentBuilder.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### exécute

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(commande comme crafttweaker.api.commands.custom.MCCommand);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| commande  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Aucune description fournie |


### fork

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(cible comme crafttweaker.api.commands.custom.MCCommandNode, modificateur comme crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |


### avant

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier comme crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |
| fork      | boolean                                                                                                | Aucune description fournie |


### getArguments

Type de retour : Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Type de retour: chaîne de caractères

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getRedirect

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### Obtenir le modificateur de redirection

Type de retour : [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### Obtenir les conditions requises

Type de retour : function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### Get SuggestionsProvider

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Type de retour: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Type de retour: booléen

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### rediriger

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(cible comme crafttweaker.api.commands.custom.MCCommandNode, modificateur comme crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Paramètre | Type de texte                                                                                                      | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Aucune description fournie |


### nécessite

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(requis en tant que function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Paramètre | Type de texte                                                                                                                          | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Exigence  | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Aucune description fournie |


### suggère

Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(provider as crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Paramètre   | Type de texte                                                                                              | Libellé                    |
| ----------- | ---------------------------------------------------------------------------------------------------------- | -------------------------- |
| Fournisseur | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | Aucune description fournie |


### puis

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Paramètre | Type de texte                                                                                        | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Paramètre | Type de texte                                                                                                        | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCRequiredArgumentBuilder == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

