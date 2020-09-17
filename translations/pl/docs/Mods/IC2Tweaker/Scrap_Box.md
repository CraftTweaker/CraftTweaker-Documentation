# Złom

## Pakiet

`importuj mods.ic2.ScrapBox;`

## Metody

- **[WażonyItemStack](/Vanilla/Items/WeightedItemStack/) ważony** Nowy wpis puli złomu. Procent wagi zostanie podzielony przez 100.
- **masa zmiennoprzecinkowa** Waga tego nowego wpisu

### Dodaj upuść (ósmy ItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Dodaj upuść (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(element IItemStack, ciężar zmienny);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Usuwanie

- Jeśli IC2 Classic Tweaker jest zainstalowany i używa się Ic2 Classic zamiast eksperymentalnego Ic2, można usunąć krople do skrzynki złomowej. Zobacz [tutaj](/Mods/IC2ClassicTweaker/Scrap_Box) aby uzyskać dokument.
- W przypadku stosowania eksperymentalnego Ic2, usunięcie nie jest możliwe.