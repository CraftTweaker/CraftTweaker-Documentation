# Drucker

Mit dem Drucken können Sie eine Kopie eines Artikels erstellen.

Standardmäßig können schriftliche Bücher und verzauberte Bücher kopiert werden.

## Entfernen

## Entfernen Sie passende kopierbare Elemente.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Alle druckbaren Elemente entfernen.
mods.cfm.Printer.remove();
```

## Hinzufügen

## Kopierbares Element hinzufügen.

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack Item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```