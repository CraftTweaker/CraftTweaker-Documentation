# IItemFoodEaten

Функция IItemFoodEaten вызывается всякий раз, когда съеден соответствующий [еда](/Mods/ContentTweaker/Vanilla/Creatable_Content/ItemFood/). Обратите внимание, что это событие *не будет стрелять* , если элемент уже предоставлен [IItemUseFinish](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemUseFinish/).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemFoodEaten;`

## Параметры

IItemFoodEaten является функцией со следующими параметрами (в этом порядке):

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableStack → Еда съедена.
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → мир, в котором находится игрок
- [CTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) игрок → Игрок съел еду.

## Примеры

```zenscript
#loader contenttweaker

import mods.contenttweaker.VanillaFactory;

var item = VanillaFactory.createItem("suspicious_soup");

item.healAmount = 4;
item.saturation = 1.5;
пункт. nItemFoodEaten = function(stack, world, player) {
    if (!world.isRemote()) {
        player. ddPotionEffect(<potion:minecraft:weakness>.makePotionEffect(60, 1));
    }
};
item.register();
```