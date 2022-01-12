# BlockItem

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.block.BlockItem;
```


## Extending ItemDefinition

BlockItem extends [ItemDefinition](/vanilla/api/item/ItemDefinition). That means all methods available in [ItemDefinition](/vanilla/api/item/ItemDefinition) are also available in BlockItem

## Casters

| 结果类型                              | 是否隐藏  |
| --------------------------------- | ----- |
| [Block](/vanilla/api/block/Block) | false |

## 使用方式

:::group{name=getBlock}

Return Type: [Block](/vanilla/api/block/Block)

```zenscript
// BlockItem.getBlock() as Block

myBlockItem.getBlock();
```

:::


## 参数

| 名称        | 类型                                | 可获得  | 可设置   | 描述                      |
| --------- | --------------------------------- | ---- | ----- | ----------------------- |
| block #方块 | [Block](/vanilla/api/block/Block) | true | false | No Description Provided |

