# MCSleepingLocationCheckEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent>);
```
| Parameter | Type                                                                                                                                                  | Description             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCSleepingLocationCheckEvent](/vanilla/api/event/entity/player/MCSleepingLocationCheckEvent)> | No description provided |



## Methods
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

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| cancel    | boolean型 | No description provided |



