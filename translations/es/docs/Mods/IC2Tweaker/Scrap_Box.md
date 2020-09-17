# Raspar caja

## Paquete

`importar mods.ic2.ScrapBox;`

## Métodos

- **[WeightedItemStack](/Vanilla/Items/WeightedItemStack/) weightedItem** La nueva entrada del grupo de soltar caja de basura. El peso porcentual se dividirá entre 100.
- **peso decimal** El peso de esta nueva entrada

### Añadir soltar (PesadodeItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Añadir soltar (ItemStack, flotante)

```zenscript
mods.ic2.ScrapBox.addDrop(elemento IItemStack, peso flotante);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Eliminar

- Si se instala IC2 Classic Tweaker y se utiliza Ic2 Classic en lugar de Ic2 Experimental, se pueden eliminar las gotas de la caja de desguace. Ver [aquí](/Mods/IC2ClassicTweaker/Scrap_Box) para documentación.
- Si se utiliza Ic2 Experimental, entonces la eliminación no es posible.