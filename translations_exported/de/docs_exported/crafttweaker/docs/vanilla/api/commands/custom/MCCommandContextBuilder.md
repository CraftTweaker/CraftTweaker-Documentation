# MCCommandContextBuilder

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCCommandContextBuilder
```

## Methoden
### bauen

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContext](/vanilla/api/commands/custom/MCCommandContext)

```zenscript
myMCCommandContextBuilder.build(Eingabe als String);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| input     | String | Keine Beschreibung angegeben |


### kopieren

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.copy();
```

### gleich

Rückgabetyp: boolesch

```zenscript
myMCCommandContextBuilder.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### findSuggestionContext

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionContext](/vanilla/api/commands/custom/MCSuggestionContext)

```zenscript
myMCCommandContextBuilder.findSuggestionContext(cursor as int);
```

| Parameter | Type | Beschreibung                 |
| --------- | ---- | ---------------------------- |
| cursor    | int  | Keine Beschreibung angegeben |


### getArgumente

Rückgabetyp: [craftweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument)[String]

```zenscript
myMCCommandContextBuilder.getArguments();
```

### getChild

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getChild();
```

### getCommand

Rückgabetyp: [craftweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCCommandContextBuilder.getCommand();
```

### getDispatcher

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandDispatcher](/vanilla/api/commands/custom/MCCommandDispatcher)

```zenscript
myMCCommandContextBuilder.getDispatcher();
```

### getLastChild

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.getLastChild();
```

### getNodes

Typ zurückgeben: Liste&lt;[crafttweaker.api.commands.custom.MCParsedCommandNode](/vanilla/api/commands/custom/MCParsedCommandNode)&gt;

```zenscript
myMCCommandContextBuilder.getNodes();
```

### getBereich

Rückgabetyp: [craftweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
myMCCommandContextBuilder.getRange();
```

### getRootNode

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandContextBuilder.getRootNode();
```

### getSource

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandContextBuilder.getSource();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCCommandContextBuilder.hashCode();
```

### toString

Rückgabetyp: String

```zenscript
myMCCommandContextBuilder.toString();
```

### mit Argument

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withArgument(Name als String, Argument als crafttweaker.api.commands.custom.MCParsedArgument);
```

| Parameter | Type                                                                                               | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------------- | ---------------------------- |
| name      | String                                                                                             | Keine Beschreibung angegeben |
| argument  | [crafttweaker.api.commands.custom.MCParsedArgument](/vanilla/api/commands/custom/MCParsedArgument) | Keine Beschreibung angegeben |


### ohne Kind

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withChild(Kind als crafttweaker.api.commands.custom.MCCommandContextBuilder);
```

| Parameter | Type                                                                                                             | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Kind      | [crafttweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder) | Keine Beschreibung angegeben |


### mit Befehl

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withCommand(Befehl als crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Keine Beschreibung angegeben |


### withNode

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withNode(node as crafttweaker.api.commands.custom.MCCommandNode, range as crafttweaker.api.commands.custom.MCStringRange);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| knoten    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Keine Beschreibung angegeben |
| range     | [crafttweaker.api.commands.custom.MCStringRange](/vanilla/api/commands/custom/MCStringRange) | Keine Beschreibung angegeben |


### mit Quelle

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandContextBuilder](/vanilla/api/commands/custom/MCCommandContextBuilder)

```zenscript
myMCCommandContextBuilder.withSource(Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |



## Operatoren
### EQUALS

```zenscript
myMCCommandContextBuilder == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

