# AbstractCauldronBlock

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.type.cauldron.AbstractCauldronBlock;
```


## Extending Block

AbstractCauldronBlock extends [Block](/vanilla/api/block/Block). That means all methods available in [Block](/vanilla/api/block/Block) are also available in AbstractCauldronBlock

## 使用方式

:::group{name=isFull}

Checks if this cauldron is full.

Returns: True if full, false otherwise.  
Return Type: boolean

```zenscript
// AbstractCauldronBlock.isFull(blockState as BlockState) as boolean

myAbstractCauldronBlock.isFull(<blockstate:minecraft:cauldron:level=3>);
```

| 参数         | 类型                                          | 描述                                       |
| ---------- | ------------------------------------------- | ---------------------------------------- |
| blockState | [BlockState](/vanilla/api/block/BlockState) | The current block state of the cauldron. |


:::


