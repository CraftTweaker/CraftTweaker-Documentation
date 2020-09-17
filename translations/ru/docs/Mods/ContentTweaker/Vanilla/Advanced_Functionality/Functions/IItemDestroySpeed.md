# Скорость Разрушения II

Функция IItemDestroySpeed можно добавить к [предмету](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) и определить скорость разрушения предмета.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemDestroySpeed;`

## Параметры

IItemDestroySpeed является функцией со следующими параметрами:

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) mutableStack → предмет.
- [ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) blockState → Состояние добываемого блока.

Функция должна возвращать плавающее значение.