# MCRightClickEmpty

Esta clase fue añadida por un mod con la ID  `crafttweaker`. Necesitas tener este mod instalado si quieres usar esta caracteristica.

## Importar la clase
Puede ser requerido que importes el paquete si encuentras algun problema (como crear un Array).
```zenscript
crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickEmpty
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickEmpty(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickEmpty>);
```
| Parámetro | Tipo                                                                                                                                                                    | Descripción             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerInteractEvent.MCRightClickEmpty](/vanilla/api/event/entity/player/PlayerInteractEvent/MCRightClickEmpty)> | No description provided |



## Métodos
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickEmpty.getEntityPlayer();
```

### getFace

Returns: `The face involved in this interaction. For all non-block interactions, this will return null.`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
myMCRightClickEmpty.getFace();
```

### getItemStack

Returns: `The itemstack involved in this interaction, {` @code ItemStack.EMPTY} if the hand was empty.

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCRightClickEmpty.getItemStack();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCRightClickEmpty.getPlayer();
```

### getPos

If the interaction was on an entity, will be a BlockPos centered on the entity. If the interaction was on a block, will be the position of that block. Otherwise, will be a BlockPos centered on the player. Will never be null. Returns: `The position involved in this interaction.`

Returns [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
myMCRightClickEmpty.getPos();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCRightClickEmpty.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCRightClickEmpty.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCRightClickEmpty.isCanceled();
```

### setCanceled

```zenscript
myMCRightClickEmpty.setCanceled(cancel as boolean);
```

| Parámetro | Tipo    | Descripción             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



