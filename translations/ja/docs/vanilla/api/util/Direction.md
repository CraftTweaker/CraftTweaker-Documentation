# 方向

基本方向(北、南、東、西)と(上下)を表します。

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.Direction
```

## メソッド
### rotateAround

指定した軸を中心にこの方向を回転します。

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| パラメータ | タイプ                                                                    | 説明    |
| ----- | ---------------------------------------------------------------------- | ----- |
| 軸     | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | 回転する軸 |


### rotateY

この方向を Y 軸に回転します。

 戻り値: `この方向のY軸で回転した方向`

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

この方向を反時計回りにY軸で回転させます。

 戻り値: `Y軸の反時計回りの方向`

戻り値 [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## プロパティー

| 名称              | タイプ                                                                    | ゲッターあり | セッターあり |
| --------------- | ---------------------------------------------------------------------- | ------ | ------ |
| 軸               | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true   | false  |
| axisOffset      | int                                                                    | true   | false  |
| 水平角度            | float型                                                                 | true   | false  |
| horizontalIndex | int                                                                    | true   | false  |
| インデックス          | int                                                                    | true   | false  |
| 名前              | 文字列型                                                                   | true   | false  |
| 正反対の            | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true   | false  |
| xOffset         | int                                                                    | true   | false  |
| yOffset         | int                                                                    | true   | false  |
| zOffset         | int                                                                    | true   | false  |

