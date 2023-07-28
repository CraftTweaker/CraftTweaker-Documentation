# BabyEntitySpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.forge.api.event.entity.living.BabyEntitySpawnEvent;
```


## Extending Event

BabyEntitySpawnEvent extends [Event](/forge/api/event/Event). That means all methods available in [Event](/forge/api/event/Event) are also available in BabyEntitySpawnEvent

## Properties

|      Name      |                          Type                           | Has Getter | Has Setter |
|----------------|---------------------------------------------------------|------------|------------|
| causedByPlayer | [Player](/vanilla/api/entity/type/player/Player)?       | true       | false      |
| child          | [AgeableMob](/vanilla/api/entity/type/misc/AgeableMob)? | true       | true       |
| parentA        | [Mob](/vanilla/api/entity/type/misc/Mob)                | true       | false      |
| parentB        | [Mob](/vanilla/api/entity/type/misc/Mob)                | true       | false      |

