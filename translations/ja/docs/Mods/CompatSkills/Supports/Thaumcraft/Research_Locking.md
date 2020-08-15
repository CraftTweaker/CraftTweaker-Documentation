# 研究ロック

## 機能:

この機能を使用すると、Researchの取得を一定の要件グループの背後にロックできます。 これは例えば、(下の例で示すように)特定の次元にあるという要件の背後にある「Golem Research」の取得を設定することができます。 これは研究を得るためにはその次元にいる必要があるということです しかし研究を得ることができれば それは次元を離れることによって"リセット"や"学ばない"またはもはや一般的な要件を満たしていません!

## 構文

    mods.compatskills.Thaumcraft.addResearchLock(ResearchKey, String... requirements);
    
    mods.compatskills.Thaumcraft.addResearchLock("GOLEMVISION", "dim|1");