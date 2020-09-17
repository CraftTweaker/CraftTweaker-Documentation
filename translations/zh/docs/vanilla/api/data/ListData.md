# ListData #列表数据



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbiner.api.data.ListData
```

## 已实现的接口
listData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| 参数 | 参数                                                               | 描述    | 可选的  | 默认值  |
| -- | ---------------------------------------------------------------- | ----- | ---- | ---- |
| 列表 | 以列表形式列出的<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | 未提供说明 | true | null |



## 使用方式
### add #添加

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| 参数    | 返回值类型                                                  | 描述       |
| ----- | ------------------------------------------------------ | -------- |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值 |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| 参数    | 返回值类型                                                  | 描述                   |
| ----- | ------------------------------------------------------ | -------------------- |
| index | 整型                                                     | 要添加的索引。 后续项目将会上移一个索引 |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值             |


### clear #清除

删除列表中的每个元素

```zenscript
["Hello", "World", "!"].clear();
```

### get #获取

检索存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| 参数    | 返回值类型 | 描述               |
| ----- | ----- | ---------------- |
| index | 整型    | The index (从0开始) |


### remove #移除

移除存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| 参数 | 返回值类型 | 描述               |
| -- | ----- | ---------------- |
| 索引 | 整数变量  | The index (从0开始) |


### set #设置

在给定值的索引处设置项目

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| 参数    | 返回值类型                                                  | 描述            |
| ----- | ------------------------------------------------------ | ------------- |
| index | 整型                                                     | 要设置的索引 (从0开始) |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新值            |



## 参数

| 名称       | 返回值类型 | 可获得  | 可设置   |
| -------- | ----- | ---- | ----- |
| size #大小 | 整型    | true | false |

## 卡斯特尔

| 结果类型                                                             | 是否隐藏 |
| ---------------------------------------------------------------- | ---- |
| 以列表形式列出的<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | true |

