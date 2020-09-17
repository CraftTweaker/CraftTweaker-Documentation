# MutableItemStack

Une pile d'éléments mutables est un objet spécial [IItemStack](/Vanilla/Items/IItemStack/) qui ne peut être récupéré que depuis [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
Cela signifie toutes les méthodes de [IItemStack](/Vanilla/Items/IItemStack/), et celles de [IIngrédients](/Vanilla/Variable_Types/IIngredient/)!

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.MutableItemStack ;`

## Méthodes Zen

### Quantité

Le nombre d'objets de la pile est le nombre d'objets dans cette pile !

| Méthode Zen             | Type de paramètre | Libellé                                               |
| ----------------------- | ----------------- | ----------------------------------------------------- |
| setCount(compte)        | Indice            | Définit le nombre de piles sur le `count` fourni      |
| croissant(compte)       | Indice            | Augmente le nombre de la pile de `de` fournis         |
| rétrécissement (compte) | Indice            | Diminue le nombre de piles par le nombre de `` fourni |

### Dégâts

`dégâts (int amount, joueur ICTPlayer)`

Paramètres:

- int amount → The amount of damage points to give the item
- [joueur ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) → le joueur/entité endommageant l'objet