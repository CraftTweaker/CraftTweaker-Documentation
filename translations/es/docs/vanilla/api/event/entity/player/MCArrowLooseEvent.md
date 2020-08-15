# MCArrowLooseEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCArrowLooseEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCArrowLooseEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCArrowLooseEvent>);
```
| Parámetro | Tipo                                                                                                                            | Descripción             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCArrowLooseEvent](/vanilla/api/event/entity/player/MCArrowLooseEvent)> | No description provided |



## Métodos
### getBow

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCArrowLooseEvent.getBow();
```

### getCharge

Returns int

```zenscript
myMCArrowLooseEvent.getCharge();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCArrowLooseEvent.getPlayer();
```

### hasAmmo

Returns boolean

```zenscript
myMCArrowLooseEvent.hasAmmo();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCArrowLooseEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCArrowLooseEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCArrowLooseEvent.isCanceled();
```

### setCanceled

```zenscript
myMCArrowLooseEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |


### setCharge

```zenscript
myMCArrowLooseEvent.setCharge(charge as int);
```

| Parámetro | Tipo | Descripción             |
| --------- | ---- | ----------------------- |
| charge    | int  | No description provided |



