# MCCriticalHitEvent

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.event.entity.player.MCCriticalHitEvent
```

## Constructors
```zenscript
new crafttweaker.api.event.entity.player.MCCriticalHitEvent(handler as function.Consumer<crafttweaker.api.event.entity.player.MCCriticalHitEvent>);
```
| Parameter | Type                                                                                                                              | Description             |
| --------- | --------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| handler   | function.Consumer<[crafttweaker.api.event.entity.player.MCCriticalHitEvent](/vanilla/api/event/entity/player/MCCriticalHitEvent)> | No description provided |



## Methods
### getDamageModifier

The damage modifier for the hit.<br> This is by default 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getDamageModifier();
```

### getEntityPlayer

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getEntityPlayer();
```

### getOldDamageModifier

The orignal damage modifier for the hit wthout any changes.<br> This is 1.5F for ciritcal hits and 1F for normal hits .

Returns float

```zenscript
myMCCriticalHitEvent.getOldDamageModifier();
```

### getPlayer

Returns: `Player`

Returns [crafttweaker.api.entity.player.MCPlayerEntity](/vanilla/api/entity/player/MCPlayerEntity)

```zenscript
myMCCriticalHitEvent.getPlayer();
```

### hasResult

Determines if this event expects a significant result value. Note: Events with the HasResult annotation will have this method automatically added to return true.

Returns boolean

```zenscript
myMCCriticalHitEvent.hasResult();
```

### isCancelable

Determine if this function is cancelable at all. Returns: `If access to setCanceled should be allowed
 Note:
 Events with the Cancelable annotation will have this method automatically added to return true.`

Returns boolean

```zenscript
myMCCriticalHitEvent.isCancelable();
```

### isCanceled

Determine if this event is canceled and should stop executing. Returns: `The current canceled state`

Returns boolean

```zenscript
myMCCriticalHitEvent.isCanceled();
```

### isVanillaCritical

Returns true if this hit was critical by vanilla

Returns boolean

```zenscript
myMCCriticalHitEvent.isVanillaCritical();
```

### setCanceled

```zenscript
myMCCriticalHitEvent.setCanceled(cancel as boolean);
```

| Parameter | Type    | Description             |
| --------- | ------- | ----------------------- |
| cancel    | boolean | No description provided |


### setDamageModifier

This set the damage multiplier for the hit. If you set it to 0, then the particles are still generated but damage is not done.

```zenscript
myMCCriticalHitEvent.setDamageModifier(mod as float);
```

| Parameter | Type  | Description             |
| --------- | ----- | ----------------------- |
| mod       | float | No description provided |



