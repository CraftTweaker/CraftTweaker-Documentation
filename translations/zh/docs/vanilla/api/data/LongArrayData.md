# LongArrayData #长数组数据



此类由具有mod-id的mod添加 `crafttweaker`. 此类由具有mod-id的mod添加 `crafttweaker`.

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

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].get(index as int);
[100000, 800000, 50000].get(0);
```


| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |





### getId

Gets the ID of the internal NBT tag.

Used to determine what NBT type is stored (in a list for example)

Returns: `ID of the NBT tag that this data represents.`

Returns byte



```zenscript
[100000, 800000, 50000].getId();
```




### getString

Gets the String representation of the internal INBT tag

Returns: `String that represents the internal INBT of this IData.`

Returns String



```zenscript
[100000, 800000, 50000].getString();
```




### remove

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].remove(index as int);
[100000, 800000, 50000].remove(0);
```


| Parameter | Type | Description         |
| --------- | ---- | ------------------- |
| index     | int  | The index (0-based) |





### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
[100000, 800000, 50000].set(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Bye");
```


| Parameter | Type                                                   | Description                |
| --------- | ------------------------------------------------------ | -------------------------- |
| index     | int                                                    | The index to set (0-based) |
| value     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |






## Properties

| Name | Type | Has Getter | Has Setter |
| ---- | ---- | ---------- | ---------- |
| size | int  | true       | false      |

