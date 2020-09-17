# MCCommandContext

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContext
```

## Methoden
### copyFor

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContext.copyFor(Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |


### gleich

Rückgabetyp: boolesch

```zenscript
myMCCommandContext.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### getArgument

Rückgabetyp: String

```zenscript
myMCCommandContext.getArgument(Name als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| name      | String | Keine Beschreibung angegeben |


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

Rückgabetyp: String

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

Rückgabetyp: boolesch

```zenscript
myMCCommandContext.hasNodes();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCCommandContext.hashCode();
```

### isForked

Rückgabetyp: boolesch

```zenscript
myMCCommandContext.isForked();
```

### toString

Rückgabetyp: String

```zenscript
myMCCommandContext.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCCommandContext == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

