# IAssemblyRecipe

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.createtweaker.IAssemblyRecipe;
```


## 使用方式

:::group{name=supportsAssembly}

Does this recipe support being used in assembly processing.

Returns: True if it is supported. False otherwise.  
Return Type: boolean

```zenscript
// IAssemblyRecipe.supportsAssembly() as boolean

myIAssemblyRecipe.supportsAssembly();
```

:::


## 参数

| 名称               | 类型  | 可获得  | 可设置   | 描述                                                          |
| ---------------- | --- | ---- | ----- | ----------------------------------------------------------- |
| supportsAssembly | 布尔值 | true | false | Does this recipe support being used in assembly processing. |

