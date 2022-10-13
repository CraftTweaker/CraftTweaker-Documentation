# MCItemSmeltedEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent>);
```
| Parameter | Type                                                                                                                                                      | Description             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.PlayerEvent.MCItemSmeltedEvent](/vanilla/api/event/entity/player/PlayerEvent/MCItemSmeltedEvent)> | No description provided |



## Methods
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemSmeltedEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemSmeltedEvent.getPlayer();
```

### getSmelting

Returns [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
myMCItemSmeltedEvent.getSmelting();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCItemSmeltedEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCItemSmeltedEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCItemSmeltedEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemSmeltedEvent.setCanceled(cancel as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



