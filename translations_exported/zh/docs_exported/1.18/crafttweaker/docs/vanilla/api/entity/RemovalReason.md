# RemovalReason

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.RemovalReason;
```


## Enum Constants

RemovalReason is an enum. It has 5 enum constants. They are accessible using the code below.

```zenscript
RemovalReason.KILLED
RemovalReason.DISCARDED
RemovalReason.UNLOADED_TO_CHUNK
RemovalReason.UNLOADED_WITH_PLAYER
RemovalReason.CHANGED_DIMENSION
```
## 使用方式

:::group{name=shouldDestroy}

Return Type: boolean

```zenscript
// RemovalReason.shouldDestroy() as boolean

myRemovalReason.shouldDestroy();
```

:::


## 参数

| 名称            | 类型  | 可获得  | 可设置   | 描述                      |
| ------------- | --- | ---- | ----- | ----------------------- |
| shouldDestroy | 布尔值 | true | false | No Description Provided |

