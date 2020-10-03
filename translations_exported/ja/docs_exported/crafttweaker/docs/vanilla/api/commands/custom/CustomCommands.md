# カスタムコマンド

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.CustomCommands
```

## Methods
### 引数

戻り値の型: [crafttweaker.api.commands.custom.MCRequiredArgumentBuilder](/vanilla/api/commands/custom/MCRequiredArgumentBuilder)

```zenscript
crafttweaker.api.commands.customCommands.argument(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### リテラル

戻り値の型: [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder)

```zenscript
crafttweaker.api.commands.customCommands.literal(name as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| name      | String | No description provided |


### registerCommand

```zenscript
crafttweaker.api.commands.custom.CustomCommands.registerCommand(builder as crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder);
```

| Parameter | Type                                                                                                                | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| ビルダー:     | [crafttweaker.api.commands.custom.MCLIiteralArgumentBuilder](/vanilla/api/commands/custom/MCLiteralArgumentBuilder) | No description provided |



