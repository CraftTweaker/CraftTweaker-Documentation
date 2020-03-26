# LongArrayData #长数组数据



这个类由mod-id为`crafttweaker`的模组添加. 此类由具有mod-id的mod添加 `crafttweaker`.

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.data.LongArrayData
```

## 已实现的接口
longArrayData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.LongArrayData(internal as long[]);
```
| 参数       | 参数     | 描述    |
| -------- | ------ | ----- |
| internal | long[] | 未提供说明 |



## 使用方式
### add #添加

```zenscript
[100000, 800000, 50000].add(value as crafttweaker.api.data.IData);
[100000, 800000, 50000].add("today");
```

| 参数    | 返回值类型                                                  | 描述                           |
| ----- | ------------------------------------------------------ | ---------------------------- |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[100000, 800000, 50000].add(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].add(1, "beautiful");
```

| 参数    | 返回值类型                                                  | 描述                   |
| ----- | ------------------------------------------------------ | -------------------- |
| index | int                                                    | 要添加的索引。 后续项目将会上移一个索引 |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值             |


### asList #作为列表

获取列表<IData> IData的表示形式，对

 crafttweaker.api.data.ListData </ 0>以外的任何内容返回null。</p> 

如果IData值不是一个列表的话则返回值null

返回一个列表<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>



```zenscript
[100000, 800000, 50000].asList();
```




### asMap #作为地图数据

获取此IData的Map <String, IData>表示形式，对 crafttweaker.api.data.MapData </ 1>以外的任何内容返回null。</p> 

如果IData值不是一个地图数据的话则返回值null

返回字符串值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].asMap();
```




### asString #作为字符串

获取此IData的字符串表示形式

返回：`表示此IData（值和类型）的字符串。</ 0></p>

<p spaces-before="0">返回字符串[String]</p>

<pre><code class="zenscript">[100000, 800000, 50000].asString();
`</pre> 



### clear #清除

删除列表中的每个元素



```zenscript
[100000, 800000, 50000].clear();
```




### contains #容器

检查这个IData是否包含另一个IData，主要用于[craftminstruer.api.data.ICollectionData](/vanilla/api/data/ICollectionData)的子类，与其他IData类型的同等检查

返回为布尔值



```zenscript
[100000, 800000, 50000].contains(data as crafttweaker.api.data.IData);
[100000, 800000, 50000].contains("Display");
```


| 参数   | 返回值类型                                                  | 描述          |
| ---- | ------------------------------------------------------ | ----------- |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |





### copy #复制

制作此IData的副本。

IData默认情况下是不可变的，使用它可以创建对象的正确副本。

返回：`此IData的副本`

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].copy();
```




### get #获取

检索存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].get(index as int);
[100000, 800000, 50000].get(0);
```


| 参数    | 返回值类型 | 描述               |
| ----- | ----- | ---------------- |
| index | int   | The index (从0开始) |





### getId #获取id 

获取内部NBT标签的 ID。

用来确定哪些NBT类型被存储(例如在列表中)

返回：`此数据代表的 NBT 标签ID。`

返回数据



```zenscript
[100000, 800000, 50000].getId();
```




### getString #获取字符串

getString #获取字符串

返回：`表示此 IData 内部INBT 的字符串。`

返回字符串[String]



```zenscript
[100000, 800000, 50000].getString();
```




### remove #移除

移除存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
100000, 800000, 50000].remove(index as int);
[100000, 800000, 50000].remove(0);
```


| 参数    | 返回值类型 | 描述               |
| ----- | ----- | ---------------- |
| index | int   | The index (从0开始) |





### set #设置

在给定值的索引处设置项目

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].set(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Bye");
```


| 参数    | 返回值类型                                                  | 描述            |
| ----- | ------------------------------------------------------ | ------------- |
| index | int                                                    | 要设置的索引 (从0开始) |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新值            |






## 参数

| Name（名称） | 返回值类型 | 可获得  | 可设置  |
| -------- | ----- | ---- | ---- |
| size #大小 | 整型    | true | true |

