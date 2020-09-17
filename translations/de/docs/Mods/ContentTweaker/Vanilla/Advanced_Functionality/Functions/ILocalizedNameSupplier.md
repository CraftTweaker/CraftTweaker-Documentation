# ILocalizedNameSupplier

Die Funktion ILocalizedNameLieferant wird verwendet, um den Anzeigenamen eines [Elements](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) zu bestimmen.

## diese Klasse importieren

Wenn Sie die Klasse der Funktion importieren möchten, gehen Sie hier:

```zenscript
importieren mods.contenttweaker.LocalizedNameLieferant;
```

## Das Setup der Funktion

Die Funktion gibt einen String zurück und nimmt einen [IItemStack](/Vanilla/Items/IItemStack/) als Einzeleingabewert ein.

```zenscript
item.setLocalizedNameSupplier(function(itemStack) {
    return "mySuperItem";
});
```