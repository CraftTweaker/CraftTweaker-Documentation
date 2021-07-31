# MCUseHoeEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.MCUseHoeEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCUseHoeEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCUseHoeEvent>);
```
| Parameter | Type                                                                                                                    | Beschreibung            |
| --------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCUseHoeEvent](/vanilla/api/event/entity/player/MCUseHoeEvent)> | No description provided |



## Methoden
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCUseHoeEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCUseHoeEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCUseHoeEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCUseHoeEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCUseHoeEvent.isCanceled();
```

### setCanceled

```zenscript
myMCUseHoeEvent.setCanceled(cancel as boolean);
```

| Parameter | Type    | Beschreibung            |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



