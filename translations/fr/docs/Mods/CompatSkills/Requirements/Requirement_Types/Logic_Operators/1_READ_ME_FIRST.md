# Syntaxe des exigences logiques

Maintenant que vous savez quelles portes logiques sont je peux décrire la syntaxe implémentée dans Reskillable qui leur permet d'être utilisées. Il y aura des exemples plus détaillés dans une section ultérieure.

Dans toutes les syntaxes ci-dessous `l'exigence` est la représentation de toutes les autres exigences supportées (y compris celles ajoutées par CompatSkills ou d'autres addons).

* * *

## Portes d'exigences unitaires

### PAS ENCORE

L'exigence logique la plus simple qui puisse être réaffirmée est la capacité d'inverser une exigence. Il fait cela en utilisant une porte **PAS** et la syntaxe pour elle est `not|require`. Comme décrit ci-dessus dans la section sur les portes logiques, cette exigence logique ne sera marquée comme satisfaite que si la condition `spécifiée` n'est pas remplie.

* * *

## Portes des exigences binaires

Les autres exigences logiques sont un peu plus complexes puisqu'elles prennent deux *exigences* d'entrée. As the logic gates are relatively simple the order of the requirements does not actually matter, however I will be referring to them as `requirement<sub>1</sub>` and `requirement<sub>2</sub>` as to differentiate which one is which.

They also share the syntax: `gate|[requirement<sub>1</sub>]~[requirement<sub>2</sub>]`. With the gate being either `and`, `nand`, `or`, `nor`, `xor`, or `xnor`.  
**Note**: The brackets around `requirement<sub>1</sub>` and `requirement<sub>2</sub>` are needed.

* * *

### ET Exigences

L'exigence **ET** contrairement aux autres exigences logiques est principalement utile pour les exigences logiques imbriquées (plus sur ce bas bas), comme verrouiller un objet ou un autre objet avec des exigences multiples requiert que toutes les conditions soient remplies. C'est la même chose que la fonctionnalité **ET** , donc elle devrait être utilisée lorsque cela est possible. car il facilitera la mise en forme de l'infobulle de manière plus facile à lire.

## Exemples

Tous les exemples ci-dessous seront montrés en utilisant la syntaxe du support CraftTweaker de CompatSkill comme il est plus facile à lire. Les exigences de logique fonctionnent aussi bien à partir de la configuration.

Tous les exemples de scripts CrT ci-dessous utilisent l'instruction d'importation : `import mods.compatskills.Requirement. ddRequirement;` c'est principalement pour réduire la longueur des autres lignes et les rendre plus lisibles. (Si vous copiez l'un des exemples, vous devrez l'inclure en haut de votre fichier de script. Quelques exemples ci-dessous qui commencent directement par des mods `. ompatskills.` sont des verrous spécifiques à CompatSkills et pour lesquels j'ai trouvé des exemples de logiques valables.

* * *

Permettre uniquement d'attaquer les cochons zombies en dehors du nether: `mods.compatskills.EntityDamageLock.addEntityLock(<entity:minecraft:zombie_pigman>, "not|dim|-1");`

* * *

Permet d'entrer dans le nether si un joueur a un niveau d'attaque ou de défense d'au moins 15 : `mods.compatskills.DimensionLock.addDimensionLock(-1, "ou|[reskillable:attack|15]~[reskillable:defense|15]");`

* * *

Une fois qu'un joueur atteint le niveau de défense 24 et que l'agilité niveau 24 cesse de lui permettre d'utiliser une armure en cuir :

    addRequirement(<minecraft:leather_helmet:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_chestplate:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_leggings:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    addRequirement(<minecraft:leather_boots:*>, "nand|[reskillable:defense|24]~[reskillable:agility|24]");
    

* * *

Autoriser l'utilisation d'une pelle en bois jusqu'à ce que le joueur obtienne un niveau de minage ou de collecte 5 : `addRequirement(<minecraft:wooden_shovel:*>, "nor|[reskillable:mining|5]~[reskillable:gathering|5]");`

* * *

Autoriser un joueur à utiliser des perles d'Ender uniquement si elles ont de la magie 32 ou si elles ont de l'agilité 32. Ne les laissez cependant pas utiliser s'ils ont les deux compétences au niveau 32 : `addRequirement(<minecraft:ender_pearl>, "xor|[reskillable:magic|32]~[reskillable:agility|32]");`. Cela peut être utile si vous voulez avoir plusieurs arbres de progression et assurez-vous qu'ils doivent en suivre un s'ils veulent continuer à utiliser des éléments spécifiques.

* * *

Il était difficile de trouver un exemple pour **XNOR**, cependant c'est un exemple de comment il peut fonctionner.

Permettre à un joueur de niveler la défense au niveau 5 uniquement s'il n'a pas encore mis de points en attaque ou s'il est au niveau d'attaque 32 : `mods. ompatskills.SkillLocks.addLevelLock(<skill:reskillable:defense>, 5, "xnor|[reskillable:attack|2]~[reskillable:attack|32]");`

### Exigences logiques imbriquées

Les exigences logiques imbriquées sont lorsque vous utilisez une exigence logique comme l'un des `paramètres d'exigence` dans une autre exigence logique. Faites particulièrement attention au placement entre parenthèses dans les exigences imbriquées.

* * *

Only allow diamond ore to be broken if the player has mining level 20 or if the player has both gathering level 25 and mining level 15: `addRequirement(<minecraft:diamond_ore>, "or|[reskillable:mining|20]~[and|[reskillable:gathering|25]~[reskillable:mining|15]]");` *Note*: This also has the side effect of not allowing players to place diamond ore unless they meet the requirement as well.

* * *

Only allow using the elytra with agility 15 in the end or having agility and magic levels 25 while not being in the end: `addRequirement(<minecraft:elytra:*>, "xor|[and|[dim|1]~[reskillable:agility|15]]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` *Note*: Once you reach agility and magic 25 you are unable to use the elytra in the end. C'est en partie à titre d'exemple et pas nécessairement ce que quelqu'un veut.

Another way that the above requirement could be written is: `addRequirement(<minecraft:elytra:*>, "reskillable:agility|15", "xor|[dim|1]~[and|[reskillable:agility|25]~[reskillable:magic|25]]");` because both sides require at least agility 15.