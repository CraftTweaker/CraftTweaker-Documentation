# MCPlayerSetSpawnEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent>);
```
| Parámetro | Tipo                                                                                                                                    | Descripción             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerSetSpawnEvent](/vanilla/api/event/entity/player/MCPlayerSetSpawnEvent)> | No description provided |



## Métodos
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getEntityPlayer();
```

### getNewSpawn

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCPlayerSetSpawnEvent.getNewSpawn();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerSetSpawnEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCPlayerSetSpawnEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCPlayerSetSpawnEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCPlayerSetSpawnEvent.isCanceled();
```

### es forzado

This event is called before a player's spawn point is changed. The event can be canceled, and no further processing will be done.

Returns boolean

```zenscript
myMCPlayerSetSpawnEvent.isForced();
```

### setCanceled

```zenscript
myMCPlayerSetSpawnEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



