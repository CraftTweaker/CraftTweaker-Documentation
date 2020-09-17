# IItemUseFinish

Функция IItemUseFinish может быть добавлена к [элементу](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) и будет вызвана только когда пользователь закончит использование предмета (e. . закончит еду).

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemUseFinish;`

## Параметры

Функция IItemRightClickFunction - это функция со следующими параметрами:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) itemStack → Предмет используемый
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) мир → мир, в котором находится игрок
- [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) сущность → сущность, использующая элемент

Функция должна возвращать [IItemStack](/Vanilla/Items/IItemStack/).

## Пример

```zenscript
zsItem.onItemUseFinish = function(stack, world, player) {
    stack.damage(1, player);
    return stack;
};
```