# StringData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.StringData
```

## Implemented Interfaces
StringData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.StringData(internal as String);
```
| パラメータ | タイプ  | 説明                      |
| ----- | ---- | ----------------------- |
| 内部    | 文字列型 | No description provided |



## メソッド
### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
new StringData("Hello").asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
new StringData("Hello").asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
new StringData("Hello").asString();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns boolean

```zenscript
new StringData("Hello").contains(data as crafttweaker.api.data.IData);
new StringData("Hello").contains("Display");
```

| パラメータ | タイプ                                                    | 説明                               |
| ----- | ------------------------------------------------------ | -------------------------------- |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | data to check if it is contained |


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


## 演算子
### 追加

Concatenates the two string Datas and returns the result.

```zenscript
new StringData("Hello") + data as crafttweaker.api.data.StringData
new StringData("Hello") + new StringData("World")
```

| パラメータ | タイプ                                                              | 説明                       |
| ----- | ---------------------------------------------------------------- | ------------------------ |
| データ   | [crafttweaker.api.data.StringData](/vanilla/api/data/StringData) | The other data to append |

