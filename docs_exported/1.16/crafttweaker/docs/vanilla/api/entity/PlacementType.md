# PlacementType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.PlacementType;
```


## Enum Constants

PlacementType is an enum. It has 4 enum constants. They are accessible using the code below.

```zenscript
PlacementType.ON_GROUND
PlacementType.IN_WATER
PlacementType.NO_RESTRICTIONS
PlacementType.IN_LAVA
```
## Methods

:::group{name=canSpawnAt}

Checks if a specific entity type can spawn in the world at the given position with this PlacementType.

Returns: True if the entity type can spawn. False otherwise.  
Return Type: boolean

```zenscript
// PlacementType.canSpawnAt(world as MCWorld, pos as BlockPos, entityType as MCEntityType) as boolean

myPlacementType.canSpawnAt(world, new BlockPos(1,2,3), <entitytype:minecraft:pig>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| world | [MCWorld](/vanilla/api/world/MCWorld) | A World object. |
| pos | [BlockPos](/vanilla/api/util/BlockPos) | The position to check at. |
| entityType | [MCEntityType](/vanilla/api/entities/MCEntityType) | The EntityType to check for. |


:::


