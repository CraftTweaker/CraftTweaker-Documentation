# DirectionAxis

Represents a direction axis (X, Y, Z)

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.DirectionAxis
```

## Implemented Interfaces
DirectionAxis implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## メソッド
### getCoordinate

Gets the coordinate of this axis based on the given values, if this axis is "X", then it will return the value of the "x" parameter

Returns int

```zenscript
<directionaxis:x>.getCoordinate(x as int, y as int, z as int);
<directionaxis:x>.getCoordinate(1, 2, 3);
```

| パラメータ | タイプ | 説明                        |
| ----- | --- | ------------------------- |
| x     | int | x value of the coordinate |
| y     | int | y value of the coordinate |
| z     | int | z value of the coordinate |



## プロパティー

| 名称            | タイプ      | Has Getter | Has Setter |
| ------------- | -------- | ---------- | ---------- |
| commandString | 文字列型     | true       | false      |
| horizontal    | boolean型 | true       | false      |
| 名前            | 文字列型     | true       | false      |
| ordinal       | int      | true       | false      |
| vertical      | boolean型 | true       | false      |

