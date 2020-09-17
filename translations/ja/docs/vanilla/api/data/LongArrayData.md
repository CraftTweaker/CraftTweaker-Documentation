# LongArrayData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.LongArrayData
```

## 実装されたインターフェース
LongArrayData は以下のインタフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData)

## Constructors
```zenscript
new crafttweaker.api.data.LongArrayData(internal as long[] );
```
| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| 内部    | ♪long♪ | 説明が提供されていません |



## メソッド
### 追加

```zenscript
[100000, 8000, 50000].add(value as crafttweaker.api.data.IData);
[100000, 8000, 50000].add("today");
```

| パラメータ | タイプ                                                    | 説明        |
| ----- | ------------------------------------------------------ | --------- |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | リストに追加する値 |



```zenscript
[100000, 800000, 50000].add(index as int, value as crafttweaker.api.data.IData);
[100000, 80000, 50000].add(1, "beautiful");
```

| パラメータ  | タイプ                                                    | 説明                                   |
| ------ | ------------------------------------------------------ | ------------------------------------ |
| インデックス | int                                                    | 追加するインデックス 後続のアイテムは1つ高いインデックスに移動されます |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | リストに追加する値                            |


### asList

リストを取得<IData> この IData の表現は、 [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) 以外の場合は null を返します。

 戻り値: `この IData がリストでない場合は null です。`

戻り値 List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
[100000, 800000, 50000].asList();
```

### asMap

この IData のマップ<String, IData> 表現を取得します。 [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) 以外の場合は null を返します。

 戻り値: `この IData がマップでない場合は null です。`

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
[100000, 800000, 50000].asMap();
```

### asString

この IData の文字列表現を取得します

 戻り値: `この IData (値と型) を表す文字列。`

戻り値の文字列

```zenscript
[100000, 800000, 50000].asString();
```

### クリア

リスト内のすべての要素を削除します

```zenscript
[100000, 80000000, 50000].clear();
```

### を含む

Checks if this IData contains another IData, mainly used in subclasses of [crafttweaker.api.data.ICollectionData](/vanilla/api/data/ICollectionData), is the same as an equals check on other IData types

戻り値ブール値

```zenscript
[100000, 8000, 50000].contains(data as crafttweaker.api.data.IData);
[100000, 8000, 50000].contains("Display");
```

| パラメータ | タイプ                                                    | 説明                    |
| ----- | ------------------------------------------------------ | --------------------- |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | それが含まれているかどうかを確認するデータ |


### コピー

このIDataのコピーを作成します。

 IData はデフォルトで変更不能です。これを使用してオブジェクトの適切なコピーを作成します。

 戻り値: `この IData のコピー`

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 80000000, 50000].copy();
```

### 取得する

指定したインデックスに保存されている [crafttweaker.api.data.IData](/vanilla/api/data/IData) を取得します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].get(index as int);
[100000, 80000, 50000].get(0);
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| インデックス | int | インデックス（0ベース） |


### getId

内部 NBT タグの ID を取得します。

 どの種類の NBT が格納されているかを決定するために使用されます(例えばリスト)

 戻り値: `このデータが表現する NBT タグの ID。`

バイトを返します

```zenscript
[100000, 800000, 50000].getId();
```

### getString

内部 INBT タグの文字列表現を取得します。

 戻り値: `この IData の内部 INBT を表す文字列。`

戻り値の文字列

```zenscript
[100000, 800000, 50000].getString();
```

### 削除

指定したインデックスに保存されている [crafttweaker.api.data.IData](/vanilla/api/data/IData) を削除します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 800000, 50000].remove(index as int);
[100000, 80000, 50000].remove(0);
```

| パラメータ  | タイプ | 説明           |
| ------ | --- | ------------ |
| インデックス | int | インデックス（0ベース） |


### セット

指定されたインデックスの項目を指定された値に設定します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
[100000, 8000, 50000].set(index as int, value as crafttweaker.api.data.IData);
[100000, 80000, 50000].set(0, "Bye");
```

| パラメータ  | タイプ                                                    | 説明                   |
| ------ | ------------------------------------------------------ | -------------------- |
| インデックス | int                                                    | 設定するインデックス (0-based) |
| 値      | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 新しい値                 |



## プロパティー

| 名称  | タイプ | ゲッターあり | セッターあり |
| --- | --- | ------ | ------ |
| サイズ | int | true   | false  |

