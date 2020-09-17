# IItemColorSupplier

Функция IItemColorSupplier может быть использована для предоставления [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) , который будет использоваться в течение чего-либо.

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами, так что лучше быть безопасным чем извините и добавьте импорт.  
`импорт mods.contenttweaker.IItemColorSupplier;`

## Параметры

Функция IItemColorSupplier - это функция со следующими параметрами.

- [IItemStack](/Vanilla/Items/IItemStack/) itemStack → предмет, цвет которого запрашивается.
- int tintIndex → индекс оттенка, используйте, что, однако, вам нравится. Функция должна возвращать [Color Object](/Mods/ContentTweaker/Vanilla/Types/Color/Color/).