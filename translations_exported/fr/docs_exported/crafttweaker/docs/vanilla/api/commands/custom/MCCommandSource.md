# format@@0 MCCommandSource

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

Type de retour: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### Obtenir les noms des joueurs

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### getTargetedEntity

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### Obtenir des noms d'équipe

Type de retour : Collection&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ comme int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197034_1_ | int  | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### Message d\'erreur d\'envoi

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

| Parameter           | Type    | Description             |
| ------------------- | ------- | ----------------------- |
| retour d'expérience | String  | No description provided |
| allowLogging        | boolean | No description provided |


### Les commentaires ont été désactivés

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedback();
```

### avec le niveau de permission minimum

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ comme int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197026_1_ | int  | No description provided |


### avec le niveau de permission

Type de retour : [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ comme int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| p_197033_1_ | int  | No description provided |



