# LivingExperienceDropEvent



The event is cancelable.

If the event is canceled, the experience will not drop.

The event does not have a result.



## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.entity.living.LivingExperienceDropEvent;
```


## Extending LivingEvent

LivingExperienceDropEvent extends [LivingEvent](/forge/api/event/entity/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/LivingEvent) are also available in LivingExperienceDropEvent

## Methods

:::group{name=getAttackingPlayer}

Return Type: [Player](/vanilla/api/entity/type/player/Player)

```zenscript
// LivingExperienceDropEvent.getAttackingPlayer() as Player

myLivingExperienceDropEvent.getAttackingPlayer();
```

:::

:::group{name=getDroppedExperience}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getDroppedExperience() as int

myLivingExperienceDropEvent.getDroppedExperience();
```

:::

:::group{name=getDroppedExperience}

Return Type: void

```zenscript
LivingExperienceDropEvent.getDroppedExperience(value as int) as void
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| value     | int  | No Description Provided |


:::

:::group{name=getOriginalExperiencePoints}

Return Type: int

```zenscript
// LivingExperienceDropEvent.getOriginalExperiencePoints() as int

myLivingExperienceDropEvent.getOriginalExperiencePoints();
```

:::


## Properties

| 이름                       | Type                                             | Has Getter | Has Setter | Description             |
| ------------------------ | ------------------------------------------------ | ---------- | ---------- | ----------------------- |
| attackingPlayer          | [Player](/vanilla/api/entity/type/player/Player) | true       | false      | No Description Provided |
| droppedExperience        | int                                              | true       | true       | No Description Provided |
| originalExperiencePoints | int                                              | true       | false      | No Description Provided |

