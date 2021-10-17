# BlockItem

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.block.BlockItem;
```


## Extending MCItemDefinition

BlockItem extends [MCItemDefinition](/vanilla/api/item/MCItemDefinition). That means all methods available in [MCItemDefinition](/vanilla/api/item/MCItemDefinition) are also available in BlockItem

## Casters

| 结果类型                                   | 是否隐藏  |
| -------------------------------------- | ----- |
| [MCBlock](/vanilla/api/block/MCBlock)? | false |

## 使用方式

:::group{name=getBlock}

Return Type: [MCBlock](/vanilla/api/block/MCBlock)?

```zenscript
// BlockItem.getBlock() as MCBlock?

myBlockItem.getBlock();
```

:::


## 参数

| 名称        | 类型                                     | 可获得  | 可设置   | 描述                      |
| --------- | -------------------------------------- | ---- | ----- | ----------------------- |
| block #方块 | [MCBlock](/vanilla/api/block/MCBlock)? | true | false | No Description Provided |

