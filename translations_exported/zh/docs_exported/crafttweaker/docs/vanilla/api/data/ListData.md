# ListData #列表数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ListData;
```


## 已实现的接口
listData实现了以下接口。 That means all methods defined in these interfaces are also available in ListData

- [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData)

## Constructor #构造函数

No Description Provided
```zenscript
new ListData() as ListData
new ListData();
```

No Description Provided
```zenscript
new ListData(list as stdlib.List<IData>) as ListData
```

| 参数   | 类型                                                              | 描述                      |
| ---- | --------------------------------------------------------------- | ----------------------- |
| list | stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | No Description Provided |



## Casters

| 结果类型                                                            | 是否隐藏  |
| --------------------------------------------------------------- | ----- |
| [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData)     | false |
| [INumberData #编号数据](/vanilla/api/data/INumberData)              | false |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | true  |

## 方法

### asCollection

Return Type: [ICollectionData](/vanilla/api/data/ICollectionData)

```zenscript
ListData.asCollection() as ICollectionData
["Hello", "World", "!"].asCollection();
```

### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
ListData.asMap() as IData[string]
["Hello", "World", "!"].asMap();
```

### asNumber

Return Type: [INumberData](/vanilla/api/data/INumberData)

```zenscript
ListData.asNumber() as INumberData
["Hello", "World", "!"].asNumber();
```

### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
ListData.getId() as byte
["Hello", "World", "!"].getId();
```

### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
ListData.getString() as string
["Hello", "World", "!"].getString();
```


