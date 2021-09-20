# 维度锁定

## 维度锁定

这个功能锁定了玩家进入特定维度的能力，除非满足条件！

### 语句

    Blank Example:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    Working Example:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7");