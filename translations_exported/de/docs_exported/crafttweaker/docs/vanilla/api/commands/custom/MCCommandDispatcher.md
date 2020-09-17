# MCCommandDispatcher

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCCommandDispatcher
```

## Methoden
### gleich

Rückgabetyp: boolesch

```zenscript
myMCCommandDispatcher.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### ausführen

Rückgabetyp: int

```zenscript
myMCCommandDispatcher.execute(parse als crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Keine Beschreibung angegeben |



Rückgabetyp: int

```zenscript
myMCCommandDispatcher.execute(Eingabe als String, Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| input     | String                                                                                           | Keine Beschreibung angegeben |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |



Rückgabetyp: int

```zenscript
myMCCommandDispatcher.execute(Eingabe als com.mojang.brigadier.StringReader, Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| input     | com.mojang.brigadier.StringReader                                                                | Keine Beschreibung angegeben |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |


### findAmbiguitäten

```zenscript
myMCCommandDispatcher.findAmbiguities(Verbraucher als crafttweaker.api.commands.custom.MCAmbiguityConsumer);
```

| Parameter   | Type                                                                                                     | Beschreibung                 |
| ----------- | -------------------------------------------------------------------------------------------------------- | ---------------------------- |
| konsumenten | [crafttweaker.api.commands.custom.MCAmbiguityConsumer](/vanilla/api/commands/custom/MCAmbiguityConsumer) | Keine Beschreibung angegeben |


### findnode

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCCommandDispatcher.findNode(Pfad als Sammlung<String>);
```

| Parameter | Type                               | Beschreibung                 |
| --------- | ---------------------------------- | ---------------------------- |
| pfad      | Sammlung&lt;String&gt; | Keine Beschreibung angegeben |


### getAllNutzung

Rückgabetyp: String[]

```zenscript
myMCCommandDispatcher.getAllUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource, limited as boolean);
```

| Parameter     | Type                                                                                             | Beschreibung                 |
| ------------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| knoten        | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Keine Beschreibung angegeben |
| quell         | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |
| eingeschränkt | boolean                                                                                          | Keine Beschreibung angegeben |


### getCompletionSuggestions

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse als crafttweaker.api.commands.custom.MCParseResults);
```

| Parameter | Type                                                                                           | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Keine Beschreibung angegeben |



Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestions](/vanilla/api/commands/custom/MCSuggestions)

```zenscript
myMCCommandDispatcher.getCompletionSuggestions(parse als crafttweaker.api.commands.custom.MCParseResults, Cursor als int);
```

| Parameter | Type                                                                                           | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------- | ---------------------------- |
| parse     | [crafttweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults) | Keine Beschreibung angegeben |
| cursor    | int                                                                                            | Keine Beschreibung angegeben |


### getPfad

Rückgabetyp: Sammlung&lt;String&gt;

```zenscript
myMCCommandDispatcher.getPath(Ziel als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Keine Beschreibung angegeben |


### getRoot

Rückgabetyp: [craftweaker.api.commands.custom.MCRootCommandNode](/vanilla/api/commands/custom/MCRootCommandNode)

```zenscript
myMCCommandDispatcher.getRoot();
```

### getSmartUsage

Rückgabetyp: String[[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)]

```zenscript
myMCCommandDispatcher.getSmartUsage(node as crafttweaker.api.commands.custom.MCCommandNode, source as crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| knoten    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)     | Keine Beschreibung angegeben |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |


### hashCode

Rückgabetyp: int

```zenscript
myMCCommandDispatcher.hashCode();
```

### parse

Rückgabetyp: [craftweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(Befehl als String, Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | String                                                                                           | Keine Beschreibung angegeben |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |



Rückgabetyp: [craftweaker.api.commands.custom.MCParseResults](/vanilla/api/commands/custom/MCParseResults)

```zenscript
myMCCommandDispatcher.parse(Befehl als com.mojang.brigadier.StringReader, Quelle als crafttweaker.api.commands.custom.MCCommandSource);
```

| Parameter | Type                                                                                             | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | com.mojang.brigadier.StringReader                                                                | Keine Beschreibung angegeben |
| quell     | [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource) | Keine Beschreibung angegeben |


### registrieren

Rückgabetyp: [craftweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCCommandDispatcher.register(Befehl als crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | Keine Beschreibung angegeben |


### setConsumer

```zenscript
myMCCommandDispatcher.setConsumer(Verbraucher als crafttweaker.api.commands.custom.MCResultConsumer);
```

| Parameter   | Type                                                                                               | Beschreibung                 |
| ----------- | -------------------------------------------------------------------------------------------------- | ---------------------------- |
| konsumenten | [crafttweaker.api.commands.custom.MCResultConsumer](/vanilla/api/commands/custom/MCResultConsumer) | Keine Beschreibung angegeben |


### toString

Rückgabetyp: String

```zenscript
myMCCommandDispatcher.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCCommandDispatcher == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

