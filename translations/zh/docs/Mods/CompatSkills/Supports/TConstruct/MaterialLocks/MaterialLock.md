# 材料锁

## 材料锁

在 CompatSkills 1.5.0中实现的 TConstruct 支持。 您现在有能力锁定：

    - 工具制作
    - 部件制作
    - 部件替换
    

用于特定的Tinker 构造材料。

### 语法：

    // 空白示例：
    mods.compatskills.MaterialLock.addMaterialLock(String identificer, String... 要求);
    
    // 示例:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");