# MCLevelChange

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange>);
```
| Parámetro | Tipo                                                                                                                                                | Descripción             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerXpEvent.MCLevelChange](/vanilla/api/event/entity/player/PlayerXpEvent/MCLevelChange)> | No description provided |



## Métodos
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getEntityPlayer();
```

### getLevels

Returns int

```zenscript
myMCLevelChange.getLevels();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCLevelChange.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCLevelChange.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCLevelChange.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCLevelChange.isCanceled();
```

### setCanceled

```zenscript
myMCLevelChange.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |


### setLevels

```zenscript
myMCLevelChange.setLevels(levels as int);
```

| Parámetro | Tipo | Descripción             |
| --------- | ---- | ----------------------- |
| levels    | int  | No description provided |



