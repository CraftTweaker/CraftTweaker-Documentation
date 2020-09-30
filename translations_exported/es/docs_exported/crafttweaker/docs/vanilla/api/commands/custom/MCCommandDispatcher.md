# Despachador MCCommand

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
myMCCommandDispatcher.equals(o como objeto);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ejecutar

Return type: int

```zenscript
myMCCommandDispatcher.execute(analizar como crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                              | Description             |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as String, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | String                                                                                           | No description provided |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(input as com.mojang.brigadier.StringReader, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | No description provided |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### encontrar ambigüedades

```zenscript
myMCCommandDispatcher.findAmbiguities(consumidor como crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter  | Type                                                                                                     | Description             |
| ---------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| consumidor | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### encontrarNodo

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(ruta como Colección<String>);
```

| Parameter | Type                                | Description             |
| --------- | ----------------------------------- | ----------------------- |
| path      | Colección&lt;String&gt; | No description provided |


### Todos los usos

Tipo de retorno: Cadena[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, restricted as boolean);
```

| Parameter   | Type                                                                                             | Description             |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| nodo        | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| fuente      | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| restringido | boolean                                                                                          | No description provided |


### Hacer sugerencias completadas

Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(analizar como crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                              | Description             |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCSuggeries,](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(analizar como crafttweaker.api.commands.custom.MCParseResults, cursor as int);
```

| Parameter | Type                                                                                              | Description             |
| --------- | ------------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResultados](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor    | int                                                                                               | No description provided |


### getPath

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(target as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### getRoot

Tipo de retorno: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Tipo de retorno: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| nodo      | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Tipo de retorno: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando como String, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                           | No description provided |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Tipo de retorno: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(comando como com.mojang.brigadier.StringReader, fuente como crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | com.mojang.brigadier.StringReader                                                                | No description provided |
| fuente    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### registrarse

Tipo de retorno: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(comando como crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### setConsumer

```zenscript
myMCCommandDispatcher.setConsumer(consumidor como crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter  | Type                                                                                               | Description             |
| ---------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| consumidor | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandDispatcher == o como objeto
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

