# Funkcja IItemuse

Funkcja itemUseFunction jest wywoływana zawsze, gdy powiązany [element](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) jest używany w bloku.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.IItemUse;`

## Parametry

Funkcja IItemUse jest funkcją o następujących parametrach (w tej kolejności):

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) gracz → Gracz wykonujący prawe kliknięcie
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) Świat → Świat, w którym gracz jest
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) pop → Położenie bloku, na którym element jest używany
- [ręka](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) → użyta ręka (główna lub wyłączona)
- [zwrócenie](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) do kierunku jazdy → Strona bloku, na którym element jest użyty
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → Względna współrzędna X,Y i Z → Wszystkie trzy są pomiędzy 0 a 1

Funkcja musi zwrócić obiekt [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/).

## Przykład

```zenscript
#loader contenttweaker

importuje mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

element. axStackSize = 1;
item.maxDamage = 50;
element. nItemUse = function(gracz, świat, pos, ręka, twarz, blokHit) {
    var firePos = pos. etOffset(face 1);
    if (world.getBlockState(firePos). sReplaceable(Świat, firePos)) {
        świata. etBlockState(<block:minecraft:fire>, firePos);
        gracz. etHeldItem(hand).damage(1, gracz);
        zwraca ActionResult. uccess();
    }

    zwraca ActionResult.pass();
};
item.register();
```