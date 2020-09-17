# format@@0 MCCommandContextBuilder

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Méthodes
### construire

Type de retour : [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(input as String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| input     | Chaîne de caractères | Aucune description fournie |


### Copie

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### est égal à

Type de retour: booléen

```zenscript
myMCCommandContextBuilder.equals(o en tant qu'objet) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |


### trouver un contexte de suggestion

Type de retour : [crafttweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(curseur comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| cursor    | Indice        | Aucune description fournie |


### getArguments

Type de retour : [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### Obtenir le répartiteur

Type de retour : [crafttweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Type de retour : Liste&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### Gamme d'obtention

Type de retour : [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Type de retour: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Type de retour: chaîne de caractères

```zenscript
myMCCommandContextBuilder.toString();
```

### avec argument

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(name as String, argument as crafttweaker.api.commands.custom.MCParsedArgument);
```

| Paramètre | Type de texte                                                                                      | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------------- | -------------------------- |
| Nom       | Chaîne de caractères                                                                               | Aucune description fournie |
| Argument  | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Aucune description fournie |


### avec enfant

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(child as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Paramètre | Type de texte                                                                                                    | Libellé                    |
| --------- | ---------------------------------------------------------------------------------------------------------------- | -------------------------- |
| enfant    | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Aucune description fournie |


### withCommand

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(commande comme crafttweaker.api.commands.custom.MCCommand);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| commande  | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Aucune description fournie |


### withNode

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Paramètre | Type de texte                                                                                | Libellé                    |
| --------- | -------------------------------------------------------------------------------------------- | -------------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Aucune description fournie |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Aucune description fournie |


### avec source

Type de retour : [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Paramètre | Type de texte                                                                                    | Libellé                    |
| --------- | ------------------------------------------------------------------------------------------------ | -------------------------- |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Aucune description fournie |



## Opérateurs
### EQUALES

```zenscript
myMCCommandContextBuilder == o en tant qu'objet
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| o         | Objet         | Aucune description fournie |

## Pistolet

| Type de résultat     | Est implicite |
| -------------------- | ------------- |
| Chaîne de caractères | vrai          |

