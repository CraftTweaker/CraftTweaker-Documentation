# MCResourceLocation

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.MCResourceLocation
```

## 実装されたインターフェース
MCResourceLocationは以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
```zenscript
new crafttweaker.api.util.MCResourceLocation(namespace as String, path as String);
```
| パラメータ | タイプ  | 説明           |
| ----- | ---- | ------------ |
| 名前空間  | 文字列型 | 説明が提供されていません |
| 小道    | 文字列型 | 説明が提供されていません |



## メソッド
### compareTo

戻り値の種類: int

```zenscript
myMCResourceLocation.compareTo(p_compareTo_1_ as crafttweaker.api.util.MCResourceLocation);
```

| パラメータ            | タイプ                                                                              | 説明           |
| ---------------- | -------------------------------------------------------------------------------- | ------------ |
| p_compareTo_1_ | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | 説明が提供されていません |


### 等しい

戻り値の型: boolean

```zenscript
myMCResourceLocation.equals(other as Object);
```

| パラメータ | タイプ    | 説明           |
| ----- | ------ | ------------ |
| その他   | オブジェクト | 説明が提供されていません |


### getNamespace

戻り値の型: String

```zenscript
myMCResourceLocation.getNamespace();
```

### getPath

戻り値の型: String

```zenscript
myMCResourceLocation.getPath();
```

### hashCode

戻り値の種類: int

```zenscript
myMCResourceLocation.hashCode();
```

### toString

戻り値の型: String

```zenscript
myMCResourceLocation.toString();
```


## プロパティー

| 名称            | タイプ  | ゲッターあり | セッターあり |
| ------------- | ---- | ------ | ------ |
| commandString | 文字列型 | true   | false  |
| 名前空間          | 文字列型 | true   | false  |
| 小道            | 文字列型 | true   | false  |

