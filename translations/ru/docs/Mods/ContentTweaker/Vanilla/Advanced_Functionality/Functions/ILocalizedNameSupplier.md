# Поставщик ILocalizedNameName

Функция ILocalizedNameSupplier используется для программирования определить [отображаемое имя элемента](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/).

## импорт класса

Если вы хотите импортировать класс функции, перейдите сюда:

```zenscript
import mods.contenttweaker.LocalizedNameSupplier;
```

## Настройка функции

Функция возвращает строку и принимает [IItemStack](/Vanilla/Items/IItemStack/) в качестве одного входного параметра.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```