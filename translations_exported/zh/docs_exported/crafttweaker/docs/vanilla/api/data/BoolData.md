# BoolData

Careful with BoolData: While it works for specifying boolean attributes in JSON syntax, using it in Tags will instead use a [ByteData](/vanilla/api/data/ByteData) object. Reason for this is that Minecraft does not have Boolean NBT values.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.BoolData;
```


## 已实现的接口
BoolData implements the following interfaces. That means all methods defined in these interfaces are also available in BoolData

- [IData](/vanilla/api/data/IData)
## Constructor #构造函数

No Description Provided
```zenscript
new BoolData(internal as boolean) as BoolData
```
| 参数       | 类型      | 描述                      |
| -------- | ------- | ----------------------- |
| internal | boolean | No Description Provided |


## Casters

| 结果类型                                         | 是否隐藏  |
| -------------------------------------------- | ----- |
| [ByteData #字节数据](/vanilla/api/data/ByteData) | false |

## 方法

### getByteData

Converts this BoolData to a [ByteData](/vanilla/api/data/ByteData) object. This will be used when this Data is converted to NBT

Return Type: [ByteData](/vanilla/api/data/ByteData)

```zenscript
BoolData.getByteData() as ByteData
true.getByteData();
```

