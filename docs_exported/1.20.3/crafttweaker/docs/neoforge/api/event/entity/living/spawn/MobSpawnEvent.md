# MobSpawnEvent

The event is not cancelable.

The event does not have a result.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.neoforge.api.event.entity.living.spawn.MobSpawnEvent;
```


## Extending EntityEvent

MobSpawnEvent extends [EntityEvent](/neoforge/api/event/entity/EntityEvent). That means all methods available in [EntityEvent](/neoforge/api/event/entity/EntityEvent) are also available in MobSpawnEvent

## Properties

|  Name  |                             Type                              | Has Getter | Has Setter |
|--------|---------------------------------------------------------------|------------|------------|
| entity | [Mob](/vanilla/api/entity/type/misc/Mob)                      | true       | false      |
| level  | [ServerLevelAccessor](/vanilla/api/world/ServerLevelAccessor) | true       | false      |
| x      | double                                                        | true       | false      |
| y      | double                                                        | true       | false      |
| z      | double                                                        | true       | false      |

