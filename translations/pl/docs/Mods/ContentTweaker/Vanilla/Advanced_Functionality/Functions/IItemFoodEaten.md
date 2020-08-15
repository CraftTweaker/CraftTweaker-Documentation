# IItemFoodEaten

The IItemFoodEaten function is called whenever the associated [food item](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) is eaten. Note that this event *will not fire* if the item already has a provided [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/).

## Importowanie pakietu

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import mods.contenttweaker.IItemFoodEaten;`

## Parametry

The IItemFoodEaten is a function with the following parameters (In this order):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → The food item being eaten.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) player → The player eating the food.

## Przykłady

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
item.onItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player.addPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```