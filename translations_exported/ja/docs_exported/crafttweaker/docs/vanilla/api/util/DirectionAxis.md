# 方向 軸

方向軸 (X, Y, Z) を表します

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.DirectionAxis
```

## 実装されたインターフェース
DirectionAxis は以下のインターフェースを実装しています。 つまり、利用可能な任意のメソッドはこのクラスでも使用できます。
- [craftweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getCoordinate

指定された値に基づいてこの軸の座標を取得します。 この軸が "X" の場合、"x" パラメータの値を返します。

 戻り値: `座標の値`

戻り値の種類: double

```zenscript
<directionaxis:x>.getCoordinate(x as double, y as double, z as double);
<directionaxis:x>.getCoordinate(1.2, 2.5, 3.87);
```

| パラメータ | タイプ    | 説明      |
| ----- | ------ | ------- |
| x     | double | 座標の x 値 |
| y     | double | 座標の y 値 |
| z     | double | 座標のz値   |



指定された値に基づいてこの軸の座標を取得します。 この軸が "X" の場合、"x" パラメータの値を返します。

 戻り値: `座標の値`

戻り値の種類: int

```zenscript
<directionaxis:x>.getCoordinate(x を int, y を int, z を int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| パラメータ | タイプ | 説明      |
| ----- | --- | ------- |
| x     | int | 座標の x 値 |
| y     | int | 座標の y 値 |
| z     | int | 座標のz値   |



## プロパティー

| 名称            | タイプ      | ゲッターあり | セッターあり |
| ------------- | -------- | ------ | ------ |
| commandString | 文字列型     | true   | false  |
| 水平方向          | boolean型 | true   | false  |
| 名前            | 文字列型     | true   | false  |
| 序数            | int      | true   | false  |
| 垂直方向          | boolean型 | true   | false  |

