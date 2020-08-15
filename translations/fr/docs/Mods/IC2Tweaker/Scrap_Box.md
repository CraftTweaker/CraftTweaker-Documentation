# Boîte à fragmentation

## Paquet

`Importer mods.ic2.ScrapBox ;`

## Méthodes

- **[WeightedItemStack](/Vanilla/Items/WeightedItemStack/) weightedItem** La nouvelle entrée de la boîte de ferraille. Le pourcentage de poids sera divisé par 100.
- **poids flottant** Le poids de cette nouvelle entrée

### Ajouter un Drop (WeightedItemStack)

```zenscript
mods.ic2.ScrapBox.addDrop(WeightedItemStack weightedItem);

mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>.weight(0.1));
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore> % 10);
```

### Ajouter Drop (IItemStack, float)

```zenscript
mods.ic2.ScrapBox.addDrop(élément IItemStack, poids flottant);
mods.ic2.ScrapBox.addDrop(<minecraft:diamond_ore>, 0.1F);
```

## Retirer

- Si IC2 Classic Tweaker est installé et que Ic2 Classic est utilisé à la place d'Ic2 Experimental, il est possible d'enlever les gouttes de boites de ferraille. Voir [ici](/Mods/IC2ClassicTweaker/Scrap_Box) pour la documentation.
- Si vous utilisez Ic2 Experimental, alors le retrait n'est pas possible.