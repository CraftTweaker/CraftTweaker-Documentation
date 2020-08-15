# IItemFoodEaten

La fonction IItemFoodEaten est appelée chaque fois que l'élément de nourriture [associé](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) est consommé. Notez que cet événement *ne lancera pas* si l'élément a déjà un [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/) fourni.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.IItemFoodEaten ;`

## Paramètres

L'IItemFoodEaten est une fonction avec les paramètres suivants (Dans cet ordre):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → L'élément de nourriture en cours de consommation.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) monde → Le monde dans lequel le joueur est
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) joueur → Le joueur qui mange la nourriture.

## Exemples

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item. nItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player. ddPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```