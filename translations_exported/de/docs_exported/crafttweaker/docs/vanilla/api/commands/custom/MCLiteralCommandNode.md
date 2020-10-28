# MCLiteralCommandNode

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralCommandNode
```

## Implemented Interfaces
MCLiteralCommandNode implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

## Methoden
### addChild

```zenscript
myMCLiteralCommandNode.addChild(node as crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| knoten    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### canUse

Return type: boolean

```zenscript
myMCLiteralCommandNode.canUse(source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### createBuilder

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralCommandNode.createBuilder();
```

### equals

Return type: boolean

```zenscript
myMCLiteralCommandNode.equals(o as Object);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### findAmbiguitäten

```zenscript
myMCLiteralCommandNode.findAmbiguities(consumer as crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter   | Type                                                                                                     | Beschreibung            |
| ----------- | -------------------------------------------------------------------------------------------------------- | ----------------------- |
| konsumenten | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | No description provided |


### getChild

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getChild(name as String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getChildren

Typ zurückgeben: Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getChildren();
```

### getCommand

Rückgabetyp: [craftweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralCommandNode.getCommand();
```

### getExamples

Rückgabetyp: Sammlung&lt;String&gt;

```zenscript
myMCLiteralCommandNode.getExamples();
```

### getLiteral

Return type: String

```zenscript
myMCLiteralCommandNode.getLiteral();
```

### getName

Return type: String

```zenscript
myMCLiteralCommandNode.getName();
```

### getUmleitung

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralCommandNode.getRedirect();
```

### getRedirectModifizierer

Rückgabetyp: [craftweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralCommandNode.getRedirectModifier();
```

### getRelevantNodes

Typ zurückgeben: Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralCommandNode.getRelevantNodes(input as String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### getAnforderung

Typ zurückgeben: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralCommandNode.getRequirement();
```

### getUsageText

Return type: String

```zenscript
myMCLiteralCommandNode.getUsageText();
```

### hashCode

Return type: int

```zenscript
myMCLiteralCommandNode.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCLiteralCommandNode.isFork();
```

### isValidInput

Return type: boolean

```zenscript
myMCLiteralCommandNode.isValidInput(input as String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| input     | String | No description provided |


### listSuggestions

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCLiteralCommandNode.listSuggestions(context as crafttweaker.api.commands.custom.MCCommandContext, builder as crafttweaker.api.commands.custom.MCSuggestionsBuilder);
```

| Parameter | Type                                                                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| kontext   | [crafttweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)         | No description provided |
| bauer     | [crafttweaker.api.commands.custom.MCSuggestionsBuilder](/vanilla/api/commands/custom/MCSuggestionsBuilder) | No description provided |


### parse

```zenscript
myMCLiteralCommandNode.parse(input as String, contextBuilder as crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter      | Type                                                                                                             | Beschreibung            |
| -------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------- |
| input          | String                                                                                                           | No description provided |
| contextBuilder | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCLiteralCommandNode.toString();
```


## Operatoren
### COMPARE

```zenscript
myMCCommandNode compare o as crafttweaker.api.commands.custom.MCCommandNode
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| o         | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |
### EQUALS

```zenscript
myMCLiteralCommandNode == o as Object
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

