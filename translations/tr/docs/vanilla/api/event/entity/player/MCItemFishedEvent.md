# MCItemFishedEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.MCItemFishedEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCItemFishedEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCItemFishedEvent>);
```
| Parameter | Type                                                                                                                            | Description             |
| --------- | ------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCItemFishedEvent](/vanilla/api/event/entity/player/MCItemFishedEvent)> | No description provided |



## Methods
### damageRodBy

```zenscript
myMCItemFishedEvent.damageRodBy(arg0 as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| arg0      | int  | No description provided |


### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getEntityPlayer();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCItemFishedEvent.getPlayer();
```

### getRodDamage

Get the damage the rod will take. Returns: `The damage the rod will take`

Returns int

```zenscript
myMCItemFishedEvent.getRodDamage();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCItemFishedEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCItemFishedEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCItemFishedEvent.isCanceled();
```

### setCanceled

```zenscript
myMCItemFishedEvent.setCanceled(cancel as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |



