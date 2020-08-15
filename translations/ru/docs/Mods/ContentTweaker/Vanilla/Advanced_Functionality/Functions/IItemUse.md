# Функция IItemUse

Функция использования вызывается всякий раз, когда на блоке используется связанный [элемент](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemUse;`

## Параметры

Функция IItemUse является функцией со следующими параметрами (в этом порядке):

- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) игрок → Игрок делает правый клик
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → мир, в котором находится игрок
- [IBlockPos](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/) бак → Положение блока, на котором используется предмет
- [Рука](/Mods/ContentTweaker/Vanilla/Types/Player/Hand/) → Используемая рука (основная или выключенная)
- [Поставляю](/Mods/ContentTweaker/Vanilla/Types/Block/Facing/) перед → сторона блока, на котором используется предмет
- [Position3f](/Vanilla/Utils/Position3f/) blockHit → Относительная координата X,Y и Z → Все три находятся между 0 и 1

Функция должна возвращать объект [ActionResult](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/ActionResult/).

## Пример

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.ActionResult;

var item = VanillaFactory.createItem("fake_flint");

пункт. axStackSize = 1;
maxDamage = 50;
пункт. nItemUse = function(player, world, pos, hand, facing, blockHit) {
    var firePos = pos. etOffset(лицом 1);
    если (world.getBlockState(firePos). sReplaceable(world, firePos)) {
        world. etBlockState(<block:minecraft:fire>, FirePos);
        игрок. etHeldItem(рука).damage(1, игрок);
        возврат ActionResult. uccess();
    }

    return ActionResult.pass();
};
item.register();
```