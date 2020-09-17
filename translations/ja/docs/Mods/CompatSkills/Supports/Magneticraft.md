# 磁気いかだ（磁気）

## 説明:

Magneticraft サポートは現在以下のもので構成されています:

- すべての Magneticraft マルチブロックの文字列名をダンプするコマンド。 
    - コマンド: /ct magMultiBlocks
- Crt-based Syntaxを使用したマルチブロック ゲート。

### 構文

    Blank 例:
    mods.compatskills.MagMultiBlockGates.addGate(String multiBlockName, String failureMessage, String... defaultRequirements);
    
    Working Example:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "これはあなたのような馬鹿にはあまりにも複雑すぎます!", "reskillable:building|15", "reskillable:magic|7", "adv|minecraft:fused_seed", "stage|test");