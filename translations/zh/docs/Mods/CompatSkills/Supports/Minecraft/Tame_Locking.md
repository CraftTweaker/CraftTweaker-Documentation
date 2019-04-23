# 驯服锁定

## 动物驯服锁定

这个功能允许你添加驯服特定实体的条件锁定。

### 语法

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # 原型：
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements);
    
    # 示例：
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:wolf>, "reskillable:mining|5", "reskillable:magic|7");