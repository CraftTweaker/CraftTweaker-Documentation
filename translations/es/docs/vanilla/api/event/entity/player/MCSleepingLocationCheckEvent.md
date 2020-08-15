# MCSleepingLocationCheckEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent>);
```
| Parámetro | Tipo                                                                                                                                                  | Descripción             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent](/vanilla/api/event/entity/player/MCSleepingLocationCheckEvent)> | No description provided |



## Métodos
### getSleepingLocation

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCSleepingLocationCheckEvent.getSleepingLocation();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCSleepingLocationCheckEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCSleepingLocationCheckEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCSleepingLocationCheckEvent.isCanceled();
```

### setCanceled

```zenscript
myMCSleepingLocationCheckEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



