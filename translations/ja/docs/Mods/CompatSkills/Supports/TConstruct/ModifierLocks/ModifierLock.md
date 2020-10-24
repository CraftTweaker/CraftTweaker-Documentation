# Material Locks

## Material-Lock

CompatSkills 1.5.0において、TConstrucuサポートが実装されました。ロックが可能になっています。

    - モディファイアの追加
    

Tinker Construct'sにおける特定のモディファイアに関して。

### 構文:

    // Blank Example:
    mods.compatskills.ModifierLock.addModifierLock(String identifier, String... requirements);
    
    // Example:
    mods.compatskills.ModifierLock.addModifierLock("harvestwidth", "reskillable:mining|5", "reskillable:magic|7");