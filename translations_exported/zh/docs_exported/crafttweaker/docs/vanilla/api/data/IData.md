# IData

IData接口是处理NBT等数据的通用接口。 您可以将所有原始数据 (短数据, 双精度数据, 字符串数据, 整型数据, ...) 以及某些数组转换为IData。 Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. [ByteData](/vanilla/api/data/ByteData)).

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.IData;
```


## 方法

### asList #作为列表

获取列表<IData> representation of this IData, returns null on anything but [ListData](/vanilla/api/data/ListData).

Return Type: stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt;

```zenscript
IData.asList() as stdlib.List<IData>
{Display: {lore: ["Hello", "World"]}}.asList();
```
### asMap #作为地图数据

Gets a Map<String, IData> representation of this IData, returns null on anything but [MapData](/vanilla/api/data/MapData).

Return Type: [IData](/vanilla/api/data/IData)[string]

```zenscript
IData.asMap() as IData[string]
{Display: {lore: ["Hello", "World"]}}.asMap();
```
### asString #作为字符串

获取此IData的字符串表示形式

Return Type: string

```zenscript
IData.asString() as string
{Display: {lore: ["Hello", "World"]}}.asString();
```
### contains #容器

Checks if this IData contains another IData, mainly used in subclasses of [ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Return Type: boolean

```zenscript
IData.contains(data as IData) as boolean
{Display: {lore: ["Hello", "World"]}}.contains("Display");
```
| 参数   | 类型                               | 描述          |
| ---- | -------------------------------- | ----------- |
| data | [IData](/vanilla/api/data/IData) | 要检查是否有包含的数据 |

### copy #复制

制作此IData的副本。

 IData默认情况下是不可变的，使用它可以创建对象的正确副本。

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
IData.copy() as IData
{Display: {lore: ["Hello", "World"]}}.copy();
```
### getId #获取id

获取内部NBT标签的 ID。

 用来确定哪些NBT类型被存储(例如在列表中)

Return Type: byte

```zenscript
IData.getId() as byte
{Display: {lore: ["Hello", "World"]}}.getId();
```
### getString #获取字符串

获取内部INBT标记的字符串表示形式

Return Type: string

```zenscript
IData.getString() as string
{Display: {lore: ["Hello", "World"]}}.getString();
```

