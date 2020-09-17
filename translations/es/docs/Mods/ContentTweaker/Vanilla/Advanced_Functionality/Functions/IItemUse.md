# Función de ItemUse

Se llama a un itemUseFunction cada vez que se utiliza el [elemento](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) asociado en un bloque.

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema, así que más vale estar seguro que lo sentimos y añadir la importación.  
`importar mods.contenttweaker.IItemUse;`

## Parámetros

La función ItemUse es una función con los siguientes parámetros (en este orden):

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) jugador → El jugador haciendo clic derecho
- [Mundo](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) mundo → El mundo en el que está el jugador
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posición del bloque en el que se utiliza el elemento
- [Mano](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) mano → Mano usada (principal o off)
- [Enfrente](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) hacia → El lado del bloque en el que se utiliza el elemento
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → Coordenada relativa X,Y y Z del bloque → Los tres están entre 0 y 1

La función necesita devolver un objeto [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/).

## Ejemplo

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

item. axStackSize = 1;
item.maxDamage = 50;
item. nItemUse = function(player, world, pos, hand, facing, blockHit) {
    var firePos = pos. etOffset(facing, 1);
    if (world.getBlockState(firePos). sReplaceable(world, firePos)) {
        mundo. etBlockState(<block:minecraft:fire>, firePos);
        jugador. etHeldItem(mano).damage(1, jugador);
        return ActionResult. uccess();
    }

    return ActionResult.pass();
};
item.register();
```