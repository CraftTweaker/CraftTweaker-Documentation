# Percentaged&LT;T : Object&GT;

Used to represent data with an attached percentage (think an ItemStack with a 50% chance of being outputted).

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.random.Percentaged;
```


## 已实现的接口
Percentaged implements the following interfaces. That means all methods defined in these interfaces are also available in Percentaged

- [CommandStringDisplayable #命令字符串可显示](/vanilla/api/bracket/CommandStringDisplayable)

## 使用方式

:::group{name=getData}

Return Type: T

```zenscript
// Percentaged.getData() as T

myPercentaged.getData();
```

:::

:::group{name=getPercentage}

Return Type: double

```zenscript
// Percentaged.getPercentage() as double

myPercentaged.getPercentage();
```

:::


## 参数

| 名称         | 类型     | 可获得  | 可设置   | 描述                      |
| ---------- | ------ | ---- | ----- | ----------------------- |
| data       | T      | true | false | No Description Provided |
| percentage | double | true | false | No Description Provided |

