# IItemUseFinish

IItemUseFinish 関数は [アイテム](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) に追加でき、ユーザーがアイテムを使用して終了したときにのみトリガーされます (e. を選択します。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemUseFinish;`

## パラメータ

IItemRightClickFunction は以下のパラメータを持つ関数です。

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → 使用される項目
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → プレイヤーがいる世界
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) エンティティ → アイテムを使用するエンティティ

関数は [IItemStack](/Vanilla/Items/IItemStack/) を返す必要があります。

## 例

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```