# ListData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.ListData
```

## 実装されたインターフェース
ListData は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.ListData();
```
```zenscript
new crafttweaker.api.data.ListData(list as List<crafttweaker.api.data.IData>);
```
| パラメータ | タイプ                                                          | 説明           | IsOptional | デフォルト値 |
| ----- | ------------------------------------------------------------ | ------------ | ---------- | ------ |
| リスト   | List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | 説明が提供されていません | true       | null   |



## メソッド
### 追加

```zenscript
["Hello", "World", "!"].add(value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add("today");
```

| パラメータ | タイプ                                                    | 説明        |
| ----- | ------------------------------------------------------ | --------- |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | リストに追加する値 |



```zenscript
["Hello", "World", "!"].add(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].add(1, "beautiful");
```

| パラメータ  | タイプ                                                    | 説明                                   |
| ------ | ------------------------------------------------------ | ------------------------------------ |
| インデックス | int                                                    | 追加するインデックス 後続のアイテムは1つ高いインデックスに移動されます |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | リストに追加する値                            |


### クリア

リスト内のすべての要素を削除します

```zenscript
["Hello", "World", "!"].clear();
```

### 取得する

指定したインデックスに保存されている [crafttweaker.api.data.IData](/vanilla/api/data/IData) を取得します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].get(index as int);
["Hello", "World", "!"].get(0);
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| インデックス | int | インデックス（0ベース） |


### 削除

指定したインデックスに保存されている [crafttweaker.api.data.IData](/vanilla/api/data/IData) を削除します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].remove(index as int);
["Hello", "World", "!"].remove(0);
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| インデックス | int | インデックス（0ベース） |


### セット

指定されたインデックスの項目を指定された値に設定します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
["Hello", "World", "!"].set(index as int, value as crafttweaker.api.data.IData);
["Hello", "World", "!"].set(0, "Bye");
```

| パラメータ  | タイプ                                                    | 説明                   |
| ------ | ------------------------------------------------------ | -------------------- |
| インデックス | int                                                    | 設定するインデックス (0-based) |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新しい値                 |



## プロパティー

| 名称  | タイプ | ゲッターあり | セッターあり |
| --- | --- | ------ | ------ |
| サイズ | int | true   | false  |

## キャスト

| 結果の種類                                                        | 暗黙的  |
| ------------------------------------------------------------ | ---- |
| List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)> | true |

