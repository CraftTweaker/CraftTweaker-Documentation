# CustomCommands

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
import crafttweaker.api.commands.custom.CustomCommands;
```


## Methods

### argument

Return Type: [MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
CustomCommands.argument(name as String) as MCRequiredArgumentBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### literal

Return Type: [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
CustomCommands.literal(name as String) as MCLiteralArgumentBuilder
```
| Parameter | Type | Description |
|-----------|------|-------------|
| name | String | No Description Provided |
### registerCommand

Return Type: void

```zenscript
CustomCommands.registerCommand(builder as MCLiteralArgumentBuilder) as void
```
| Parameter | Type | Description |
|-----------|------|-------------|
| builder | [MCLiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No Description Provided |
