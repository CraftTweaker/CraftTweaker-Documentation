# format@@0 IItemUseFinish

La fonction IItemUseFinish peut être ajoutée à un élément [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et ne sera déclenchée que lorsqu'un utilisateur termine à l'aide de l'élément (e. . finit de manger).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemUseFinish ;`

## Paramètres

La fonction IItemRightClickFonction est une fonction avec les paramètres suivants :

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → L'élément qui est utilisé
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde dans lequel le joueur est
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) entity → The entity using the item

La fonction doit retourner une [IItemStack](/Vanilla/Items/IItemStack/).

## Exemple

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```