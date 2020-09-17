# IBlockColorサプライヤー

IBlockColorSupplier 関数は、 [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) を提供するために使用できます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IBlockColorSupplier;`

## パラメータ

IBlockColorサプライヤー関数は以下のパラメータを持つ関数です。

- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) の状態 → 色が要求されているブロックのブロック状態。
- [IBlockAccess](/Vanilla/World/IBlockAccess/) アクセス → 要求されているブロックのブロックアクセス
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → 要求されているブロックの位置。
- int tintIndex → 色素インデックスを使用します。 関数は [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) を返す必要があります。

## 使用例

```zenscript
#loader contenttweaker

import mods.contenttweaker.IBlockColorSupplier;
import mods.contenttweaker.BlockState;
import mods.contenttweaker.BlockPos;
import mods.contenttweaker.Color;

import crafttweaker.world.IBlockAccess;

function getBlockColor(state as BlockState, access as IBlockAccess, pos as BlockPos, tintIndex as int) as Color {
  //Returns a lime color
    return Color.fromInt(0x00FF00);
}
```