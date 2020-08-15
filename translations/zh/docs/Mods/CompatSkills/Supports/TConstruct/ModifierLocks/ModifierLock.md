# 材料锁

## 材料锁

在 CompatSkills 1.5.0中实现的 TConstruct 支持。 您现在有能力锁定：

    - 修饰符
    

对于特定的Tinker 构造的修饰符。

### 语法：

    // 空白示例：
    mods.compatskills.ModifierLock.addModifierLock(String identificer, String... 要求);
    
    // 示例:
    mods.compatskills.ModifierLock.addModifierLock("testwidth", "reskillable:mining|5", "reskillable:magic|7");