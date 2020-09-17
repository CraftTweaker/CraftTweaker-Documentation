# 収穫レベルのロックをブロック

## 機能:

このロックは、要件のセットが満たされていない限り、セットのHarvest-Levelでブロックを壊すことができないようにします。 以下の例では、Harvest-Level 3 のブロックは、終了時にのみ壊すことができることがわかります。 この例は実際にはそれほど素晴らしいものではありませんが、このタイプのロックが何を行うことができるかを示しています。

## 構文

    mods.compatskills.HarvestLock.addBlockLevelLock(int level, String... requirements);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");