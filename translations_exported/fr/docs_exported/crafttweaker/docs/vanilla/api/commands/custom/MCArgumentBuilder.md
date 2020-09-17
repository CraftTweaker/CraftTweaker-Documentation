# MCArgumentBuilder

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCArgumentBuilder
```

## Méthodes
### construire

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.build();
```

### est égal à

Type de retour: booléen

```zenscript
myMCArgumentBuilder.equals(o en tant qu'objet) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### exécute

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.executes(commande comme crafttweaker.api.commands.custom.MCCommand);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| commande  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Aucune description fournie |


### fork

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.fork(cible comme crafttweaker.api.commands.custom.MCCommandNode, modificateur comme crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |


### avant

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.forward(target as crafttweaker.api.commands.custom.MCCommandNode, modifier comme crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Paramètre | Type de texte                                                                                          | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Aucune description fournie |
| fork      | boolean                                                                                                | Aucune description fournie |


### getArguments

Type de retour : Collection&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCArgumentBuilder.getArguments();
```

### getCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCArgumentBuilder.getCommand();
```

### getRedirect

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCArgumentBuilder.getRedirect();
```

### Obtenir le modificateur de redirection

Type de retour : [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCArgumentBuilder.getRedirectModifier();
```

### Obtenir les conditions requises

Type de retour : function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCArgumentBuilder.getRequirement();
```

### hashCode

Type de retour: int

```zenscript
myMCArgumentBuilder.hashCode();
```

### isFork

Type de retour: booléen

```zenscript
myMCArgumentBuilder.isFork();
```

### rediriger

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(cible comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.redirect(cible comme crafttweaker.api.commands.custom.MCCommandNode, modificateur comme crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Paramètre | Type de texte                                                                                                      | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Aucune description fournie |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Aucune description fournie |


### nécessite

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.requires(requis comme function.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Paramètre | Type de texte                                                                                                                          | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| Exigence  | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Aucune description fournie |


### puis

Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Paramètre | Type de texte                                                                                        | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Aucune description fournie |



Type de retour : [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCArgumentBuilder.then(argument comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| Argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |


### toString

Type de retour: chaîne de caractères

```zenscript
myMCArgumentBuilder.toString();
```


## Opérateurs
### EQUALES

```zenscript
myMCArgumentBuilder == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

