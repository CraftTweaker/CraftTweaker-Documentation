# エンチャントビルダー

このパッケージを使用すると、ツール、武器、おそらく他のすべてのためのカスタムエンチャントを作成することができます。

## クラスのインポート

It might be required for you to import the class if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import mods.contenttweaker.enchantments.EnchantmentBuilder;`

## エンチャントの作成

何よりもまず、Material Builderを作成する必要があります。  
これは静的作成メソッドを使用して行うことができます。

```zenscript
//mods.contenttweaker.enchantments.EnchantmentBuilder.create(String name);
val myChant = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
```

覚えておいてください, あなたはあなたの変更を行った後にエンチャントを登録する必要があります.  
これは、新しいエンチャントの `IEnchantmentDefinition` を返す [レジスタ](/Vanilla/Enchantments/IEnchantmentDefinition/) メソッドで行うことができます。

```zenscript
myChant.register();
```

## プロパティー

`myChant.name` を使用して、これらのプロパティを設定して取得できます。

| 名前                                                            | タイプ                                                                          |
| ------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| name                                                          | 文字列                                                                          |
| allowedOnBooks                                                | bool                                                                         |
| 適用可能なスロット                                                     | [IEntityEquipmentSlot](/Vanilla/Entities/IEntityEquipmentSlot/)[] (デフォルト: 空) |
| 呪いの                                                           | bool                                                                         |
| ドメイン                                                          | string (default: "contenttweaker")                                           |
| maxLevel                                                      | int (デフォルト: 1)                                                               |
| minLevel                                                      | int (デフォルト: 1)                                                               |
| レア度                                                           | 文字列 (以下のカスタムメソッドを使用)                                                         |
| トレジャー|宝物|宝物|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財宝|財 | bool                                                                         |
| タイプ                                                           | 文字列 (以下のカスタムメソッドを使用)                                                         |

## 計算されたプロパティ

これらのプロパティ機能を設定して取得できます。

| 名前                         | パラメータ                                                                                                                                                                                                                  | 戻り値    |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| canApply                   | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) 項目                                                                                   | bool   |
| canApplyAtEnchantmentTable | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IItemStack](/Vanilla/Items/IItemStack/) 項目                                                                                   | bool   |
| canApplyAs                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) other                                                 | bool   |
| calcDamageByCreature       | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [String]() creatureType                                                                                        | float型 |
| calcEnchantabilityMin      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int    |
| calcEnchantabilityMax      | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | int    |
| calcModifierDamage         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level, [IDamageSource](/Vanilla/Damage/IDamageSource/) damageSource                                                   | int    |
| calcTranslatedName         | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [int]() level                                                                                                                 | 文字列    |
|                            |                                                                                                                                                                                                                        |        |
| onEntityDamaged            | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) target, [int]() level   | 無効です   |
| onUserHurt                 | [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) thisEnchantment, [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) user, [IEntity](/Vanilla/Entities/IEntity/) attacker, [int]() level | 無効です   |

## レア度と種類

これらのメソッドを使用すると、タイポを作成した場合に即座に通知されます。

```zenscript
//Rarities
myChant.setRarityCommon()
myChant.setRarityUncommon()
myChant.setRarityRare()
myChant.setRarityVeryRare()

//Types
myChant.setTypeAll()
myChant.setTypeArmor()
myChant.setTypeFeed()
myChant.setTypeLegs()
myChant.setTypeChest()
myChant.setTypeHead()
myChant.setTypeWeapon()
myChant.setTypeDigger()
myChant.setTypeFishingRod()
myChant.setTypeBreakable()
myChant.setTypeBow()
myChant.setTypeWearable()
```

## 例

```zenscript
#loader contenttweaker
val builder = mods.contenttweaker.enchantments.EnchantmentBuilder.create("kindlich_chant");
builder.applicableSlots = [mainHand, offhand, feet, legs, chest, head];
builder.setTypeAll();
builder.setRarityVeryRare();
builder.calcModifierDamage = function(thisEnch, level, damageSource){
    return level;
};

builder.onUserHurt = function(thisEnch, entity, attacker, level) {
    entity.health = entity.maxHealth;
    if(entity instanceof crafttweaker.player.IPlayer) {
        val player as crafttweaker.player.IPlayer = entity;
        player.foodStats.addStats(100, 10.0f);
    }

};

builder.register();

builder.name = "other_chant";
builder.domain = "definitely_not_cot";
builder.calcModifierDamage = null;
builder.onUserHurt = function(thisEnch, player, attacker, level) {
    player.sendMessage("EARNED IT!");   
};
builder.register();
```