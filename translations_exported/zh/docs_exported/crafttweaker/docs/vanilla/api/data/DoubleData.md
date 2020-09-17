# DoubleData #双精度数据



这个类由mod-id为`crafttweaker`的模组添加. 因此，如果要使用此功能，则需要安装此mod。

## 导入相关包
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
crafttweaker.api.data.DoubleData
```

## 已实现的接口
DoubleData实现了以下接口。 这意味着对这个接口可用的任何方法也可以在此类上使用。
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)
- [crafttweaker.api.data.INumberData](/vanilla/api/data/INumberData)

## Constructor #构造函数
```zenscript
crafttweaker.api.data.INumberData
```
| 参数   | 类型  | 描述                      |
| ---- | --- | ----------------------- |
| 内部设置 | 双精度 | No description provided |



## 方法
### asList #作为列表

获取列表<IData> IData的表示形式，对 crafttweaker.api.data.ListData </ 0>以外的任何内容返回null。</p> 

如果IData值不是一个列表的话则返回值null

返回类型：列表&lt;[craftminstrer.api.data.IData](/vanilla/api/data/IData)&gt;



```zenscript
3.25.asList();
```




### asMap #作为地图数据

获取此IData的Map <String, IData>表示形式，对 crafttweaker.api.data.MapData </ 1>以外的任何内容返回null。</p> 

如果IData值不是一个地图数据的话则返回值null

返回类型： [craftbiner.api.data.IData](/vanilla/api/data/IData)[String]



```zenscript
3.25.asMap();
```




### asString #作为字符串

获取此IData的字符串表示形式

返回：`表示此IData（值和类型）的字符串。</ 0></p>

<p spaces-before="0">返回类型：字符串</p>

<pre><code class="zenscript">3.25.asString();
`</pre> 



### contains #容器

检查这个IData是否包含另一个IData，主要用于[craftminstruer.api.data.ICollectionData](/vanilla/api/data/ICollectionData)的子类，与其他IData类型的同等检查

返回: `true 如果给定的 IData 包含在此 IData 中`

返回类型：布尔值



```zenscript
3.25.包含(数据为craftbiner.api.data.IData);
3.25.contains("显示");
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
a. 3.25.复印件；
```




### getId #获取id 

获取内部NBT标签的 ID。

用来确定哪些NBT类型被存储(例如在列表中)

返回：`此数据代表的 NBT 标签ID。`

返回类型：字节



```zenscript
3.25.getId();
```




### getString #获取字符串

获取内部INBT标记的字符串表示形式

返回：`表示此 IData 内部INBT 的字符串。`

返回类型：字符串



```zenscript
3.25.getString();
```


