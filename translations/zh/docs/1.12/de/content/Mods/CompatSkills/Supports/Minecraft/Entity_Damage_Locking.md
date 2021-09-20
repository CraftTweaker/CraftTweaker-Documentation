# 实体伤害锁定

## 实体伤害锁定

这个功能允许你锁定玩家攻击/伤害特定实体的能力。

### Syntax:

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Blank Example:
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Working Example:
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");