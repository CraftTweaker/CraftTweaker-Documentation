# MapData #地图数据



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftminstrer.api.data.MapData
```

## 已实现的接口
mapData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| 参数  | 参数                                                             | 描述    |
| --- | -------------------------------------------------------------- | ----- |
| map | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | 未提供说明 |



## 方法
### asList #作为列表

获取列表<IData> IData的表示形式，对

 crafttweaker.api.data.ListData </ 0>以外的任何内容返回null。</p> 

如果IData值不是一个列表的话则返回值null

返回一个列表<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>



```zenscript
myMapData.asList();
```




### asMap #作为地图数据

获取此IData的Map <String, IData>表示形式，对 crafttweaker.api.data.MapData </ 1>以外的任何内容返回null。</p> 

如果IData值不是一个地图数据的话则返回值null

返回字符串值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
myMapData.asMap();
```




### asString #作为字符串

获取此IData的字符串表示形式

返回：`表示此IData（值和类型）的字符串。</ 0></p>

<p spaces-before="0">返回字符串[String]</p>

<pre><code class="zenscript">myMapData.asString();
`</pre> 



### contains #容器

检查地图是否包含给定的密钥。

返回为布尔值



```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```


| 参数  | 返回值类型  | 描述     |
| --- | ------ | ------ |
| key | String | 要搜索的密钥 |





### copy #复制

制作此IData的副本。

IData默认情况下是不可变的，使用它可以创建对象的正确副本。

返回：`此IData的副本`

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
myMapData.copy();
```




### get #获取

检索与密钥相关的值

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```


| 参数  | 返回值类型  | 描述     |
| --- | ------ | ------ |
| key | String | 要搜索的密钥 |





### getId #获取id 

获取内部NBT标签的 ID。

用来确定哪些NBT类型被存储(例如在列表中)

返回：`此数据代表的 NBT 标签ID。`

返回数据



```zenscript
myMapData.getId();
```




### getString #获取字符串

getString #获取字符串

返回：`表示此 IData 内部INBT 的字符串。`

返回字符串[String]



```zenscript
myMapData.getString();
```




### merge #合并

合并此地图和其他地图。 如果来自此地图和其他地图的条目共享，则尝试合并这些值。 如果无法工作，则使用其他地图的值。

返回值 [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)



```zenscript
myMapData.merge(other as crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```


| 参数    | 返回值类型                                                      | 描述     |
| ----- | ---------------------------------------------------------- | ------ |
| other | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | 另一张地图。 |





### put #放置

添加给定键值或创建一个新条目，如果它以前不存在。

返回值 [crafttweaker.api.data.IData](/vanilla/api/data/IData)



```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```


| 参数    | 返回值类型                                                  | 描述       |
| ----- | ------------------------------------------------------ | -------- |
| key   | String                                                 | 要设置值的密钥。 |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要设置的值    |





### putAll #放置全部

将给定地图中的所有条目添加到这个条目。 可以覆盖现有密钥。



```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```


| 参数  | 返回值类型                                                          | 描述           |
| --- | -------------------------------------------------------------- | ------------ |
| map | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | 要添加到此地图的其他条目 |





### remove #移除

从地图中移除给定键的条目



```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```


| 参数  | 返回值类型       | 描述        |
| --- | ----------- | --------- |
| key | 字符串[string] | 要删除的条目的密钥 |






## 参数

| 名称            | 返回值类型       | 可获得  | 可设置  |
| ------------- | ----------- | ---- | ---- |
| isEmpty #是否为空 | 布尔值         | true | true |
| keySet #设置键   | set<String> | true | true |
| size #大小      | int         | true | true |




## 运算符


### ADD #添加

将给定的 IData 中的所有条目添加到此条目



```zenscript
myMapData + data as crafttweaker.api.data.IData
```


| 参数   | 参数                                                     | 描述    |
| ---- | ------------------------------------------------------ | ----- |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 未提供说明 |




## 卡斯特尔

| 结果类型                                                           | 是否隐藏 |
| -------------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true |

