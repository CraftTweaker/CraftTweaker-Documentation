# Opérateur de la NAND

Une porte **NAND** est une porte de **ET** inversée. C'est la même chose que d'utiliser la sortie de la porte **ET** que l'entrée de la porte **PAS**. Cela signifie que la porte **NAND** renvoie `TRUE` dans tous les cas, sauf lorsque les deux entrées sont également `VRAIES`.

| Input 1 | Input 2 | Sortie |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      1 |
| 1       | 0       |      1 |
| 1       | 1       |      0 |

    Exemple vide :
    nand|[]~[]
    
    Exemple rempli :
    nand|[reskillable:defense|24]~[reskillable:agility|24]
    

## Cas d'utilisation

Une fois qu'un joueur atteint le niveau de défense 24 et que l'agilité niveau 24 cesse de lui permettre d'utiliser une armure en cuir :

```zenscript
addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
```