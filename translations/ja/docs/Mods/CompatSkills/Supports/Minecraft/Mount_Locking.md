# マウントロック

## マウントロック

この機能により、特定の実装エンティティに要件ロックを追加できます!

### 構文

[IEntityDefinition へのリンク](/Vanilla/Entities/IEntityDefinition/)

    # 空白の例:
    mods.compatskills.AnimalTamLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # 作業例:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")