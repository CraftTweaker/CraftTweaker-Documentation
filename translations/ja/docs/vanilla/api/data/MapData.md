# MapData



crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.data.MapData
```

## 実装されたインターフェース
MapData は以下のインターフェイスを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [crafttweaker.api.data.IData](/vanilla/api/data/IData)

## Constructors
```zenscript
new crafttweaker.api.data.MapData();
```
```zenscript
new crafttweaker.api.data.MapData(map as crafttweaker.api.data.IData[String]);
```
| パラメータ | タイプ                                                            | 説明           |
| ----- | -------------------------------------------------------------- | ------------ |
| 地図    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | 説明が提供されていません |



## メソッド
### asList

リストを取得<IData> この IData の表現は、 [crafttweaker.api.data.ListData](/vanilla/api/data/ListData) 以外の場合は null を返します。

 戻り値: `この IData がリストでない場合は null です。`

戻り値 List<[crafttweaker.api.data.IData](/vanilla/api/data/IData)>

```zenscript
myMapData.asList();
```

### asMap

この IData のマップ<String, IData> 表現を取得します。 [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) 以外の場合は null を返します。

 戻り値: `この IData がマップでない場合は null です。`

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String]

```zenscript
myMapData.asMap();
```

### asString

この IData の文字列表現を取得します

 戻り値: `この IData (値と型) を表す文字列。`

戻り値の文字列

```zenscript
myMapData.asString();
```

### を含む

マップに与えられたキーが含まれているかどうかを確認します。

戻り値ブール値

```zenscript
myMapData.contains(key as String);
myMapData.contains("Hello");
```

| パラメータ | タイプ  | 説明     |
| ----- | ---- | ------ |
| キー    | 文字列型 | 検索するキー |


### コピー

このIDataのコピーを作成します。

 IData はデフォルトで変更不能です。これを使用してオブジェクトの適切なコピーを作成します。

 戻り値: `この IData のコピー`

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.copy();
```

### 取得する

キーに関連付けられた値を取得します

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.get(key as String);
myMapData.get("Hello");
```

| パラメータ | タイプ  | 説明     |
| ----- | ---- | ------ |
| キー    | 文字列型 | 検索するキー |


### getId

内部 NBT タグの ID を取得します。

 どの種類の NBT が格納されているかを決定するために使用されます(例えばリスト)

 戻り値: `このデータが表現する NBT タグの ID。`

バイトを返します

```zenscript
myMapData.getId();
```

### getString

内部 INBT タグの文字列表現を取得します。

 戻り値: `この IData の内部 INBT を表す文字列。`

戻り値の文字列

```zenscript
myMapData.getString();
```

### マージ

このマップと他のマップを統合します。 このマップのエントリと他のマップが共有している場合、値をマージしようとします。 これが動作しない場合は、他のマップからの値が使用されます。

戻り値 [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)

```zenscript
myMapData.merge(crafttweaker.api.data.MapData);
myMapData.merge({Doodle: "Do});
```

| パラメータ | タイプ                                                        | 説明      |
| ----- | ---------------------------------------------------------- | ------- |
| その他   | [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | その他の地図。 |


### 置く

Adds は、与えられたキーの値を設定するか、それ以前に存在しなかった場合に新しいエントリを作成します。

戻り値 [crafttweaker.api.data.IData](/vanilla/api/data/IData)

```zenscript
myMapData.put(key as String, value as crafttweaker.api.data.IData);
myMapData.put("Hello", "Goodbye");
```

| パラメータ | タイプ                                                    | 説明        |
| ----- | ------------------------------------------------------ | --------- |
| キー    | 文字列型                                                   | 値を設定するキー。 |
| 値     | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 設定する値。    |


### putAll

指定されたマップからすべてのエントリをこのマップに追加します。 既存のキーを上書きできます。

```zenscript
myMapData.putAll(map as crafttweaker.api.data.IData[String]);
myMapData.putAll({Hello: "Goodbye", Item: "Bedrock"});
```

| パラメータ | タイプ                                                            | 説明             |
| ----- | -------------------------------------------------------------- | -------------- |
| 地図    | [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | この地図に追加される他の項目 |


### 削除

与えられたキーを持つエントリをマップから削除します。

```zenscript
myMapData.remove(key as String);
myMapData.remove("Somewhere");
```

| パラメータ | タイプ  | 説明          |
| ----- | ---- | ----------- |
| キー    | 文字列型 | 削除するエントリのキー |



## プロパティー

| 名称      | タイプ        | ゲッターあり | セッターあり |
| ------- | ---------- | ------ | ------ |
| isEmpty | boolean型   | true   | false  |
| keySet  | 設定<String> | true   | false  |
| サイズ     | int        | true   | false  |

## 演算子
### 追加

指定されたIDataのすべてのエントリをこのエントリに追加します。

```zenscript
myMapData + data as crafttweaker.api.data.IData
```

| パラメータ | タイプ                                                    | 説明           |
| ----- | ------------------------------------------------------ | ------------ |
| データ   | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | 説明が提供されていません |

## キャスト

| 結果の種類                                                          | 暗黙的  |
| -------------------------------------------------------------- | ---- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)[String] | true |

