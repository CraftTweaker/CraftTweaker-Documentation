# 驯服锁定

## 动物驯服锁定

这个功能允许你添加驯服特定实体的条件锁定。

### 语句

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # Blank Example:
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # Working Example:
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");