# MCPlayerFlyableFallEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent>);
```
| Parámetro | Tipo                                                                                                                                          | Descripción             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerFlyableFallEvent](/vanilla/api/event/entity/player/MCPlayerFlyableFallEvent)> | No description provided |



## Métodos
### getDistance

Returns float

```zenscript
myMCPlayerFlyableFallEvent.getDistance();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getEntityPlayer();
```

### getMultiplier

Returns float

```zenscript
myMCPlayerFlyableFallEvent.getMultiplier();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerFlyableFallEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCPlayerFlyableFallEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCPlayerFlyableFallEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCPlayerFlyableFallEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerFlyableFallEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |


### setDistance

```zenscript
myMCPlayerFlyableFallEvent.setDistance(distance as float);
```

| Parámetro | Tipo     | Descripción             |
| --------- | -------- | ----------------------- |
| distance  | flotante | No description provided |


### setMultiplier

```zenscript
myMCPlayerFlyableFallEvent.setMultiplier(multiplier as float);
```

| Parámetro  | Tipo     | Descripción             |
| ---------- | -------- | ----------------------- |
| multiplier | flotante | No description provided |



