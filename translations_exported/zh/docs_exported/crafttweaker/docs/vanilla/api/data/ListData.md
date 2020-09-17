# ListData #列表数据



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
craftbiner.api.data.ListData
```

## 已实现的接口
listData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructor #构造函数
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| 参数   | 类型                                                                           | 描述                      | 可选的  | 默认值  |
| ---- | ---------------------------------------------------------------------------- | ----------------------- | ---- | ---- |
| 邮件列表 | 列表&lt;[craftmiliter.api.data.IData](/vanilla/api/data/IData)&gt; | No description provided | true | `空的` |



## 方法
### 添加

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| 参数    | 类型                                                     | 描述       |
| ----- | ------------------------------------------------------ | -------- |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值 |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| 参数    | 类型                                                     | 描述                   |
| ----- | ------------------------------------------------------ | -------------------- |
| index | 整数                                                     | 要添加的索引。 后续项目将会上移一个索引 |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要添加到列表的值             |


### asList #作为列表

获取列表<IData> IData的表示形式，对

 crafttweaker.api.data.ListData </ 0>以外的任何内容返回null。</p> 

如果IData值不是一个列表的话则返回值null

返回类型：列表&lt;[craftminstrer.api.data.IData](/vanilla/api/data/IData)&gt;



```zenscript
["Hello", "World", "!"].asList();
```




### asMap #作为地图数据

获取此IData的Map <String, IData>表示形式，对 crafttweaker.api.data.MapData </ 1>以外的任何内容返回null。</p> 

如果IData值不是一个地图数据的话则返回值null

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)[String]



```zenscript
["Hello", "World", "!"].asp();
```




### asString #作为字符串

获取此IData的字符串表示形式

返回：`表示此IData（值和类型）的字符串。</ 0></p>

<p spaces-before="0">返回类型：字符串</p>

<pre><code class="zenscript">["你好", "World", "!"].asString();
`</pre> 



### clear #清除

删除列表中的每个元素



```zenscript
["Hello", "World", "!"].clear();
```




### contains #容器

检查这个IData是否包含另一个IData，主要用于[craftminstruer.api.data.ICollectionData](/vanilla/api/data/ICollectionData)的子类，与其他IData类型的同等检查

返回: `true 如果给定的 IData 包含在此 IData 中`

返回类型：布尔值



```zenscript
["Hello", "World", "!"].contains(data as craftbiner.api.data.IData);
["Hello", "World", "!"].contains("Display");
```


| 参数   | 类型                                                     | 描述          |
| ---- | ------------------------------------------------------ | ----------- |
| data | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |





### copy #复制

制作此IData的副本。

IData默认情况下是不可变的，使用它可以创建对象的正确副本。

返回：`此IData的副本`

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)



```zenscript
["你好", "World", "!"].copy();
```




### get #获取

检索存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。 返回： ` [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)



```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```


| 参数    | 类型 | 描述               |
| ----- | -- | ---------------- |
| index | 整数 | The index (从0开始) |





### getId #获取id 

获取内部NBT标签的 ID。

用来确定哪些NBT类型被存储(例如在列表中)

返回：`此数据代表的 NBT 标签ID。`

返回类型：字节



```zenscript
["Hello", "World", "!"].getId();
```




### getString #获取字符串

获取内部INBT标记的字符串表示形式

返回：`表示此 IData 内部INBT 的字符串。`

返回类型：字符串



```zenscript
["Hello", "World", "!"].getString();
```




### remove #移除

移除存储在给定索引中的[craftminstrer.api.data](/vanilla/api/data/IData)。 返回： `已删除的 [crafttweaker.api.data.IData](/vanilla/api/data/IData)`

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)



```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```


| 参数    | 类型 | 描述               |
| ----- | -- | ---------------- |
| index | 整数 | The index (从0开始) |





### set #设置

将项目设定为给定的值 返回： `替换的值`

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)



```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```


| 参数    | 类型                                                     | 描述            |
| ----- | ------------------------------------------------------ | ------------- |
| index | 整数                                                     | 要设置的索引 (从0开始) |
| value | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新值            |






## 参数

| 名称 | 类型 | 可获得  | 可设置   |
| -- | -- | ---- | ----- |
| 大小 | 整数 | true | false |




## 卡斯特尔

| 结果类型                                                                         | 是否隐藏 |
| ---------------------------------------------------------------------------- | ---- |
| 列表&lt;[craftmiliter.api.data.IData](/vanilla/api/data/IData)&gt; | true |

