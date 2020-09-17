# Gestionnaires de tranches

ZenScript utilise des crochets pour référencer des objets de jeu tels que des éléments, des entités et Oredict.

## Comment utiliser les gestionnaires de bracket

Les accolades dans ZenScript sont définies en utilisant les caractères `<` et `>` , tout ce qui se trouve à l'intérieur de ces caractères est considéré comme un accolade.

Un exemple de gestionnaire de bracket serait le gestionnaire de bracket d'objets, qui vous donne accès aux éléments du jeu.

## Exemples

Un exemple du [gestionnaire de brackets d'article](/Vanilla/Brackets/Bracket_Item/) serait :

```zenscript
<minecraft:apple>
```

Cela vous donnera accès à l'élément `Apple` [](/Vanilla/Items/IItemStack/).

Un exemple du gestionnaire de bracket [OreDictEntry](/Vanilla/Brackets/Bracket_Ore/) serait :

```zenscript
<ore:ingotIron>
```

Cela vous donnera accès au [IOreDictEntry](/Vanilla/OreDict/IOreDictEntry/) pour `ingotIron`.