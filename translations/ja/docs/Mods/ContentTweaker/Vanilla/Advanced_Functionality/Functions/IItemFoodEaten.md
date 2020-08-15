# IItemFoodEaten

IItemFoodEaten関数は、関連する [食品](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) が食べられるたびに呼び出されます。 このイベント *は、すでに与えられた* IItemUseFinish [を持っている場合、](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/) は発生しないことに注意してください。

## パッケージのインポート

問題が発生した場合は、パッケージをインポートする必要があるかもしれませんので、申し訳ありませんし、インポートを追加してください。  
`import mods.contenttweaker.IItemFoodEaten;`

## パラメータ

IItemFoodEatenは、以下のパラメータを持つ関数です(この順序で)。

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → 食べられる食品アイテム。
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) ワールド → プレイヤーがいる世界
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) プレイヤー → 食べ物を食べるプレイヤー

## 使用例

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item.onItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player.addPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```