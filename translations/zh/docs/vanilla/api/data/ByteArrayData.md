# ByteArrayData #字节数组数据



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.data.ByteArrayData
```

## 已实现的接口
ByteArrayData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| 参数   | 类型   | 描述                      |
| ---- | ---- | ----------------------- |
| 内部设置 | 字节[] | No description provided |



## 方法
### 添加

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| 参数    | 类型                                                     | 描述       |
| ----- | ------------------------------------------------------ | -------- |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值 |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| 参数    | 类型                                                     | 描述                   |
| ----- | ------------------------------------------------------ | -------------------- |
| index | 整数                                                     | 要添加的索引。 后续项目将会上移一个索引 |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值             |


### clear #清除

删除列表中的每个元素

```zenscript
[4, 1, 2].clear();
```

### get #获取

检索存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| 参数    | 类型 | 描述               |
| ----- | -- | ---------------- |
| index | 整数 | The index (从0开始) |


### remove #移除

移除存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| 参数    | 类型 | 描述               |
| ----- | -- | ---------------- |
| index | 整数 | The index (从0开始) |


### set #设置

在给定值的索引处设置项目

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| 参数    | 类型                                                     | 描述            |
| ----- | ------------------------------------------------------ | ------------- |
| index | 整数                                                     | 要设置的索引 (从0开始) |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新值            |



## 参数

| 名称 | 类型 | 可获得  | 可设置   |
| -- | -- | ---- | ----- |
| 大小 | 整数 | true | false |

