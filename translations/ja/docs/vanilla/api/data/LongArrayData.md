# LongArrayData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.LongArrayData
```

## Implemented Interfaces
LongArrayData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.LongArrayData(internal as long[]);
```
| パラメータ | タイプ    | 説明                      |
| ----- | ------ | ----------------------- |
| 内部    | long[] | No description provided |



## メソッド
### 追加

```zenscript
[100000, 800000, 50000].add(value as crafttweaker.api.data.IData);
[100000, 800000, 50000].add("today");
```

| パラメータ | タイプ                                                    | 説明                           |
| ----- | ------------------------------------------------------ | ---------------------------- |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[100000, 800000, 50000].add(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].add(1, "beautiful");
```

| パラメータ  | タイプ                                                    | 説明                                                                   |
| ------ | ------------------------------------------------------ | -------------------------------------------------------------------- |
| インデックス | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### asList

Gets a List<IData> representation of this IData, returns null on anything but [crafttweaker.api.data.ListData](/vanilla/api/data/ListData).

 Returns: `null if this IData is not a list.`

Returns List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[100000, 800000, 50000].asList();
```

### asMap

Gets a Map<String, IData> representation of this IData, returns null on anything but [crafttweaker.api.data.MapData](/vanilla/api/data/MapData).

 Returns: `null if this IData is not a map.`

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[100000, 800000, 50000].asMap();
```

### asString

Gets the String representation of this IData

 Returns: `String that represents this IData (value and type).`

Returns String

```zenscript
[100000, 800000, 50000].asString();
```

### clear

Removes every element in the list

```zenscript
[100000, 800000, 50000].clear();
```

### contains

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

Returns boolean

```zenscript
[100000, 800000, 50000].contains(data as crafttweaker.api.data.IData);
[100000, 800000, 50000].contains("Display");
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
[100000, 800000, 50000].copy();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].get(index as int);
[100000, 800000, 50000].get(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


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

### 削除

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].remove(index as int);
[100000, 800000, 50000].remove(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].set(index as int, value as crafttweaker.api.data.IData);
[100000, 800000, 50000].set(0, "Bye");
```

| パラメータ  | タイプ                                                    | 説明                         |
| ------ | ------------------------------------------------------ | -------------------------- |
| インデックス | int                                                    | The index to set (0-based) |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## プロパティー

| 名称  | タイプ | Has Getter | Has Setter |
| --- | --- | ---------- | ---------- |
| サイズ | int | true       | false      |

