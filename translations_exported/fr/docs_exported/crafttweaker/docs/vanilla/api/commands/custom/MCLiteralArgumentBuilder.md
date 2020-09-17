# format@@0 MCLiteralArgumentBuilder

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCLiteralArgumentBuilder
```

## Interfaces implémentées
MCLiteralArgumentBuilder implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Méthodes
### construire

Type de retour : [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
monMCLiteralArgumentBuilder.build();
```

### est égal à

Type de retour: booléen

```zenscript
monMCLiteralArgumentBuilder.equals(o en tant qu'objet);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### exécute

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.executes(commande comme crafttweaker.api.commands.custom.MCCommand);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| commande  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Aucune description fournie |


### fork

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.fork(cible comme crafttweaker.api.commands.custom.MCCommandNode, modificateur comme crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |


### avant

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier comme crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |
| fork      | boolean                                                                                                | Aucune description fournie |


### getArguments

Type de retour : Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
monMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Type de retour: chaîne de caractères

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getRedirect

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
monMCLiteralArgumentBuilder.getRedirect();
```

### Obtenir le modificateur de redirection

Type de retour : [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
monMCLiteralArgumentBuilder.getRedirectModifier();
```

### Obtenir les conditions requises

Type de retour : function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
monMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Type de retour: int

```zenscript
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Type de retour: booléen

```zenscript
myMCLiteralArgumentBuilder.isFork();
```

### rediriger

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(target as crafttweaker.api.commands.custom.MCCommandNode, modifier en tant que crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Paramètre | Type de texte                                                                                                      | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Aucune description fournie |


### nécessite

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.requires(requis en tant que function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Paramètre | Type de texte                                                                                                                          | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Exigence  | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Aucune description fournie |


### puis

Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Paramètre | Type de texte                                                                                        | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCLiteralArgumentBuilder.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCLiteralArgumentBuilder == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

