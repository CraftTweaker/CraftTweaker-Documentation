# Fonction IItemUse

Une fonction itemUseFunction est appelée chaque fois que l'élément [associé](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) est utilisé sur un bloc.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemUse;`

## Paramètres

La fonction IItemUse est une fonction avec les paramètres suivants (Dans cet ordre):

- [joueur ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) → Le joueur faisant le clic droit
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde dans lequel le joueur est
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La position du bloc sur lequel l'élément est utilisé
- [Main](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) main → La main utilisée (main ou off)
- [Face à](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) face → Le côté du bloc sur lequel l'élément est utilisé
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → Le bloc relatif X,Y et Z coordonnées → Tous les trois sont entre 0 et 1

La fonction doit retourner un objet [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/).

## Exemple

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

item. axStackSize = 1;
item.maxDamage = 50;
élément. nItemUse = function(joueur, monde, pos, main, face, blockHit) {
    var firePos = pos. etOffset(facing, 1);
    if (world.getBlockState(firePos). sReplaceable(world, firePos)) {
        monde. etBlockState(<block:minecraft:fire>, firePos);
        joueur. etHeldItem(main).dommage(1, joueur);
        retour ActionResult. uccess();
    }

    return ActionResult.pass();
};
item.register();
```