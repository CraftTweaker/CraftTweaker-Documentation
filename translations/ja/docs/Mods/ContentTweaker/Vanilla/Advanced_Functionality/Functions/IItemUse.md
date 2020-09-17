# IItemUse 関数

関連する [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) がブロック上で使用されるたびに、itemUseFunction が呼び出されます。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemUse;`

## パラメータ

IItemUse 関数は、以下のパラメータを持つ関数です(この順序で)。

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) プレーヤー → 右クリックを行うプレイヤー
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → プレイヤーがいる世界
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → アイテムが使用されているブロックの位置
- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) hand → 使用済みHand (メインまたはオフ)
- [向き合う](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) → アイテムが使用されているブロックの辺。
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → ブロックの相対的なX,YおよびZ座標→ 3つすべてが0から1の間です

関数は [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/) オブジェクトを返す必要があります。

## 例

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

item.maxStackSize = 1;
item.maxDamage = 50;
item.onItemUse = function(player, world, pos, hand, facing, blockHit) {
    var firePos = pos.getOffset(facing, 1);
    if (world.getBlockState(firePos).isReplaceable(world, firePos)) {
        world.setBlockState(<block:minecraft:fire>, firePos);
        player.getHeldItem(hand).damage(1, player);
        return ActionResult.success();
    }

    return ActionResult.pass();
};
item.register();
```