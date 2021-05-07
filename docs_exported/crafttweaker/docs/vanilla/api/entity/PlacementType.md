# PlacementType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.PlacementType;
```


## Extending Enum&lt;PlacementType&gt;

PlacementType extends Enum&lt;[PlacementType](/vanilla/api/entity/PlacementType)&gt;. That means all methods available in Enum&lt;[PlacementType](/vanilla/api/entity/PlacementType)&gt; are also available in PlacementType

## Static Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| IN_LAVA | [PlacementType](/vanilla/api/entity/PlacementType) | true | false | No Description Provided |
| IN_WATER | [PlacementType](/vanilla/api/entity/PlacementType) | true | false | No Description Provided |
| NO_RESTRICTIONS | [PlacementType](/vanilla/api/entity/PlacementType) | true | false | No Description Provided |
| ON_GROUND | [PlacementType](/vanilla/api/entity/PlacementType) | true | false | No Description Provided |

## Methods

:::group{name=canSpawnAt}

Checks if a specific entity type can spawn in the world at the given position with this PlacementType.

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


