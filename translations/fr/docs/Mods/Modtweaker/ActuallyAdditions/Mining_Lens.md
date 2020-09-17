# Lentille minière

## Paquet

`format@@0 mods.Actually yadditions.MiningLens`

## Ajouter

```zenscript
//mods.actuallyadditions.MiningLens.addStoneOre(IOreDictEntry ore, int weight);
mods.actuallyadditions.MiningLens.addStoneOre(<ore:oreIron>, 2);


//mods.actuallyadditions.MiningLens.addNetherOre(IOreDictEntry ore, int weight);
mods.actuallyadditions.MiningLens.addNetherOre(<ore:oreGold>, 5);
```

## Retirer

```zenscript
//mods.actuallyadditions.MiningLens.removeStoneOre(IOreDictEntry ore)
mods.actuallyadditions.MiningLens.removeStoneOre(<ore:oreIron>)



//mods.actuallyadditions.MiningLens.removeNetherOre(IOreDictEntry ore)
mods.actuallyadditions.MiningLens.removeNetherOre(<ore:oreGold>)
```