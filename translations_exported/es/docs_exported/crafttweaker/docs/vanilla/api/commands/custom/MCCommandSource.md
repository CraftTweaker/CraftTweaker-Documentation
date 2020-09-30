# Fuente MCCommandSource

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

Tipo de retorno: (@org.openzen.zencode.java.ZenCodeType.Nullable :: MCPlayerEntity)

```zenscript
myMCCommandSource.getPlayer();
```

### Nombre del jugador

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandSource.getPlayerNames();
```

### Entidad objetivo

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandSource.getTargetedEntity();
```

### obtener nombres de equipo

Tipo de retorno: Colección&lt;String&gt;

```zenscript
myMCCommandSource.getTeamNames();
```

### hasPermissionLevel

Return type: boolean

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ as int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| y 197034_1_ | int  | No description provided |


### isPlayer

Return type: boolean

```zenscript
myMCCommandSource.isPlayer();
```

### enviar mensaje de error

```zenscript
myMCCommandSource.sendErrorMessage(mensaje como cadena);
```

| Parameter | Type   | Description             |
| --------- | ------ | ----------------------- |
| message   | String | No description provided |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| Parameter    | Type    | Description             |
| ------------ | ------- | ----------------------- |
| comentarios  | String  | No description provided |
| allowLogging | boolean | No description provided |


### con FeedbackDeshabilitado

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withFeedbackDisabled();
```

### con nivel de MinPermiso

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withMinPermissionLevel(p_197026_1_ as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| 1_        | int  | No description provided |


### sin nivel de permiso

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ as int);
```

| Parameter     | Type | Description             |
| ------------- | ---- | ----------------------- |
| a 197033_1_ | int  | No description provided |



