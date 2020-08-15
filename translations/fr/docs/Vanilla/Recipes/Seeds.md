# Graines

Les graines sont des choses que vous obtenez en frappant l'herbe haute.

## Imprimer toutes les graines dans le journal

Cette commande affichera toutes les sources enregistrées dans le journal.

Doit être effectué par un joueur ou une console, ne peut pas être écrit dans un fichier zs.

    1.12
    /ct seeds
    
    pre-1.12
    /mt seeds
    

## Ajouter une graine

Ajoute `élément` en tant que goutte.  
**Les poids sont relatifs à la graine d'herbe, qui a un poids de 10 (<unk> 10 %)!**

```zenscript
vanilla.seeds.addSeed(item);
```

`item` est un [weightedItemStack](/Vanilla/Items/WeightedItemStack/). Qu'est-ce que cela veut dire? Cela signifie simplement que vous devez lui donner un pourcentage comme ceci:

```zenscript
//ajoute des carottes avec un poids de 1
vanilla.seeds.addSeed(<minecraft:carrot> % 1);
```

## Supprimer une graine

Empêche `élément` d'être un dépôt de graine.

```zenscript
vanilla.seeds.removeSeed(item);
```

`item` est un [Ingrédient](/Vanilla/Variable_Types/IIngredient/).

## Récupérer toutes les graines enregistrées

Renvoie tous les éléments en tant que liste [weightedItemStack](/Vanilla/Items/WeightedItemStack/).

```zenscript
val seedList = vanilla.seeds.seeds.seeds;

for item in seedList {
    print("Item: " ~ item. tack.displayName ~ " || Chance: " ~ item.percent ~ "%");
}
```