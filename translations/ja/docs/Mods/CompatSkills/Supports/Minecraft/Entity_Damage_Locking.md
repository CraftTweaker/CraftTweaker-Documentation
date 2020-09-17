# エンティティダメージロック

## エンティティ-ダメージロック

この機能を使用すると、特定のエンティティを攻撃/破損させる機能をロックできます。

### 構文

[IEntityDefinition へのリンク](/Vanilla/Entities/IEntityDefinition/)

    # 空白の例:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Working Example:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7');