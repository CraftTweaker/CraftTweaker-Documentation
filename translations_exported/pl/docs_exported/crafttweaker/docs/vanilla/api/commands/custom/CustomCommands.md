# Własne polecenia

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Methods
### argument

Typ zwrotu: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.argument (nazwa jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### dosłowny

Typ zwrotu: [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.custom.CustomCommands.literal(nazwa jako String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### komenda rejestracyjna

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(konstruktor jako crafttweaker.api.commands.custom.MCLiteralArgumentBuilder);
```

| Parameter   | Type                                                                                                               | Description             |
| ----------- | ------------------------------------------------------------------------------------------------------------------ | ----------------------- |
| konstruktor | [crafttweaker.api.commands.custom.MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |



