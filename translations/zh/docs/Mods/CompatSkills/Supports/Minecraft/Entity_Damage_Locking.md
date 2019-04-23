# 实体伤害锁定

## 实体伤害锁定

这个功能允许你锁定玩家攻击/伤害特定实体的能力。

### 语法：

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # 原型：
    mods.compatskills.EntityDamageLock.addEntityLock(IEntityDefinition definition, String... defaultRequirements);
    
    # 示例：
    mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie>, "reskillable:mining|5", "reskillable:magic|7");