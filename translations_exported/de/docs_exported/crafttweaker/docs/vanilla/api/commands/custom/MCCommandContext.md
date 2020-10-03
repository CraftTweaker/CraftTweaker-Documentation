# MCCommandContext

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Methoden
### copyFor

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------ | ----------------------- |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | No description provided |


### equals

Return type: boolean

```zenscript
myMCCommandContext.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### getArgument

Return type: String

```zenscript
myMCCommandContext.getArgument(Name als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### getChild

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getChild();
```

### getCommand

Rückgabetyp: [craftweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContext.getCommand();
```

### getInput

Return type: String

```zenscript
myMCCommandContext.getInput();
```

### getLastChild

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.getLastChild();
```

### getNodes

Typ zurückgeben: Liste&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContext.getNodes();
```

### getBereich

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContext.getRange();
```

### getRedirectModifizierer

Rückgabetyp: [craftweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCCommandContext.getRedirectModifier();
```

### getRootNode

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContext.getRootNode();
```

### getSource

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContext.getSource();
```

### hasNodes

Return type: boolean

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Return type: int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

Return type: boolean

```zenscript
myMCCommandContext.isForked();
```

### toString

Return type: String

```zenscript
myMCCommandContext.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCCommandContext == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

