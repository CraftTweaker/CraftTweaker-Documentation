# Benutzerdefinierte Befehle

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.Custom.CustomCommands
```

## Methoden
### argument

Rückgabetyp: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument(Name als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### wörtlich

Rückgabetyp: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(Name als String);
```

| Parameter | Type   | Beschreibung            |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### registerbefehl

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter | Type                                                                                                               | Beschreibung            |
| --------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| bauer     | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |



