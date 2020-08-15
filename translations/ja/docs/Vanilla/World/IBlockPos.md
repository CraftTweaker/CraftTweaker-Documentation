# IBlockPos

IBlockPosオブジェクトは、ゲーム内の位置を表します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import crafttweaker.world.IBlockPos;`

## パラメータのないZenMethods

| ZenMethod    | ZenGetter/Caster | 戻り値                                       | 説明                            |
| ------------ | ---------------- | ----------------------------------------- | ----------------------------- |
| getX()       | x                | int                                       | 位置のX値を返します。                   |
| getY()       | y                | int                                       | 位置のY値を返します。                   |
| getZ()       | z                | int                                       | 位置のZ値を返します。                   |
| asPosition3f | IPosition3f として  | [IPosition3f](/Vanilla/Utils/Position3f/) | Position3f Object として位置を返します。 |

## パラメータ付きのZenMethods

### オフセットを取得

`方向` の方向に `ブロックをオフセット` する新しい IBlockPos を返します。

`IBlockPos getOffset(IFacing direction, int offset);`

あるいは、そこで提供されている静的メソッドを使用して [IFacing](/Vanilla/World/IFacing/) オブジェクトを直接取得することもできます。

- [IFacing](/Vanilla/World/IFacing/) direction → 方向
- int offset → その方向のブロックの数を指定しますか?