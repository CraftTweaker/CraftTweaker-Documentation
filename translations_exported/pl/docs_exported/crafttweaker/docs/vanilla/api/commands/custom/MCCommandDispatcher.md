# MCCommandDispatcher

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
myMCCommandDispatcher.equals(o jako Obiekt);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### wykonaj

Return type: int

```zenscript
myMCCommandDispatcher.execute(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(wprowadzanie jako String, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | String                                                                                           | No description provided |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Return type: int

```zenscript
myMCCommandDispatcher.execute(wejście jako com.mojang.brigadier.StringReader, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | No description provided |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### Rozmiary wyników

```zenscript
myMCCommandDispatcher.findAmbiguities(konsument jako crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter | Type                                                                                                     | Description             |
| --------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| konsument | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### węzeł znalezień

Typ zwrotu: [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(ścieżka jako Kolekcja<String>);
```

| Parameter | Type                               | Description             |
| --------- | ---------------------------------- | ----------------------- |
| path      | Kolekcja&lt;String&gt; | No description provided |


### getAllUsage

Typ zwrotu: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, ograniczone jako boolean);
```

| Parameter   | Type                                                                                             | Description             |
| ----------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| węzeł       | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| źródło      | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |
| ograniczony | boolean                                                                                          | No description provided |


### sugestie getCompletionSuggestions

Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse as crafttweaker.api.commands.custom.MCParseResults, kursor as int);
```

| Parameter | Type                                                                                           | Description             |
| --------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | No description provided |
| cursor    | int                                                                                            | No description provided |


### getPath

Typ zwrotu: Kolekcja&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(cel jako crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Description             |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### getRoot

Typ zwrotu: [crafttweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Typ zwrotu: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| węzeł     | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | No description provided |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### hashCode

Return type: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Typ zwrotu: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(komenda jako String, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | String                                                                                           | No description provided |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |



Typ zwrotu: [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(polecenie jako com.mojang.brigadier.StringReader, źródło jako crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Description             |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | com.mojang.brigadier.StringReader                                                                | No description provided |
| źródło    | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### zarejestruj

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(komenda jako crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |


### setKonsument

```zenscript
myMCCommandDispatcher.setConsumer(konsument jako crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter | Type                                                                                               | Description             |
| --------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| konsument | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | No description provided |


### toString

Return type: String

```zenscript
myMCCommandDispatcher.toString();
```


## Operators
### EQUALS

```zenscript
myMCCommandDispatcher == o jako obiekt
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

