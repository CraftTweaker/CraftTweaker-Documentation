# 骑乘锁定

## 骑乘锁定

这个功能添加骑乘特定实体的条件锁定。

### 语法

[连接到 IENtityDefinition](/Vanilla/Entities/IEntityDefinition/)

    # 原型：
    mods.compatskills.AnimalTameLock.addTameLock(IEntityDefinition definition, String... defaultRequirements)
    
    # 示例：
    mods.compatskills.AnimalTameLock.addTameLock(<entity:minecraft:pig>, "reskillable:mining|5", "reskillable:magic|7")