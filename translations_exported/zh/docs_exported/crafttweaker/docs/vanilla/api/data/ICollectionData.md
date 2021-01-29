# ICollectionData #所收集数据

The ICollection data is used to represent a collection of [IData](/vanilla/api/data/IData) like a List<IData>

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ICollectionData;
```


## 已实现的接口
ICollectionData实现了以下接口。 That means all methods defined in these interfaces are also available in ICollectionData

- [IData](/vanilla/api/data/IData)
## 方法

### add



Return Type: void

```zenscript
ICollectionData.add(value as IData) as void
new ListData(["Hello", "World"]).add("today");
```
| 参数    | 类型                               | 描述       |
| ----- | -------------------------------- | -------- |
| value | [IData](/vanilla/api/data/IData) | 要添加到列表的值 |



Return Type: void

```zenscript
ICollectionData.add(index as int, value as IData) as void
new ListData(["Hello", "World"]).add(1, "beautiful");
```
| 参数    | 类型                               | 描述                   |
| ----- | -------------------------------- | -------------------- |
| index | int                              | 要添加的索引。 后续项目将会上移一个索引 |
| value | [IData](/vanilla/api/data/IData) | 要添加到列表的值             |

### clear #清除

删除列表中的每个元素

Return Type: void

```zenscript
ICollectionData.clear() as void
new ListData(["Hello", "World"]).clear();
```
### getAt

Retrieves the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.getAt(index as int) as IData
new ListData(["Hello", "World"]).getAt(0);
```
| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |

### remove

Removes the [IData](/vanilla/api/data/IData) stored at the given index.

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.remove(index as int) as IData
new ListData(["Hello", "World"]).remove(0);
```
| 参数    | 类型  | 描述               |
| ----- | --- | ---------------- |
| index | int | The index (从0开始) |

### setAt

在给定值的索引处设置项目

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
ICollectionData.setAt(index as int, value as IData) as IData
new ListData(["Hello", "World"]).setAt(0, "Bye");
```
| 参数    | 类型                               | 描述            |
| ----- | -------------------------------- | ------------- |
| index | int                              | 要设置的索引 (从0开始) |
| value | [IData](/vanilla/api/data/IData) | 新值            |


## 参数

| 名称   | 类型  | 可获得  | 可设置   |
| ---- | --- | ---- | ----- |
| size | int | true | false |

