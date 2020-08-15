# Drukarka

Drukowanie pozwala na sporządzenie kopii przedmiotu.

Domyślnie może kopiować książki i zaklęte książki.

## Usuwanie

## Usuń pasujące elementy do kopiowania.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Usuń wszystkie przedmioty do wydruku.
mods.cfm.Printer.remove();
```

## Dodawanie

## Dodaj element do kopiowania.

```zenscript
mods.cfm.Printer.add(@Nonnull final element IItemStack);

mods.cfm.Printer.add(<minecraft:name_tag>);
```