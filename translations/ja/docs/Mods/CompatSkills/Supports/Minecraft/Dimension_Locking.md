# 寸法ロック

## 寸法ロック

この機能は、要件が満たされない限り、特定の寸法に移動する能力をロックできます!

### 構文

    空白の例:
    mods.compatskills.DimensionLock.addDimensionLock(int dimension, String... defaultRequirements);
    
    作業例:
    mods.compatskills.DimensionLock.addDimensionLock(-1, "reskillable:mining|5", "reskillable:magic|7');