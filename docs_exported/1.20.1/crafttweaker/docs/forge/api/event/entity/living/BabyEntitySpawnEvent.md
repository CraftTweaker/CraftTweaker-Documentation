# BabyEntitySpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

Importing the class is recommended for events, simply add this line to the top of your script file.
```zenscript
import crafttweaker.forge.api.event.entity.living.BabyEntitySpawnEvent;
```


## Listening to the event

```zenscript
events.register<crafttweaker.forge.api.event.entity.living.BabyEntitySpawnEvent>(event => {
    println("BabyEntitySpawnEvent ran!");
});
```


## Supertype

BabyEntitySpawnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in BabyEntitySpawnEvent

## Properties

|      Name      |                          Type                           | Has Getter | Has Setter |
|----------------|---------------------------------------------------------|------------|------------|
| causedByPlayer | [Player](/vanilla/api/entity/type/player/Player)?       | true       | false      |
| child          | [AgeableMob](/vanilla/api/entity/type/misc/AgeableMob)? | true       | true       |
| parentA        | [Mob](/vanilla/api/entity/type/misc/Mob)                | true       | false      |
| parentB        | [Mob](/vanilla/api/entity/type/misc/Mob)                | true       | false      |

