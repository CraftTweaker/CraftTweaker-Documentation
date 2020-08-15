# BlockPos

ワールド内のブロックの位置を表します

crafttweakerのmod-idを持つmodによって追加されているクラスです。 従って、この機能を利用する場合はこのmodをインストールする必要があります。

## クラスのインポート
問題が発生した場合には、インポートが必要になります。とはいえ、お手数ですが予めインポートしておくほうが安全です。
```zenscript
crafttweaker.api.util.BlockPos
```

## Constructors
```zenscript
new crafttweaker.api.util.BlockPos(x as int, y as int, z as int);
```
| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| x     | int | 説明が提供されていません |
| y     | int | 説明が提供されていません |
| z     | int | 説明が提供されていません |



## メソッド
### 追加

2つの位置を追加し、結果を返します。

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).add(new BlockPos(3, 2, 1));
```

| パラメータ | タイプ                                                          | 説明       |
| ----- | ------------------------------------------------------------ | -------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 追加する他の位置 |



指定された値をこの位置に追加し、新しい値を持つ新しい位置を返します。

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).add(x as double, y as double, z as double);
new BlockPos(0, 1, 2).add(50.21, -20.8, -25.2);
```

| パラメータ | タイプ    | 説明     |
| ----- | ------ | ------ |
| x     | double | 追加するx値 |
| y     | double | 追加するY値 |
| z     | double | z値を追加  |


### crossProduct

このポジションのクロス積と与えられた位置に基づいて、新しいBlockPosを作成します。

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).crossProduct(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).crossProduct(new BlockPos(5, 8, 2););
```

| パラメータ | タイプ                                                          | 説明              |
| ----- | ------------------------------------------------------------ | --------------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 商品を横断するBlockPos |


### distanceSq

BlockPos の中心を使用して、この位置の二乗距離を指定した BlockPos、に取得します。

Double を返します。

```zenscript
new BlockPos(0, 1, 2).distanceSq(to as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10););
```

| パラメータ | タイプ                                                          | 説明              |
| ----- | ------------------------------------------------------------ | --------------- |
| to    | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | チェック対象のBlockPos |



指定された BlockPos までこの位置の二乗距離を取得します。

Double を返します。

```zenscript
new BlockPos(0, 1, 2).distanceSq(crafttweaker.api.util.BlockPos, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(new BlockPos(256, 128, 10);, true);
```

| パラメータ     | タイプ                                                          | 説明                         |
| --------- | ------------------------------------------------------------ | -------------------------- |
| to        | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | チェック対象のBlockPos            |
| useCenter | boolean型                                                     | 座標の中心を使うべきか? （各値に0.5を足します） |



この位置の2乗距離を指定した座標まで取得します。

Double を返します。

```zenscript
new BlockPos(0, 1, 2).distanceSq(x as double, y as double, z as double, useCenter as boolean);
new BlockPos(0, 1, 2).distanceSq(500.25, 250.75, 100.20, false);
```

| パラメータ     | タイプ      | 説明                         |
| --------- | -------- | -------------------------- |
| x         | double   | チェックする x 位置                |
| y         | double   | チェック対象の y 位置               |
| z         | double   | 確認するz位置                    |
| useCenter | boolean型 | 座標の中心を使うべきか? （各値に0.5を足します） |


### 下

この BlockPos よりも 1 ブロック低いこの BlockPos に基づいて、新しいBlockPos を作成します。

 戻り値: `この BlockPos よりも 1 ブロック低い新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).down();
```

### 東

この BlockPos の東にある 1 つのブロックに基づいて、新しいBlockPos を作成します。

 戻り値: `この BlockPos の 1 ブロック東にある新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east();
```


この BlockPos の東にある n 個のブロックに基づいて、新しい BlockPos を作成します

 戻り値: `この BlockPos の東側に n 個のブロックを持つ新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).east(n as int);
new BlockPos(0, 1, 2).east(2);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| n     | int | 説明が提供されていません |


### マンハッタン距離

マンハッタン・ディスタンスを取得します。このポスの距離は別の位置と比較されます。

Returns int

```zenscript
new BlockPos(0, 1, 2).manhattanDistance(crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).manhattanDistance(new BlockPos(4, 5, 6));
```

| パラメータ | タイプ                                                          | 説明             |
| ----- | ------------------------------------------------------------ | -------------- |
| その他   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 距離を取得するための他の位置 |


### 北へ

この BlockPos の北の 1 つのブロックに基づいて、新しい BlockPos を作成します。

 戻り値: `この BlockPos の北に 1 ブロックの新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north();
```


この BlockPos の北にある n 個のブロックに基づいて新しいBlockPos を作成します。

 戻り値: `この BlockPos の北に n 個のブロックがある新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).north(n as int);
new BlockPos(0, 1, 2).north(10);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| n     | int | 説明が提供されていません |


### オフセット

指定された [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) に基づいて、この BlockPos の1つのブロックオフセットであるこの BlockPos に基づいて新しいBlockPos を作成します。

 戻り値: `この BlockPos の 1 ブロックオフセットの新しい BlockPos`

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(direction as crafttweaker.api.util.Direction);
new BlockPos(0, 1, 2).offset(<direction:east>);
```

| パラメータ | タイプ                                                            | 説明           |
| ----- | -------------------------------------------------------------- | ------------ |
| 方向    | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | 説明が提供されていません |



指定された [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) に基づいて、この BlockPos の n 個のブロックオフセットであるこの BlockPos に基づいて新しいBlockPos を作成します。

 戻り値: `この BlockPos の n 個のブロックオフセット`

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).offset(crafttweaker.api.util.Direction, n as int);
new BlockPos(0, 1, 2).offset(<direction:south>, 3);
```

| パラメータ | タイプ                                                            | 説明           |
| ----- | -------------------------------------------------------------- | ------------ |
| 方向    | [crafttweaker.api.util.Direction](/vanilla/api/util/Direction) | 説明が提供されていません |
| n     | int                                                            | 説明が提供されていません |


### 南

このBlockPosの1ブロック南にあるこのBlockPosに基づいて、新しいBlockPosを作成します

 戻り値: `この BlockPos の 1 ブロック南にある新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south();
```


この BlockPos の南にある n ブロックに基づいて、新しいBlockPos を作成します。

 戻り値: `この BlockPos の南にある n ブロックの新しいブロック`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).south(n as int);
new BlockPos(0, 1, 2).south(12);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| n     | int | 説明が提供されていません |


### 減算

2 つの位置を一緒に減算し、結果を返します。

戻り値 [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos)

```zenscript
new BlockPos(0, 1, 2).subtract(pos as crafttweaker.api.util.BlockPos);
new BlockPos(0, 1, 2).subtract(new BlockPos(2, 1, 3));
```

| パラメータ | タイプ                                                          | 説明       |
| ----- | ------------------------------------------------------------ | -------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 削除する他の位置 |


### 上

この BlockPos よりも 1 つ高いブロックを基に、新しい BlockPos を作成します。

 戻り値: `この BlockPos よりも 1 つ高い新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up();
```


この BlockPos を基に、この BlockPos よりも高い n 個のブロックを基に新しいブロックを作成します。

 戻り値: `この BlockPos より高い n 個のブロックの新しいブロック`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).up(n as int);
new BlockPos(0, 1, 2).up(45);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| n     | int | 説明が提供されていません |


### 西

この BlockPos の1ブロック西にあるこの BlockPos に基づいて、新しいBlockPos を作成します。

 戻り値: `この BlockPos の1ブロック西にある新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west();
```


この BlockPos の西にある n 個のブロックに基づいて、新しいBlockPos を作成します。

 戻り値: `この BlockPos の西に n 個のブロックがある新しいBlockPos`

戻り値 net.minecraft.util.math.BlockPos

```zenscript
new BlockPos(0, 1, 2).west(n as int);
new BlockPos(0, 1, 2).west(120);
```

| パラメータ | タイプ | 説明           |
| ----- | --- | ------------ |
| n     | int | 説明が提供されていません |


### withinDistance

指定されたBlockPosがこの BlockPos の指定された距離内にあるかどうかをチェックします(これはBlockPosの中央を使用します)

戻り値ブール値

```zenscript
new BlockPos(0, 1, 2).withinDistance(pos as crafttweaker.api.util.BlockPos, doubleとしての距離);
new BlockPos(0, 1, 2).withinDistance(new BlockPos(80, 75, 54);, 10);
```

| パラメータ | タイプ                                                          | 説明                        |
| ----- | ------------------------------------------------------------ | ------------------------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | ブロックPos は距離内にあるかどうかを確認します |
| 距離    | double                                                       | チェックする距離                  |



## プロパティー

| 名称 | タイプ | ゲッターあり | セッターあり |
| -- | --- | ------ | ------ |
| x  | int | true   | false  |
| y  | int | true   | false  |
| z  | int | true   | false  |

## 演算子
### 追加

2つの位置を追加し、結果を返します。

```zenscript
new BlockPos(0, 1, 2) + pos as crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) + new BlockPos(3, 2, 1)
```

| パラメータ | タイプ                                                          | 説明       |
| ----- | ------------------------------------------------------------ | -------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 追加する他の位置 |
### SUB

2 つの位置を一緒に減算し、結果を返します。

```zenscript
new BlockPos(0, 1, 2) - crafttweaker.api.util.BlockPos
new BlockPos(0, 1, 2) - new BlockPos(2, 1, 3)
```

| パラメータ | タイプ                                                          | 説明       |
| ----- | ------------------------------------------------------------ | -------- |
| pos   | [crafttweaker.api.util.BlockPos](/vanilla/api/util/BlockPos) | 削除する他の位置 |

## キャスト

| 結果の種類 | 暗黙的   |
| ----- | ----- |
| long  | false |

