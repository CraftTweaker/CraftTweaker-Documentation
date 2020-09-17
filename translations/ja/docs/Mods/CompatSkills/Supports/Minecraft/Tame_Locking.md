# テイムロック

## 動物テイムロック

この機能を使用すると、特定のエンティティをテイムするための要件ロックを追加できます。

### 構文

[IEntityDefinition へのリンク](/Vanilla/Entities/IEntityDefinition/)

    # 空白の例:
    mods.compatskills.AnimalTamLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # 作業例:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7');