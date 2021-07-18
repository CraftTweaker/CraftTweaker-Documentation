# MCItemDefinition

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.MCItemDefinition;
```


## Casters

| 结果类型                                        | 是否隐藏 |
| ------------------------------------------- | ---- |
| [IItemStack](/vanilla/api/items/IItemStack) | true |

## 方法

### getDefaultInstance

Return Type: [IItemStack](/vanilla/api/items/IItemStack)

```zenscript
MCItemDefinition.getDefaultInstance() as IItemStack
myMCItemDefinition.getDefaultInstance();
```


## 参数

| 名称              | 类型                                          | 可获得  | 可设置   |
| --------------- | ------------------------------------------- | ---- | ----- |
| commandString   | string                                      | true | false |
| defaultInstance | [IItemStack](/vanilla/api/items/IItemStack) | true | false |

