# MCAnvilRepairEvent

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.MCAnvilRepairEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCAnvilRepairEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCAnvilRepairEvent>);
```
| Parámetro | Tipo                                                                                                                              | Descripción             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCAnvilRepairEvent](/vanilla/api/event/entity/player/MCAnvilRepairEvent)> | No description provided |



## Métodos
### getBreakChance

Returns float

```zenscript
myMCAnvilRepairEvent.getBreakChance();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getEntityPlayer();
```

### getIngredientInput

Get the second item input into the anvil Returns: `the second input slot`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getIngredientInput();
```

### getItemInput

Get the first item input into the anvil Returns: `the first input slot`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemInput();
```

### getItemResult

Get the output result from the anvil Returns: `the output`

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCAnvilRepairEvent.getItemResult();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCAnvilRepairEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCAnvilRepairEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCAnvilRepairEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCAnvilRepairEvent.isCanceled();
```

### setBreakChance

```zenscript
myMCAnvilRepairEvent.setBreakChance(breakChance as float);
```

| Parámetro | Tipo     | Descripción             |
| --------- | -------- | ----------------------- |
| rompeolas | flotante | No description provided |


### setCanceled

```zenscript
myMCAnvilRepairEvent.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



