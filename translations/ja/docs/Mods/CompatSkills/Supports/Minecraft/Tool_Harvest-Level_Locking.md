# ツール収穫レベルのロック

## 機能:

このロックは、パックの作成者が収穫レベルの背後にある一般的または特定のツール「種類」でツールをロックする機能を追加します。 つまり、一連の要件の後ろに「3」の収穫レベルを持つすべてのつるはしをロックダウンすることができます。 または一般的には、要件のセットの背後に3の収穫レベルを持つすべてのツール!

## 構文

    mods.compatskills.HarvestLock.addToolLevelLock(int level, String... requirements);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... requirements);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("pickax", 3, "dim|1");