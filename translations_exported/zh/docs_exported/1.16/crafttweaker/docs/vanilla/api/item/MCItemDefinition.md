# MCItemDefinition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemDefinition;
```


## Casters

| 结果类型                                        | 是否隐藏 |
| ------------------------------------------- | ---- |
| [IItemstack](/vanilla/api/items/IItemStack) | true |

## 使用方式

:::group{name=getDefaultInstance}

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
// MCItemDefinition.getDefaultInstance() as IItemStack

myMCItemDefinition.getDefaultInstance();
```

:::

:::group{name=getTags}

Gets the tags that contain this item.

Returns: a list of tags that contain this item.  
Return Type: stdlib.List&lt;[MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt;&gt;

```zenscript
// MCItemDefinition.getTags() as stdlib.List<MCTag<MCItemDefinition>>

myMCItemDefinition.getTags();
```

:::

:::group{name=isIn}

Checks if this item is in the given tag.

Returns: True if the tag contains this item.  
Return Type: boolean

```zenscript
// MCItemDefinition.isIn(tag as MCTag<MCItemDefinition>) as boolean

myMCItemDefinition.isIn(<tag:items:minecraft:wool>);
```

| 参数      | 类型                                                                                                         | 描述                        |
| ------- | ---------------------------------------------------------------------------------------------------------- | ------------------------- |
| tag #标签 | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCItemDefinition](/vanilla/api/item/MCItemDefinition)&gt; | The tag to check against. |


:::


## 参数

| 名称                   | 类型                                          | 可获得  | 可设置   | 描述                      |
| -------------------- | ------------------------------------------- | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string                                      | true | false | No Description Provided |
| defaultInstance      | [IItemstack](/vanilla/api/items/IItemStack) | true | false | No Description Provided |

