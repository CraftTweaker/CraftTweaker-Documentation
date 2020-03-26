# StringData #字符串数据



此类由具有mod-id的mod添加 `crafttweaker`. 此类由具有mod-id的mod添加 `crafttweaker`.

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.data.StringData
```

## 已实现的接口
StringData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.StringData(internal as String);
```
| 参数       | 参数     | 描述    |
| -------- | ------ | ----- |
| internal | String | 未提供说明 |



## 使用方式
### asList #作为列表

获取列表<IData> IData的表示形式，对

 crafttweaker.api.data.ListData </ 0>以外的任何内容返回null。</p> 

如果IData值不是一个列表的话则返回值null

返回一个列表<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>



```zenscript
new StringData("Hello").asList();
```




### asMap #作为地图数据

获取此IData的Map <String, IData>表示形式，对 crafttweaker.api.data.MapData </ 1>以外的任何内容返回null。</p> 

如果IData值不是一个地图数据的话则返回值null

返回字符串值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
new StringData("Hello").asMap();
```




### asString #作为字符串

获取此IData的字符串表示形式

返回：`表示此IData（值和类型）的字符串。</ 0></p>

<p spaces-before="0">返回字符串[String]</p>

<pre><code class="zenscript">new StringData("Hello").asString();
`</pre> 



### contains #容器

检查这个IData是否包含另一个IData，主要用于[craftminstruer.api.data.ICollectionData](/vanilla/api/data/ICollectionData)的子类，与其他IData类型的同等检查

返回为布尔值



```zenscript
new StringData("Hello").contains(data as crafttweaker.api.data.IData);
new StringData("Hello").contains("Display");
```


| 参数 | 类型                                                     | 说明          |
| -- | ------------------------------------------------------ | ----------- |
| 数据 | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |





### copy

Makes a copy of this IData.

IData is immutable by default, use this to create a proper copy of the object.

Returns: `a copy of this IData.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
new StringData("Hello").copy();
```




### getId

Gets the ID of the internal NBT tag.

Used to determine what NBT type is stored (in a list for example)

Returns: `ID of the NBT tag that this data represents.`

Returns byte



```zenscript
new StringData("Hello").getId();
```




### getString

Gets the String representation of the internal INBT tag

Returns: `String that represents the internal INBT of this IData.`

Returns String



```zenscript
new StringData("Hello").getString();
```





## 运算符


### ADD

Concatenates the two string Datas and returns the result.



```zenscript
new StringData("Hello") + data as crafttweaker.api.data.StringData
new StringData("Hello") + new StringData("World")
```


| Parameter | Type                                                             | Description              |
| --------- | ---------------------------------------------------------------- | ------------------------ |
| data      | [crafttweaker.api.data.StringData](/vanilla/api/data/StringData) | The other data to append |

