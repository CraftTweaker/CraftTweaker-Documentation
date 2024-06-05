# LootingLevelEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.LootingLevelEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.LootingLevelEvent>(event => {
    println("LootingLevelEvent ran!");
});
```


## Supertype

LootingLevelEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in LootingLevelEvent

## Properties

|     Name     |                          Type                           | Has Getter | Has Setter |
|--------------|---------------------------------------------------------|------------|------------|
| damageSource | [DamageSource](/vanilla/api/world/damage/DamageSource)? | true       | false      |
| lootingLevel | int                                                     | true       | true       |

