# ILocalizedNameSupplier

The ILocalizedNameSupplier function is used to programmatically determine an [Item's](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) display name.

## importazione della classe

Se vuoi importare la classe della funzione, qui vai:

```zenscript
import mods.contenttweaker.LocalizedNameSupplier;
```

## La configurazione della funzione

La funzione restituisce una stringa e richiede un [IItemStack](/Vanilla/Items/IItemStack/) come singolo parametro di ingresso.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```