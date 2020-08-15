# IBlockDropHandler

IBlockDropHandler 関数は、 [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) で作成された [ブロック](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) の高度なブロックドロップ処理を可能にするために使用されます。

## クラスのインポート

クラスをインポートしますか？ こちらへ：

```zenscript
import mods.contenttweaker.DropHandler;
```

## 関数の構造

関数は、次のパラメータを取るvoid 関数です。

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) がドロップします。
- [IBlockAccess](/Vanilla/World/IBlockAccess/) world -> 私たちがいる世界、 [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)の可能性があります。インスタンス化とダウンキャスト
- [IBlockPos](/Vanilla/World/IBlockPos/) position -> ブロックの位置
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) の状態 -> ブロックのブロック
- int fortune -> 使用されているツールのフォーチュンレベル

As this method does not return anything, all drops need to be added to the `drops` list using the exposed methods.  
Read about them [here](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## 例

```zenscript
block.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```