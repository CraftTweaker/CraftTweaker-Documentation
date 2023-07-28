# PistonStructureResolver

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.piston.PistonStructureResolver;
```


## Methods

:::group{name=getPushDirection}

Gets the direction that the piston is moving.

 This is usually the direction that the piston block is facing, however if the piston is retracting, the direction is the opposite.

Returns: The direction that the piston is moving.  
Return Type: [Direction](/vanilla/api/util/direction/Direction)

```zenscript
// PistonStructureResolver.getPushDirection() as Direction

myPistonStructureResolver.getPushDirection();
```

:::

:::group{name=getToDestroy}

Gets the blocks that will be destroyed by pushing the piston.

Returns: The blocks that will be destroyed.  
Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// PistonStructureResolver.getToDestroy() as stdlib.List<BlockPos>

myPistonStructureResolver.getToDestroy();
```

:::

:::group{name=getToPush}

Gets the blocks that will be pushed.

Returns: The blocks that will be pushed.  
Return Type: stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt;

```zenscript
// PistonStructureResolver.getToPush() as stdlib.List<BlockPos>

myPistonStructureResolver.getToPush();
```

:::

:::group{name=resolve}

Calculates and caches the blocks to push and the blocks to destroy.

Returns: True if blocks should move, false otherwise  
Return Type: boolean

```zenscript
// PistonStructureResolver.resolve() as boolean

myPistonStructureResolver.resolve();
```

:::


## Properties

|     Name      |                              Type                              | Has Getter | Has Setter |                                                                                           Description                                                                                            |
|---------------|----------------------------------------------------------------|------------|------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| pushDirection | [Direction](/vanilla/api/util/direction/Direction)             | true       | false      | Gets the direction that the piston is moving. <br />  <br />  This is usually the direction that the piston block is facing, however if the piston is retracting, the direction is the opposite. |
| toDestroy     | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt; | true       | false      | Gets the blocks that will be destroyed by pushing the piston.                                                                                                                                    |
| toPush        | stdlib.List&lt;[BlockPos](/vanilla/api/util/math/BlockPos)&gt; | true       | false      | Gets the blocks that will be pushed.                                                                                                                                                             |

