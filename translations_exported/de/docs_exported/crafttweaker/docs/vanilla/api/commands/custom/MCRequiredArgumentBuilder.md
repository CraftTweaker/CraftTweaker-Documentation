# MCRequiredArgumentBuilder

Diese Klasse wurde von einer Mod mit mod-id `crafttweaker` hinzugefügt. Wenn Sie diese Funktion nutzen möchten, müssen Sie diese Mod installiert haben.

## Diese Klasse importieren
Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (wie zum Beispiel ein Array zu bearbeiten), also besser sicher sein als bedauern und fügen Sie den Import.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Implementierte Schnittstellen
MCRequiredArgumentBuilder implementiert die folgenden Schnittstellen. Das bedeutet, dass jede ihnen zur Verfügung stehende Methode auch in dieser Klasse verwendet werden kann.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Methoden
### bauen

Rückgabetyp: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### gleich

Rückgabetyp: boolesch

```zenscript
myMCRequiredArgumentBuilder.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |


### ausgeführt

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(Befehl als crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------ | ---------------------------- |
| befehl    | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | Keine Beschreibung angegeben |


### fork

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------ | ---------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Keine Beschreibung angegeben |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Keine Beschreibung angegeben |


### vorwärts

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------ | ---------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | Keine Beschreibung angegeben |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | Keine Beschreibung angegeben |
| fork      | boolean                                                                                                | Keine Beschreibung angegeben |


### getArgumente

Typ zurückgeben: Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCRequiredArgumentBuilder.getArguments();
```

### getCommand

Rückgabetyp: [craftweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCRequiredArgumentBuilder.getCommand();
```

### getName

Rückgabetyp: String

```zenscript
myMCRequiredArgumentBuilder.getName();
```

### getUmleitung

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCRequiredArgumentBuilder.getRedirect();
```

### getRedirectModifizierer

Rückgabetyp: [craftweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCRequiredArgumentBuilder.getRedirectModifier();
```

### getAnforderung

Typ zurückgeben: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCRequiredArgumentBuilder.getRequirement();
```

### getSuggestionsProvider

Rückgabetyp: [craftweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider)

```zenscript
myMCRequiredArgumentBuilder.getSuggestionsProvider();
```

### hashCode

Rückgabetyp: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Rückgabetyp: boolesch

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### umleiten

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Keine Beschreibung angegeben |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Beschreibung                 |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | Keine Beschreibung angegeben |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | Keine Beschreibung angegeben |


### benötigt

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(Anforderung als Funktion.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter     | Type                                                                                                                                   | Beschreibung                 |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| voraussetzung | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | Keine Beschreibung angegeben |


### suggeriert

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(Provider als crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parameter | Type                                                                                                       | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------- |
| anbieter  | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | Keine Beschreibung angegeben |


### dann

Rückgabetyp: [craftweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Beschreibung                 |
| --------- | ---------------------------------------------------------------------------------------------------- | ---------------------------- |
| argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | Keine Beschreibung angegeben |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------- | ---------------------------- |
| argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | Keine Beschreibung angegeben |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parameter | Type                                                                                                                 | Beschreibung                 |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| argument  | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | Keine Beschreibung angegeben |


### toString

Rückgabetyp: String

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o als Objekt
```

| Parameter | Type   | Beschreibung                 |
| --------- | ------ | ---------------------------- |
| o         | Objekt | Keine Beschreibung angegeben |

## Zauberer

| Ergebnis-Typ | Ist Implizit |
| ------------ | ------------ |
| String       | true         |

