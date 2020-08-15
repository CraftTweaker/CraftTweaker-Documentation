# Direction

Represents a cardinal direction (north, south, east, west) and (up and down).

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.Direction
```

## メソッド
### rotateAround

Rotates this direction around a given Axis

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateAround(axis as crafttweaker.api.util.DirectionAxis);
<direction:north>.rotateAround(<directionaxis:north>);
```

| パラメータ | タイプ                                                                    | 説明                        |
| ----- | ---------------------------------------------------------------------- | ------------------------- |
| axis  | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | the Axis to rotate around |


### rotateY

Rotates this direction on the Y axis

 Returns: `the direction that rotated on the Y axis of this direction`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateY();
```

### rotateYCCW

Rotates this direction counter-clock wise on the Y axis

 Returns: `the direction that is counter clockwise on the Y axis`

Returns [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)

```zenscript
<direction:north>.rotateYCCW();
```


## プロパティー

| 名称              | タイプ                                                                    | Has Getter | Has Setter |
| --------------- | ---------------------------------------------------------------------- | ---------- | ---------- |
| axis            | [crafttweaker.api.util.DirectionAxis](/vanilla/api/util/DirectionAxis) | true       | false      |
| axisOffset      | int                                                                    | true       | false      |
| horizontalAngle | float型                                                                 | true       | false      |
| horizontalIndex | int                                                                    | true       | false      |
| インデックス          | int                                                                    | true       | false      |
| 名前              | 文字列型                                                                   | true       | false      |
| 正反対の            | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction)         | true       | false      |
| xOffset         | int                                                                    | true       | false      |
| yOffset         | int                                                                    | true       | false      |
| zOffset         | int                                                                    | true       | false      |

