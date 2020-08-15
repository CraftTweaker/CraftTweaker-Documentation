# 材料ロック

## Material-Lock

CompatSkills 1.5.0において、TConstrucuサポートが実装されました。ロックが可能になっています。

    - ツールの作成
    - ツールパーツの作成
    - パーツの交換
    

Tinker Construct'sの特定の素材(マテリアル)用。

### 構文:

    // Blank Example:
    mods.compatskills.MaterialLock.addMaterialLock(String identifier, String... requirements);
    
    // 例:
    mods.compatskills.MaterialLock.addMaterialLock("wood", "reskillable:mining|5", "reskillable:magic|7");