# IItemFoodEaten

La función ItemFoodEaten se llama cada vez que se come el [artículo](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/) asociado. Tenga en cuenta que este evento *no disparará* si el elemento ya tiene un [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/) proporcionado.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.ItemFoodEaten;`

## Parámetros

El ItemFoodEaten es una función con los siguientes parámetros (en este orden):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableItemStack → El alimento que se está comiendo.
- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que está el jugador
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) jugador → El jugador comiendo la comida.

## Ejemplos

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