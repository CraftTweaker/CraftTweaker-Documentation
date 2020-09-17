# IItemUse Funktion

Eine ItemUseFunktion wird aufgerufen, wenn das zugehörige [Element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) für einen Block verwendet wird.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`importieren mods.contenttweaker.IItemUse;`

## Parameter

Die IItemUse Funktion ist eine Funktion mit den folgenden Parametern (In dieser Reihenfolge):

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) Spieler → Der Spieler, der den Rechtsklick macht
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Welt → Die Welt, in der der Spieler ist
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pos → Die Position des Blocks, auf dem das Element verwendet wird
- [Hand](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) → Gebrauchte Hand (Haupt oder Aus)
- [Facing](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) facing → Die Seite des Blocks, auf dem das Element verwendet wird
- [Position3f](/Vanilla/Utils/Position3f/) Blockschlag → Die relative X,Y und Z Koordinate des Blocks → Alle drei sind zwischen 0 und 1

Die Funktion muss ein [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/) Objekt zurückgeben.

## Beispiel

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
        world. etBlockState(<block:minecraft:fire>, firePos);
        Player. etHeldItem(Hand).Schaden(1, Spieler);
        gibt ActionResult. uccess();
    }

    gibt ActionResult.pass();
};
item.register();
```