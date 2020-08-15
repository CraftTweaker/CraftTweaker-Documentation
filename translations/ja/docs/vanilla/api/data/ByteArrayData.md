# ByteArrayData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.ByteArrayData
```

## Implemented Interfaces
ByteArrayData implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ByteArrayData(internal as byte[]);
```
| パラメータ | タイプ    | 説明                      |
| ----- | ------ | ----------------------- |
| 内部    | byte[] | No description provided |



## メソッド
### 追加

```zenscript
[4, 1, 2].add(value as crafttweaker.api.data.IData);
[4, 1, 2].add("today");
```

| パラメータ | タイプ                                                    | 説明                           |
| ----- | ------------------------------------------------------ | ---------------------------- |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list |



```zenscript
[4, 1, 2].add(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].add(1, "beautiful");
```

| パラメータ  | タイプ                                                    | 説明                                                                   |
| ------ | ------------------------------------------------------ | -------------------------------------------------------------------- |
| インデックス | int                                                    | The index to add to. Subsequent items will be moved one index higher |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The value to add to the list                                         |


### clear

Removes every element in the list

```zenscript
[4, 1, 2].clear();
```

### get

Retrieves the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].get(index as int);
[4, 1, 2].get(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


### 削除

Removes the [crafttweaker.api.data.IData](/vanilla/api/data/IData) stored at the given index.

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].remove(index as int);
[4, 1, 2].remove(0);
```

| パラメータ  | タイプ | 説明                  |
| ------ | --- | ------------------- |
| インデックス | int | The index (0-based) |


### set

Sets the item at the provided index to the given value

Returns [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[4, 1, 2].set(index as int, value as crafttweaker.api.data.IData);
[4, 1, 2].set(0, "Bye");
```

| パラメータ  | タイプ                                                    | 説明                         |
| ------ | ------------------------------------------------------ | -------------------------- |
| インデックス | int                                                    | The index to set (0-based) |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | The new Value              |



## プロパティー

| 名称  | タイプ | Has Getter | Has Setter |
| --- | --- | ---------- | ---------- |
| サイズ | int | true       | false      |

