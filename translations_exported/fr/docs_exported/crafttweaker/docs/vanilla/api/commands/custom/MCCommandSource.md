# format@@0 MCCommandSource

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCCommandSource;
```


## Methods

### getName

Return Type: string

```zenscript
MCCommandSource.getName() as string
myMCCommandSource.getName();
```

### getPlayer

Return Type: [MCPlayerEntity](/vanilla/api/entity/MCPlayerEntity)

```zenscript
MCCommandSource.getPlayer() as MCPlayerEntity
myMCCommandSource.getPlayer();
```

### Obtenir les noms des joueurs

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getPlayerNames() as Collection<string>
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getTargetedEntity() as Collection<string>
myMCCommandSource.getTargetedEntity();
```

### Obtenir des noms d'équipe

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getTeamNames() as Collection<string>
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return Type: boolean

```zenscript
MCCommandSource.hasPermissionLevel(p_197034_1_ as int) as boolean
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197034_1_ | int  | No Description Provided |


### isPlayer

Return Type: boolean

```zenscript
MCCommandSource.isPlayer() as boolean
myMCCommandSource.isPlayer();
```

### Message d\'erreur d\'envoi

Return Type: void

```zenscript
MCCommandSource.sendErrorMessage(message as string) as void
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| message   | string | No Description Provided |


### sendFeedback

Return Type: void

```zenscript
MCCommandSource.sendFeedback(feedback as string, allowLogging as boolean) as void
```

| Parameter           | Type    | Description             |
| ------------------- | ------- | ----------------------- |
| retour d'expérience | string  | No Description Provided |
| allowLogging        | boolean | No Description Provided |


### Les commentaires ont été désactivés

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withFeedbackDisabled() as MCCommandSource
myMCCommandSource.withFeedbackDisabled();
```

### avec le niveau de permission minimum

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withMinPermissionLevel(p_197026_1_ as int) as MCCommandSource
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No Description Provided |


### avec le niveau de permission

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withPermissionLevel(p_197033_1_ as int) as MCCommandSource
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No Description Provided |



