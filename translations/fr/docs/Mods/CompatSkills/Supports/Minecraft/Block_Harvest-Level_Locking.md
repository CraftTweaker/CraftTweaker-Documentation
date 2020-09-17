# Verrouillage du niveau de récolte des blocs

## Caractéristique:

Ce verrou fait que le joueur ne peut pas casser un bloc avec le niveau de récolte défini à moins qu'un ensemble de conditions ne soit rempli. Par exemple ci-dessous, vous pouvez voir que les blocs avec un niveau de moisson de 3 ne peuvent être cassés que dans la fin. Cet exemple n'est pas vraiment si grand dans la pratique, mais il montre ce que ce type de serrure est capable de faire.

## Syntaxe :

    mods.compatskills.HarvestLock.addBlockLevelLock(int niveau, String... exigences);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");