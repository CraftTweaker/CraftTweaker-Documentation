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

Return type: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### getPlayerNames

Return type: Collection&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Return type: Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### getTeamNames

Return type: Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ as int);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| p_197034_1_ | int | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### sendErrorMessage

```zenscript
myMCCommandSource.sendErrorMessage(message as String);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| message | String | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| feedback | String | No description provided |
| allowLogging | boolean | No description provided |


### withFeedbackDisabled

Return type: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### withMinPermissionLevel

Return type: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ as int);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| p_197026_1_ | int | No description provided |


### withPermissionLevel

Return type: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ as int);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| p_197033_1_ | int | No description provided |



