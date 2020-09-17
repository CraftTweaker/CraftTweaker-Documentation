# Fuente MCCommandSource

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.commands.custom.MCCommandSource
```

## Métodos
### getName

Tipo de retorno: Cadena

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

### nivel de permiso

Tipo de retorno: booleano

```zenscript
myMCCommandSource.hasPermissionLevel(p_197034_1_ as int);
```

| Parámetro     | Tipo | Descripción                   |
| ------------- | ---- | ----------------------------- |
| y 197034_1_ | int  | No se proporcionó descripción |


### es Jugador

Tipo de retorno: booleano

```zenscript
myMCCommandSource.isPlayer();
```

### enviar mensaje de error

```zenscript
myMCCommandSource.sendErrorMessage(mensaje como cadena);
```

| Parámetro | Tipo   | Descripción                   |
| --------- | ------ | ----------------------------- |
| mensaje   | Cadena | No se proporcionó descripción |


### sendFeedback

```zenscript
myMCCommandSource.sendFeedback(feedback as String, allowLogging as boolean);
```

| Parámetro         | Tipo    | Descripción                   |
| ----------------- | ------- | ----------------------------- |
| comentarios       | Cadena  | No se proporcionó descripción |
| permitir registro | boolean | No se proporcionó descripción |


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

| Parámetro | Tipo | Descripción                   |
| --------- | ---- | ----------------------------- |
| 1_        | int  | No se proporcionó descripción |


### sin nivel de permiso

Tipo de retorno: [crafttweaker.api.commands.custom.MCCommandSource](/vanilla/api/commands/custom/MCCommandSource)

```zenscript
myMCCommandSource.withPermissionLevel(p_197033_1_ as int);
```

| Parámetro     | Tipo | Descripción                   |
| ------------- | ---- | ----------------------------- |
| a 197033_1_ | int  | No se proporcionó descripción |



