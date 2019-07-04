# Printer

The Print allows you to make a copy of an item.

By default can copy written books and enchanted books.

## Removing

## Remove matching copyable items.

```java
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Remove all printable items.
mods.cfm.Printer.remove();
```

## Adding

## Add a copyable item.

```java
mods.cfm.Printer.add(@Nonnull final IItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```