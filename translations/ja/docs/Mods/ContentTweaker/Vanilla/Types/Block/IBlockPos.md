# IBlockPos

IBlockPosオブジェクトは、ゲーム内の位置を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.BlockPos;`

## パラメータのないZenMethods

| ZenMethod | ZenGetter | 戻り値 | 説明          |
| --------- | --------- | --- | ----------- |
| getX()    | x         | int | 位置のX値を返します。 |
| getY()    | y         | int | 位置のY値を返します。 |
| getZ()    | z         | int | 位置のZ値を返します。 |

## パラメータ付きのZenMethods

### オフセットを取得

`方向` または `方向` に `オフセット` ブロックの新しい IBlockPos を返します。

`IBlockPos getOffset(String directionName, int offset);`

`directionName` は以下の値を取ることができる。

- "down"
- "up"
- "北"
- "南"
- "東"
- "西"

`IBlockPos getOffset(Facing facing, int offset)` Parameters:

- [面](/Vanilla/World/IFacing/) → 方向
- int offset → その方向のブロックの数を指定しますか?