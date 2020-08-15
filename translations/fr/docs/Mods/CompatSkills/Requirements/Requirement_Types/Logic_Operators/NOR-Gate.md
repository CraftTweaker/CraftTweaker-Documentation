# Opérateur NOR

Une porte **NOR** est une porte **OU** inversée. C'est la même chose que d'utiliser la sortie de la porte **OU** que l'entrée de la porte **PAS**. Cela signifie que la porte **NOR** ne renvoie `VRAI` que lorsque les deux entrées sont `FALSE`.

| Input 1 | Input 2 | Sortie |
| ------- | ------- | ------:|
| 0       | 0       |      1 |
| 0       | 1       |      0 |
| 1       | 0       |      0 |
| 1       | 1       |      0 |

    Exemple vide :
    nor|[]~[]
    
    Exemple rempli :
    ou|[reskillable:mining|5]~[reskillable:gathering|5]
    

## Cas d'utilisation

Ne permettre l'utilisation d'une pelle en bois que jusqu'à ce que le joueur obtienne un minage ou collecte de niveau 5:

```zenscript
addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");
```