# MCRequiredArgumentBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCRequiredArgumentBuilder
```

## Implemented Interfaces
MCRequiredArgumentBuilder implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Methoden
### build

Rückgabetyp: [crafttweaker.api.commands.custom.MCArgumentCommandNode](/vanilla/api/commands/custom/MCArgumentCommandNode)

```zenscript
myMCRequiredArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ausgeführt

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.executes(Befehl als crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.fork(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### vorwärts

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.forward(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork      | boolean                                                                                                | No description provided |


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

Return type: String

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

Return type: int

```zenscript
myMCRequiredArgumentBuilder.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCRequiredArgumentBuilder.isFork();
```

### umleiten

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### benötigt

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.requires(Anforderung als Funktion.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter     | Type                                                                                                                                   | Beschreibung            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| voraussetzung | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### suggeriert

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.suggests(Provider als crafttweaker.api.commands.custom.MCSuggestionProvider);
```

| Parameter | Type                                                                                                       | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| provider  | [crafttweaker.api.commands.custom.MCSuggestionProvider](/vanilla/api/commands/custom/MCSuggestionProvider) | No description provided |


### dann

Rückgabetyp: [craftweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
myMCRequiredArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCRequiredArgumentBuilder);
```

| Parameter | Type                                                                                                                 | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder) | No description provided |


### toString

Return type: String

```zenscript
myMCRequiredArgumentBuilder.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCRequiredArgumentBuilder == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

