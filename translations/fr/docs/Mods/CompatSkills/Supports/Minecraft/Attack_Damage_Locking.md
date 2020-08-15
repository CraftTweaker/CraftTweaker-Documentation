# Verrouillage des dégâts d'attaque

## Caractéristique:

Cette fonctionnalité permet au joueur d'utiliser une arme/outil avec une valeur de dégâts d'attaque égale ou supérieure à la quantité définie. Cela signifie que, comme dans l'exemple ci-dessous, toutes les armes avec des dégâts d'attaque de 0,75 ou plus ne seront utilisables qu'à la fin.

For reference: 1 Damage = 0.5 Hearts You can see a quick reference guide to damage under [This Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Syntaxe :

    mods.compatskills.DamageLock.addDamageLock(double dégâts, chaîne... exigences);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");