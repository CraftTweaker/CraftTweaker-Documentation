# Printer

The Print allows you to make a copy of an item.

By default can copy written books and enchanted books.

## Enlèvement

## Remove matching copyable items.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Remove all printable items.
mods.cfm.Printer.remove();
```

## Ajout en cours

## Add a copyable item.

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```