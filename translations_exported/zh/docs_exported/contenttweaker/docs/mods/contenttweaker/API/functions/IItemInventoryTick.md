# IItemInventoryTick

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.contenttweaker.functions.IItemInventoryTick;
```


## 方法

:::group{name=apply}

Return Type: void

```zenscript
IItemInventoryTick.apply(stack as MCItemStackMutable, world as MCWorld, entity as MCEntity, itemSlot as int, isSelected as boolean) as void
```

| 参数         | 类型                                                          | 描述                      |
| ---------- | ----------------------------------------------------------- | ----------------------- |
| stack      | [MCItemStackMutable](/vanilla/api/items/MCItemStackMutable) | No Description Provided |
| world      | [MCWorld](/vanilla/api/world/MCWorld)                       | No Description Provided |
| entity     | [MCEntity](/vanilla/api/entity/MCEntity)                    | No Description Provided |
| itemSlot   | int                                                         | No Description Provided |
| isSelected | boolean                                                     | No Description Provided |


:::


