# Répartiteur MC:

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Methods
### equals

Return type: boolean

```zenscript
myMCCommandDispatcher.equals(o as Object);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### exécuter

Return type: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | String                                                                                           | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### trouver des Ambiguités

```zenscript
myMCCommandDispatcher.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter    | Type                                                                                                     | Description             |
| ------------ | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| consommateur | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### trouver un nœud

Type de retour : [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(path as Collection<String>);
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| path      | Collection&lt;String&gt; | No description provided |


### getAllUsage

Type de retour: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| restreint | boolean                                                                                          | No description provided |


### Obtenir des suggestions de complétion

Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse comme crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Type de retour : [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse comme crafttweaker.api.commands.custom.MCParseResults, curseur comme int);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor    | int                                                                                            | No description provided |


### getPath

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(cible comme crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### getRoot

Type de retour : [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Type de retour : String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| Nœud      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Type de retour : [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(commande comme String, source comme crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                           | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Type de retour : [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(commande com.mojang.brigadier.StringReader, source en tant que crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | com.mojang.brigadier.StringReader                                                                | No description provided |
| source    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### s'inscrire

Type de retour : [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(commande comme crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### Consommateur

```zenscript
myMCCommandDispatcher.setConsumer(consumer as crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter    | Type                                                                                               | Description             |
| ------------ | -------------------------------------------------------------------------------------------------- | ----------------------- |
| consommateur | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandDispatcher == o en tant qu'objet
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

