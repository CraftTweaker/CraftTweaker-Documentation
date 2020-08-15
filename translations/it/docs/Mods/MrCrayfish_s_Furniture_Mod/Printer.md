# Stampante

La stampa consente di fare una copia di un elemento.

Per impostazione predefinita può copiare libri scritti e libri incantati.

## Rimozione

## Rimuovi gli elementi copiabili corrispondenti.

```zenscript
mods.cfm.Printer.remove(@Optional final IIngredient item);

mods.cfm.Printer.remove(<minecraft:enchanted_book>);
// Rimuovi tutti gli elementi stampabili.
mods.cfm.Printer.remove();
```

## Aggiunta

## Aggiungi un elemento copiabile.

```zenscript
mods.cfm.Printer.add(@Nonnull final IItemStack item);

mods.cfm.Printer.add(<minecraft:name_tag>);
```