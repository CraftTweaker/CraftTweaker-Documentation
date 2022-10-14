# IFluidHandlerItem

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IFluidHandlerItem;
```


## 已实现的接口
IFluidHandlerItem implements the following interfaces. That means all methods defined in these interfaces are also available in IFluidHandlerItem

- [IFluidHandler](/forge/api/capability/IFluidHandler)

## 使用方式

:::group{name=getContainer}

Gets the container of this handler.

Returns: The container of this handler.  
Return Type: [ItemStack](/vanilla/api/item/ItemStack)

```zenscript
// IFluidHandlerItem.getContainer() as ItemStack

myIFluidHandlerItem.getContainer();
```

:::


## 参数

| 名称        | 类型                                  | 可获得  | 可设置   | 描述                                  |
| --------- | ----------------------------------- | ---- | ----- | ----------------------------------- |
| container | [物品应用](/vanilla/api/item/ItemStack) | true | false | Gets the container of this handler. |

