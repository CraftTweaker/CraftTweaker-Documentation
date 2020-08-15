# Принтер

Печать позволяет сделать копию предмета.

По умолчанию можно копировать написанные книги и зачарованные книги.

## Удаление

## Удалить подходящие копируемые элементы.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Удаляем все элементы печати.
mods.cfm.Printer.remove();
```

## Добавление

## Добавить копируемый элемент.

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack);

mods.cfm.Printer.add(<minecraft:name_tag>);
```