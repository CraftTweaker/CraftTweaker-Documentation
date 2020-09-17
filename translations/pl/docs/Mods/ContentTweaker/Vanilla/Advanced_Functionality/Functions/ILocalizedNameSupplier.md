# ILocalizedNameSupplier

Funkcja ILocalizedNameSupplier jest używana do programistycznego określania nazwy wyświetlanej [elementu](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/)

## importowanie klasy

Jeśli chcesz zaimportować klasę funkcji, tutaj:

```zenscript
import mods.contenttweaker.LocalizedNameSupplier,
```

## Konfiguracja funkcji

Funkcja zwraca ciąg znaków i przyjmuje [IItemStack](/Vanilla/Items/IItemStack/) jako pojedynczy parametr wejściowy.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    zwraca "mySuperItem";
});
```