# MCPlayerLoggedOutEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedOutEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedOutEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedOutEvent>);
```
| Parámetro | Tipo                                                                                                                                                              | Descripción             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCPlayerLoggedOutEvent](/vanilla/api/event/entity/player/PlayerEvent/MCPlayerLoggedOutEvent)> | No description provided |



## Métodos
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerLoggedOutEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerLoggedOutEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCPlayerLoggedOutEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCPlayerLoggedOutEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCPlayerLoggedOutEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerLoggedOutEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



