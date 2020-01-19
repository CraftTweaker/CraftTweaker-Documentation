# MCPlayerWakeUpEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent>);
```
| Parameter | Type                                                                                                                                | Description             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCPlayerWakeUpEvent](/vanilla/api/event/entity/player/MCPlayerWakeUpEvent)> | No description provided |



## Methods
### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCPlayerWakeUpEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.isCanceled();
```

### setCanceled

```zenscript
myMCPlayerWakeUpEvent.setCanceled(cancel as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |


### shouldSetSpawn

Indicates if the player's sleep was considered successful. In vanilla, this is used to determine if the spawn chunk is to be set to the bed's position.

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.shouldSetSpawn();
```

### updateWorld

Indicates if the server should be notified of sleeping changes. This will only be false if the server is considered 'up to date' already, because, for example, it initiated the call.

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.updateWorld();
```

### wakeImmediately

Used for the 'wake up animation'. This is false if the player is considered 'sleepy' and the overlay should slowly fade away.

Returns boolean

```zenscript
myMCPlayerWakeUpEvent.wakeImmediately();
```


