# 骑乘锁定

## 骑乘锁定

这个功能添加骑乘特定实体的条件锁定。

### 语句

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Blank Example:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # Working Example:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")