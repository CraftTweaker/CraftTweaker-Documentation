# ナレッジロック

## 機能:

この機能を使用すると、Thaumcraftで観察または理論的知識獲得の取得をロックできます。

## ナレッジタイプ:

現在の知識タイプは観測用O、理論用Tです。

## 構文

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledgeType, String... requirements);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "dim|1");