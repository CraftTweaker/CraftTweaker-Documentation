# ProcessingOutput

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.ProcessingOutput;
```


## 使用方式

:::group{name=getChance}

Return Type: float

```zenscript
// ProcessingOutput.getChance() as float

myProcessingOutput.getChance();
```

:::

:::group{name=getStack}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ProcessingOutput.getStack() as IItemStack

myProcessingOutput.getStack();
```

:::

:::group{name=rollOutput}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// ProcessingOutput.rollOutput() as IItemStack

myProcessingOutput.rollOutput();
```

:::


## 参数

| 名称     | 类型                                         | 可获得  | 可设置   | 描述                      |
| ------ | ------------------------------------------ | ---- | ----- | ----------------------- |
| chance | float                                      | true | false | No Description Provided |
| 堆叠     | [IItemstack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |

