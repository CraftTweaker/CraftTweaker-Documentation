# IntArrayData #整数数组数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IntArrayData;
```


## 已实现的接口
IntArrayData实现了以下接口。 That means all methods defined in these interfaces are also available in IntArrayData

- [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData)

## Constructor #构造函数

No Description Provided
```zenscript
new IntArrayData(internal as int[]) as IntArrayData
```

| 参数       | 类型    | 描述                      |
| -------- | ----- | ----------------------- |
| internal | int[] | No Description Provided |



## Casters

| 结果类型                                                        | 是否隐藏  |
| ----------------------------------------------------------- | ----- |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData) | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)          | false |

## 方法

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
IntArrayData.asCollection() as ICollectionData
[4, 128, 256, 1024].asCollection();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
IntArrayData.asMap() as IData[string]
[4, 128, 256, 1024].asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
IntArrayData.asNumber() as INumberData
[4, 128, 256, 1024].asNumber();
```

### contains #容器

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
IntArrayData.contains(data as IData) as boolean
[4, 128, 256, 1024].contains("Display");
```

| 参数   | 类型                               | 描述          |
| ---- | -------------------------------- | ----------- |
| data | [IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |


### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
IntArrayData.getId() as byte
[4, 128, 256, 1024].getId();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
IntArrayData.getString() as string
[4, 128, 256, 1024].getString();
```


