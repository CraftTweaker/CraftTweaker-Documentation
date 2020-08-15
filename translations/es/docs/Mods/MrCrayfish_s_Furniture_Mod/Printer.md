# Impresora

La impresión le permite hacer una copia de un objeto.

Por defecto puede copiar libros escritos y libros encantados.

## Eliminando

## Eliminar elementos copiables coincidentes.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Elimina todos los elementos imprimibles.
mods.cfm.Printer.remove();
```

## Agregando

## Añadir un elemento copiable.

```zenscript
mods.cfm.Printer.add(@Nonnull final ItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```