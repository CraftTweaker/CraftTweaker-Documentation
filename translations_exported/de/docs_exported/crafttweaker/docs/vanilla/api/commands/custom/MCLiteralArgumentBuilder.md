# MCLiteralArgumentBuilder

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCLiteralArgumentBuilder
```

## Implemented Interfaces
MCLiteralArgumentBuilder implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder)

## Methoden
### build

Rückgabetyp: [craftweaker.api.commands.custom.MCLiteralCommandNode](/vanilla/api/commands/custom/MCLiteralCommandNode)

```zenscript
myMCLiteralArgumentBuilder.build();
```

### equals

Return type: boolean

```zenscript
myMCLiteralArgumentBuilder.equals(o als Objekt);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |


### ausgeführt

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.executes(Befehl als crafttweaker.api.commands.custom.MCCommand);
```

| Parameter | Type                                                                                 | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------ | ----------------------- |
| command   | [crafttweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand) | No description provided |


### fork

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.fork(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier);
```

| Parameter | Type                                                                                                   | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |


### vorwärts

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.forward(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCRedirectModifier, fork as boolean);
```

| Parameter | Type                                                                                                   | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)           | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier) | No description provided |
| fork      | boolean                                                                                                | No description provided |


### getArgumente

Typ zurückgeben: Sammlung&lt;[crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)&gt;

```zenscript
myMCLiteralArgumentBuilder.getArguments();
```

### getCommand

Rückgabetyp: [craftweaker.api.commands.custom.MCCommand](/vanilla/api/commands/custom/MCCommand)

```zenscript
myMCLiteralArgumentBuilder.getCommand();
```

### getLiteral

Return type: String

```zenscript
myMCLiteralArgumentBuilder.getLiteral();
```

### getUmleitung

Rückgabetyp: [craftweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)

```zenscript
myMCLiteralArgumentBuilder.getRedirect();
```

### getRedirectModifizierer

Rückgabetyp: [craftweaker.api.commands.custom.MCRedirectModifier](/vanilla/api/commands/custom/MCRedirectModifier)

```zenscript
myMCLiteralArgumentBuilder.getRedirectModifier();
```

### getAnforderung

Typ zurückgeben: function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt;

```zenscript
myMCLiteralArgumentBuilder.getRequirement();
```

### hashCode

Return type: int

```zenscript
myMCLiteralArgumentBuilder.hashCode();
```

### isFork

Return type: boolean

```zenscript
myMCLiteralArgumentBuilder.isFork();
```

### umleiten

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |



Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.redirect(Ziel als crafttweaker.api.commands.custom.MCCommandNode, Modifikator als crafttweaker.api.commands.custom.MCSingleRedirectModifier);
```

| Parameter | Type                                                                                                               | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| target    | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode)                       | No description provided |
| modifier  | [crafttweaker.api.commands.custom.MCSingleRedirectModifier](/vanilla/api/commands/custom/MCSingleRedirectModifier) | No description provided |


### benötigt

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.requires(Anforderung als Funktion.Predicate<crafttweaker.api.commands.custom.MCCommandSource>);
```

| Parameter     | Type                                                                                                                                   | Beschreibung            |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| voraussetzung | function.Predicate&lt;[crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)&gt; | No description provided |


### dann

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCArgumentBuilder);
```

| Parameter | Type                                                                                                 | Beschreibung            |
| --------- | ---------------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCArgumentBuilder](/vanilla/api/commands/custom/MCArgumentBuilder) | No description provided |



Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
myMCLiteralArgumentBuilder.then(Argument als crafttweaker.api.commands.custom.MCCommandNode);
```

| Parameter | Type                                                                                         | Beschreibung            |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------- |
| argument  | [crafttweaker.api.commands.custom.MCCommandNode](/vanilla/api/commands/custom/MCCommandNode) | No description provided |


### toString

Return type: String

```zenscript
myMCLiteralArgumentBuilder.toString();
```


## Operatoren
### EQUALS

```zenscript
myMCLiteralArgumentBuilder == o als Objekt
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| o         | Object | No description provided |

## Casters

| Result type | Is Implicit |
| ----------- | ----------- |
| String      | true        |

