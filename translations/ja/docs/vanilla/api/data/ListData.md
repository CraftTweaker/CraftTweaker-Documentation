# ListData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.ListData
```

## Implemented Interfaces
ListData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| パラメータ | タイプ                                                          | 説明                      | IsOptional | デフォルト値 |
| ----- | ------------------------------------------------------------ | ----------------------- | ---------- | ------ |
| リスト   | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | No description provided | true       | null   |



## メソッド
### 追加

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| パラメータ | タイプ                                                    | 説明                           |
| ----- | ------------------------------------------------------ | ---------------------------- |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| パラメータ  | タイプ                                                    | 説明                                                                   |
| ------ | ------------------------------------------------------ | -------------------------------------------------------------------- |
| インデックス | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### clear

Removes every element in the list

```zenscript
["Hello", "World", "!"].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


### 削除

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| パラメータ  | タイプ                                                    | 説明                         |
| ------ | ------------------------------------------------------ | -------------------------- |
| インデックス | int                                                    | The index to set (0-based) |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## プロパティー

| 名称  | タイプ | Has Getter | Has Setter |
| --- | --- | ---------- | ---------- |
| サイズ | int | true       | false      |

## Casters

| Result type                                                  | Is Implicit |
| ------------------------------------------------------------ | ----------- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | true        |

