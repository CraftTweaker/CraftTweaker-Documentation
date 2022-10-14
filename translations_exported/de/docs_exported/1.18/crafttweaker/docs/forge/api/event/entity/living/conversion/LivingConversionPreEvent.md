# LivingConversionPreEvent

The event is triggered when an entity is trying to replace itself with another entity. This event may trigger every tick even if it was cancelled last tick for entities like Zombies and Hoglins.

The event is cancelable.

If the event is canceled, the replacement will not occur

The event does not have a result.



## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.living.conversion.LivingConversionPreEvent;
```


## Extending LivingConversionEvent

LivingConversionPreEvent extends [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent). That means all methods available in [LivingConversionEvent](/forge/api/event/entity/living/conversion/LivingConversionEvent) are also available in LivingConversionPreEvent

## Methoden

:::group{name=getOutcome}

Return Type: [EntityType](/vanilla/api/entity/EntityType)

```zenscript
// LivingConversionPreEvent.getOutcome() as EntityType

myLivingConversionPreEvent.getOutcome();
```

:::

:::group{name=setConversionTimer}

Sets the conversion timer, by changing this it prevents the event being triggered every tick Do note the timer of some of the entities are increments, but some of them are decrements Not every conversion is applicable for this

```zenscript
LivingConversionPreEvent.setConversionTimer(ticks as int)
```

| Parameter | Type |
| --------- | ---- |
| ticks     | int  |


:::


## Properties

| Name    | Type                                         | Has Getter | Has Setter |
| ------- | -------------------------------------------- | ---------- | ---------- |
| outcome | [EntityType](/vanilla/api/entity/EntityType) | true       | false      |

