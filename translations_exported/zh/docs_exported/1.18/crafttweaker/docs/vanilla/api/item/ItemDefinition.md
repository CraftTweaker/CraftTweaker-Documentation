# ItemDefinition

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemDefinition;
```


## Casters

| Result Type                                | 是否隐藏 |
| ------------------------------------------ | ---- |
| [IItemstack](/vanilla/api/item/IItemStack) | true |

## 使用方式

:::group{name=getCommandString}

Return Type: string

```zenscript
// ItemDefinition.getCommandString() as string

myItemDefinition.getCommandString();
```

:::

:::group{name=getDefaultInstance}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ItemDefinition.getDefaultInstance() as IItemStack

myItemDefinition.getDefaultInstance();
```

:::


## 参数

| 名称                   | 类型                                         | 可获得  | 可设置   |
| -------------------- | ------------------------------------------ | ---- | ----- |
| commandString #命令字符串 | string                                     | true | false |
| defaultInstance      | [IItemstack](/vanilla/api/item/IItemStack) | true | false |

