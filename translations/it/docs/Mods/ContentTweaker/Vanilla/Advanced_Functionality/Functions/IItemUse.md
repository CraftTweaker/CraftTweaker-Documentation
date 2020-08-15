# Funzione IItemUse

Un itemUseFunction viene chiamato ogni volta che l'elemento [associato](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) viene utilizzato su un blocco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import mods.contenttweaker.IItemUse;`

## Parametri

La funzione IItemUse è una funzione con i seguenti parametri (In questo ordine):

- [giocatore ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) → Il giocatore che fa il clic destro
- [mondo IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) → Il mondo in cui si trova il giocatore
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → La posizione del blocco su cui viene utilizzato l'elemento
- [Mano](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) mano → La mano usata (principale o off)
- [Faccia](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) rivolta verso → Il lato del blocco su cui viene utilizzato l'elemento
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → Le relative coordinate X,Y e Z del blocco → Tutti e tre sono tra 0 e 1

La funzione deve restituire un oggetto [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/).

## Esempio

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

item. axStackSize = 1;
oggetto.maxDanno = 50;
oggetto. nItemUse = function(player, world, pos, hand, facing, blockHit) {
    var firePos = pos. etOffset(facing, 1);
    se (world.getBlockState(firePos). sReplaceable(world, firePos)) {
        world. etBlockState(<block:minecraft:fire>, firePos);
        giocatore. etHeldItem(hand).damage(1, player);
        return AzioneRisultato. uccess();
    }

    return ActionResult.pass();
};
item.register();
```