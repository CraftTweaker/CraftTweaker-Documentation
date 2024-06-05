# AnimalTameEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.AnimalTameEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.neoforge.api.event.entity.living.AnimalTameEvent>(event => {
    println("AnimalTameEvent ran!");
});
```


## Supertype

AnimalTameEvent extends [LivingEvent](/neoforge/api/event/entity/living/LivingEvent). That means all methods available in [LivingEvent](/neoforge/api/event/entity/living/LivingEvent) are also available in AnimalTameEvent

## Implemented Interfaces
AnimalTameEvent implements the following interfaces. That means all methods defined in these interfaces are also available in AnimalTameEvent

- [ICancellableEvent](/neoforge/api/event/ICancellableEvent)

## Properties

|  Name  |                       Type                       | Has Getter | Has Setter |
|--------|--------------------------------------------------|------------|------------|
| entity | [Animal](/vanilla/api/entity/type/animal/Animal) | true       | false      |
| tamer  | [Player](/vanilla/api/entity/type/player/Player) | true       | false      |

