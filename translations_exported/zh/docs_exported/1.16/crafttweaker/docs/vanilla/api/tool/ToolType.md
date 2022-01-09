# ToolType

This is the vanilla ToolType.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.tool.ToolType;
```


## Casters

| 结果类型   | 是否隐藏  |
| ------ | ----- |
| string | false |

## 使用方式

:::group{name=getName}

Gets the name of this ToolType.

Return Type: string

```zenscript
// ToolType.getName() as string

myToolType.getName();
```

:::


## 参数

| 名称                   | 类型     | 可获得  | 可设置   | 描述                              |
| -------------------- | ------ | ---- | ----- | ------------------------------- |
| commandString #命令字符串 | string | true | false | No Description Provided         |
| name（名称）             | string | true | false | Gets the name of this ToolType. |

