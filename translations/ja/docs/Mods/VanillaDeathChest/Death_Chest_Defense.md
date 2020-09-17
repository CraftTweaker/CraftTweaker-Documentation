# 死の宝箱の防御力

## パッケージのインポート

`import mods.vanilladeathchest.DeathChestDefense;`

## ロック解除アイテム

```zenscript
//DeathChestDefense.setUnlocker(string stage, IItemStack unlocker);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

上記のようなスタックサイズを指定することで、消費量/損傷量を設定することができます。

## アンロッカーアイテムを消費するのではなくダメージを与える

```zenscript
//DeathChestDefense.setDamageUnlockerInsteadOfConsume(string stage, bool flag);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## チャットメッセージのロック解除に失敗しました

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(string stage, string message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "You need to get a %2$s to unnamed@@2to unnamed@@3unnamed@@4!")
```

文字列は2つの引数をとります: 必要なアイテムの量と表示名です。

## ディフェンスエンティティ

```zenscript
//DeathChestDefense.setDefenseEntity(string stage, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## 防衛エンティティNBT

```zenscript
//DeathChestDefense.setDefenseEntityNBT(string stage, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        }
    ]
});
```

`nbt` は [DataMap](/Vanilla/Data/DataMap/) でなければなりません。

## 防衛施設のスポーン回数

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(string stage, int count);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```