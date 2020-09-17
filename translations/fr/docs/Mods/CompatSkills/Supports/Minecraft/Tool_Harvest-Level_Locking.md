# Verrouillage du niveau de récolte des outils

## Caractéristique:

Ce verrou permet aux auteurs de packs de verrouiller des outils en général ou des « types » spécifiques derrière leur niveau de récolte. Cela signifie que vous pouvez verrouiller toutes les pioches avec un niveau de récolte de "3" derrière un ensemble de conditions. Ou en général tous les outils avec un niveau de récolte de 3 derrière un ensemble d'exigences !

## Syntaxe :

    mods.compatskills.HarvestLock.addToolLevelLock(int niveau, String... exigences);
    mods.compatskills.HarvestLock.addToolLevelLock(String type, int level, String... exigences);
    
    mods.compatskills.HarvestLock.addToolLevelLock(3, "dim|1");
    mods.compatskills.HarvestLock.addToolLevelLock("pioche", 3, "dim|1");