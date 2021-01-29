# StringData #字符串数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.StringData;
```


## 已实现的接口
StringData实现了以下接口。 That means all methods defined in these interfaces are also available in StringData

- [IData](/vanilla/api/data/IData)
## Constructor #构造函数

No Description Provided
```zenscript
new StringData(internal as string) as StringData
```
| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| internal | string | No Description Provided |


## 运算符

### ADD

连接两个字符串数据并返回结果。

```zenscript
myStringData + data as StringData
new StringData("Hello") + new StringData("World")
```



