# MCCommandSource

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Methods
### getName

Return type: String

```zenscript
myMCCommandSource.getName();
```

### getPlayer

戻り値の型: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerNames

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### getTeamNames

戻り値の型: コレクション&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ を int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197034_1_ | int  | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(message as String);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| message   | String | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| Parameter    | Type     | Description             |
| ------------ | -------- | ----------------------- |
| フィードバック      | String   | No description provided |
| allowLogging | boolean型 | No description provided |


### withFeedback無効

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### minPermissionLevel

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ を int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No description provided |


### withPermissionLevel

戻り値の型: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ を int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No description provided |



