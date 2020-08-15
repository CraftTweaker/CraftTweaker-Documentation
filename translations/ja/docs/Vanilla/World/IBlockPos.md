# IBlockPos

IBlockPosオブジェクトは、ゲーム内の位置を表します。

## パッケージのインポート

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.world.IBlockPos;`

## パラメータのないZenMethods

| ZenMethod    | ZenGetter/Caster | 戻り値                                       | 説明                                         |
| ------------ | ---------------- | ----------------------------------------- | ------------------------------------------ |
| getX()       | x                | int                                       | 位置のX値を返します。                                |
| getY()       | y                | int                                       | 位置のY値を返します。                                |
| getZ()       | z                | int                                       | 位置のZ値を返します。                                |
| asPosition3f | as IPosition3f   | [IPosition3f](/Vanilla/Utils/Position3f/) | Returns the position as Position3f Object. |

## パラメータ付きのZenMethods

### オフセットを取得

Returns a new IBlockPos that is `offset` blocks into the `direction` direction.

`IBlockPos getOffset(IFacing direction, int offset);`

Alternatively you can directly get the [IFacing](/Vanilla/World/IFacing/) objects using the static methods provided there.

- [IFacing](/Vanilla/World/IFacing/) direction → The direction
- int offset → その方向のブロックの数を指定しますか?