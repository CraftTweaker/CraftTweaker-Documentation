# AnimalTameEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.AnimalTameEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.AnimalTameEvent>(event => {
    println("AnimalTameEvent ran!");
});
```


## Supertype

AnimalTameEvent extends [LivingEvent](/forge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/forge/api/event/entity/living/LivingEvent) are also available in AnimalTameEvent

## Properties

|  Name  |                       Type                       | Has Getter | Has Setter |
|--------|--------------------------------------------------|------------|------------|
| entity | [Animal](/vanilla/api/entity/type/animal/Animal) | true       | false      |
| tamer  | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

