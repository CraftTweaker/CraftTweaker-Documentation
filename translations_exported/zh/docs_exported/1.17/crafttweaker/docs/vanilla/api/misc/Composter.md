# Composter



## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.misc.Composter;
```


## 使用方式

:::group{name=setValue}

Sets the compost value of the given IItemStack.

 The amount should be between 0 and 1, anything above 1 would just be wasted.

Return Type: void

```zenscript
// Composter.setValue(stack as IItemStack, amount as float) as void

composter.setValue(<item:minecraft:diamond>, 0.85);
```

| 参数     | 类型                                         | 描述                                                                              |
| ------ | ------------------------------------------ | ------------------------------------------------------------------------------- |
| 堆叠     | [IItemstack](/vanilla/api/item/IItemStack) | The stack to be compostable                                                     |
| amount | float                                      | The amount of Compost that should be added when the item is put in a Composter. |


:::


