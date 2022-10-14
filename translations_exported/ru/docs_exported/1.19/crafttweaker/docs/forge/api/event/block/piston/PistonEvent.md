# PistonEvent

Base piston event, use [PistonEventPost](/forge/api/event/block/piston/PistonEventPost) and [PistonPreEvent](/forge/api/event/block/piston/PistonPreEvent)

The event is not cancelable.

The event does not have a result.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.event.block.piston.PistonEvent;
```


## Extending BlockEvent

PistonEvent extends [BlockEvent](/forge/api/event/block/BlockEvent). That means all methods available in [BlockEvent](/forge/api/event/block/BlockEvent) are also available in PistonEvent

## Методы

:::group{name=getDirection}

Gets the direction that the piston is facing.

Returns: the direction tha the piston is facing.  
Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// PistonEvent.getDirection() as Direction

myPistonEvent.getDirection();
```

:::

:::group{name=getFaceOffsetPos}

Gets the position that the piston is facing towards.

Returns: The position that the piston is facing towards.  
Return Type: [BlockPos](/vanilla/api/util/math/BlockPos)

```zenscript
// PistonEvent.getFaceOffsetPos() as BlockPos

myPistonEvent.getFaceOffsetPos();
```

:::

:::group{name=getPistonMoveType}

Gets the move type of the piston (is it extending or retracting).

Returns: The move type of the piston.  
Return Type: [PistonMoveType](/forge/api/event/block/piston/PistonMoveType)

```zenscript
// PistonEvent.getPistonMoveType() as PistonMoveType

myPistonEvent.getPistonMoveType();
```

:::

:::group{name=getStructureHelper}

Gets a **nullable** structure resolver that can be used to get all the blocks that will be affected by the piston.

 Be sure to call the `resolve()` method on the structure resolver

Returns: A structure resolver.  
Return Type: [PistonStructureResolver](/vanilla/api/block/type/piston/PistonStructureResolver)?

```zenscript
// PistonEvent.getStructureHelper() as PistonStructureResolver?

myPistonEvent.getStructureHelper();
```

:::


## Свойства

| Название        | Тип                                                                                | Имеет Getter | Имеет Setter | Описание                                                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------- | ------------ | ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| direction       | [Direction](/vanilla/api/util/direction/Direction)                                 | true         | false        | Gets the direction that the piston is facing.                                                                                                                                                                   |
| faceOffsetPos   | [BlockPos](/vanilla/api/util/math/BlockPos)                                        | true         | false        | Gets the position that the piston is facing towards.                                                                                                                                                            |
| pistonMoveType  | [PistonMoveType](/forge/api/event/block/piston/PistonMoveType)                     | true         | false        | Gets the move type of the piston (is it extending or retracting).                                                                                                                                               |
| structureHelper | [PistonStructureResolver](/vanilla/api/block/type/piston/PistonStructureResolver)? | true         | false        | Gets a **nullable** structure resolver that can be used to get all the blocks that will be affected by the piston. <br />  <br />  Be sure to call the `resolve()` method on the structure resolver |

