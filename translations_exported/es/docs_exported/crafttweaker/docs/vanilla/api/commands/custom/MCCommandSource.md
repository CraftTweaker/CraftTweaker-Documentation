# Fuente MCCommandSource

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

### Nombre del jugador

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getPlayerNames() as Collection<string>
myMCCommandSource.getPlayerNames();
```

### Entidad objetivo

Return Type: Collection&lt;string&gt;

```zenscript
MCCommandSource.getTargetedEntity() as Collection<string>
myMCCommandSource.getTargetedEntity();
```

### obtener nombres de equipo

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
| y 197034_1_ | int  | No Description Provided |


### isPlayer

Return Type: boolean

```zenscript
MCCommandSource.isPlayer() as boolean
myMCCommandSource.isPlayer();
```

### enviar mensaje de error

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

| Parameter    | Type    | Description             |
| ------------ | ------- | ----------------------- |
| comentarios  | string  | No Description Provided |
| allowLogging | boolean | No Description Provided |


### con FeedbackDeshabilitado

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withFeedbackDisabled() as MCCommandSource
myMCCommandSource.withFeedbackDisabled();
```

### con nivel de MinPermiso

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withMinPermissionLevel(p_197026_1_ as int) as MCCommandSource
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| 1_        | int  | No Description Provided |


### sin nivel de permiso

Return Type: [MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
MCCommandSource.withPermissionLevel(p_197033_1_ as int) as MCCommandSource
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| a 197033_1_ | int  | No Description Provided |



