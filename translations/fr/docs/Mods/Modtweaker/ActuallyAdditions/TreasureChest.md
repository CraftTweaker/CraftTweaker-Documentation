# Coffre au Trésor

## Paquet

`format@@0 actuallyadditions.TreasureChest`

## Ajouter

```zenscript
//mods.actuallyadditions.TreasureChest.addLoot(IItemStack returnItem, int chance, int minAmount, int maxAmount);
mods.actuallyadditions.TreasureChest.addLoot(<minecraft:dirt>, 50, 1, 64);
```

## Retirer

```zenscript
//mods.actuallyadditions.TreasureChest.removeLoot(IItemStack returnItem);
mods.actuallyadditions.TreasureChest.removeLoot(<minecraft:gold_nugget>);
```