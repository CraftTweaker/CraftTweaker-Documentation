# IItemRightClick

Функция IItemRightClick может быть добавлена к [элементу](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) и будет вызвана, когда пользователь делает правую кнопку с предметом, выбранным в его основной руке.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemRightClick;`

## Параметры

Функция IItemRightClick - это функция со следующими параметрами:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → Предмет, который кликнул правой кнопкой
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → мир, в котором находится игрок
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) игрок → Игрок делает правый клик
- Строка → Или "OFF_HAND" или "MAIN_HAND"

Функция должна возвращать `"SUCCESS"`, `"PASS"` или `"FAIL"`

## Пример

```zenscript
zsItem.itemRightClick = function(stack, world, player, hand) {
    Commands.call("scoreboard players set @p name 5", player, world);
    return "Pass";
};
```