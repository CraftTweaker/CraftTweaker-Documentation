# 材料ロック

## Material-Lock

CompatSkills 1.5.0において、TConstrucuサポートが実装されました。ロックが可能になっています。

    - モディファイアの追加
    

Tinker Construct'sにおける特定のモディファイアに関して。

### 構文:

    // 空白の例:
    mods.compatskills.ModifierLock.addModifierLock(String identifier, String... requirements);
    
    // 例:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7');