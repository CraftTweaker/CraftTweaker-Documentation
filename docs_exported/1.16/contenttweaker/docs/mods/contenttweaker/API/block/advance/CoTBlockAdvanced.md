# CoTBlockAdvanced

A registered CoT Block. Used for advanced functionality. like onRandomTick, onReplaced etc.
 
 These functions should be run in CraftTweaker scripts, instead of ContentTweaker ones. And they are reloadable.
 You can get it via advanced block BEP.

This class was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.advance.CoTBlockAdvanced;
```


## Methods

:::group{name=setBlockColorSupplier}

The block's color

Returns: the CoTBlockAdvanced, used for method chaining.  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setBlockColorSupplier(func as IBlockColorSupplier) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockColorSupplier](/mods/contenttweaker/API/functions/IBlockColorSupplier) | An IBlockColorSupplier. The tintIndex argument is defined by its model |


:::

:::group{name=setIsSideInvisible}

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setIsSideInvisible(func as IBlockIsSideInvisible) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockIsSideInvisible](/mods/contenttweaker/API/functions/IBlockIsSideInvisible) | No Description Provided |


:::

:::group{name=setOnActivated}

Sets what will happen when a player right-clicks the block

Returns: the CoTBlockAdvanced, used for method chaining  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnActivated(func as IBlockActivated) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockActivated](/mods/contenttweaker/API/functions/IBlockActivated) | An IBlockActivated function, the function should return an ActionResultType |


:::

:::group{name=setOnAdded}

Sets what will happen when the block is added.

Returns: the CoTBlockAdvanced, used for method chaining  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnAdded(func as IBlockAdded) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockAdded](/mods/contenttweaker/API/functions/IBlockAdded) | No Description Provided |


:::

:::group{name=setOnNeighborChanged}

Sets what will happen when a neighbour of the block is changed

Returns: the CoTBlockAdvanced, used for method chaining  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnNeighborChanged(func as IBlockNeighborChanged) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockNeighborChanged](/mods/contenttweaker/API/functions/IBlockNeighborChanged) | No Description Provided |


:::

:::group{name=setOnRandomTick}

Sets what will happen when the block receive a random tick. Throws an exception if the block does not tick randomly.

Returns: the CoTBlockAdvanced, used for method chaining  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnRandomTick(func as IBlockRandomTick) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockRandomTick](/mods/contenttweaker/API/functions/IBlockRandomTick) | No Description Provided |


:::

:::group{name=setOnReplaced}

Sets what will happen when the block is replaced. (Note. destroy means replace with air)

Returns: the CoTBlockAdvanced, used for method chaining  
Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnReplaced(func as IBlockReplaced) as CoTBlockAdvanced
```

| Parameter | Type | Description |
|-----------|------|-------------|
| func | [IBlockReplaced](/mods/contenttweaker/API/functions/IBlockReplaced) | No Description Provided |


:::


