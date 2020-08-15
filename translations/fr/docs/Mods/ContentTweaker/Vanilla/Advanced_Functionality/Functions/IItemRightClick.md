# IItemRightClick

La fonction IItemClic droit peut être ajoutée à un élément [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) et sera déclenchée lorsqu'un utilisateur fait un clic droit avec l'élément sélectionné dans sa main principale.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemRightClick ;`

## Paramètres

La fonction IItemRightClick est une fonction avec les paramètres suivants :

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → L'élément qui est cliqué avec le bouton droit de la souris
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde dans lequel le joueur est
- [joueur ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) → Le joueur faisant le clic droit
- Main → Soit "OFF_HAND" ou "MAIN_HAND"

La fonction a besoin de retourner soit `"SUCCESS"`, `"PASS"` ou `"FAIL"`

## Exemple

```zenscript
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("joueurs de scoreboard définir @p nom 5", joueur, monde);
    return "Pass";
};
```