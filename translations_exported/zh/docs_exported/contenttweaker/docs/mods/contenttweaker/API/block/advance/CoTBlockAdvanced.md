# CoTBlockAdvanced

A registered CoT Block. Used for advanced functionality. like onRandomTick, onReplaced etc. <p> These functions should be run in CraftTweaker scripts, instead of ContentTweaker ones. And they are reloadable. You can get it via advanced block BEP.

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.block.advance.CoTBlockAdvanced;
```


## 方法

:::group{name=setBlockColorSupplier}

The block's color

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setBlockColorSupplier(func as IBlockColorSupplier) as CoTBlockAdvanced
```

| 参数   | 类型                                                                            | 描述                                                                     |
| ---- | ----------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| func | [IBlockColorSupplier](/mods/contenttweaker/API/functions/IBlockColorSupplier) | An IBlockColorSupplier. The tintIndex argument is defined by its model |


:::

:::group{name=setOnActivated}

Sets what will happen when a player right-clicks the block

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnActivated(func as IBlockActivated) as CoTBlockAdvanced
```

| 参数   | 类型                                                                    | 描述                                                                          |
| ---- | --------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| func | [IBlockActivated](/mods/contenttweaker/API/functions/IBlockActivated) | An IBlockActivated function, the function should return an ActionResultType |


:::

:::group{name=setOnAdded}

Sets what will happen when the block is added.

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnAdded(func as IBlockAdded) as CoTBlockAdvanced
```

| 参数   | 类型                                                            | 描述                      |
| ---- | ------------------------------------------------------------- | ----------------------- |
| func | [IBlockAdded](/mods/contenttweaker/API/functions/IBlockAdded) | No Description Provided |


:::

:::group{name=setOnNeighborChanged}

Sets what will happen when a neighbour of the block is changed

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnNeighborChanged(func as IBlockNeighborChanged) as CoTBlockAdvanced
```

| 参数   | 类型                                                                                | 描述                      |
| ---- | --------------------------------------------------------------------------------- | ----------------------- |
| func | [IBlockNeighborChanged](/mods/contenttweaker/API/functions/IBlockNeighborChanged) | No Description Provided |


:::

:::group{name=setOnRandomTick}

Sets what will happen when the block receive a random tick. Throws an exception if the block does not tick randomly.

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnRandomTick(func as IBlockRandomTick) as CoTBlockAdvanced
```

| 参数   | 类型                                                                      | 描述                      |
| ---- | ----------------------------------------------------------------------- | ----------------------- |
| func | [IBlockRandomTick](/mods/contenttweaker/API/functions/IBlockRandomTick) | No Description Provided |


:::

:::group{name=setOnReplaced}

Sets what will happen when the block is replaced. (Note. destroy means replace with air)

Return Type: [CoTBlockAdvanced](/mods/contenttweaker/API/block/advance/CoTBlockAdvanced)

```zenscript
CoTBlockAdvanced.setOnReplaced(func as IBlockReplaced) as CoTBlockAdvanced
```

| 参数   | 类型                                                                  | 描述                      |
| ---- | ------------------------------------------------------------------- | ----------------------- |
| func | [IBlockReplaced](/mods/contenttweaker/API/functions/IBlockReplaced) | No Description Provided |


:::


