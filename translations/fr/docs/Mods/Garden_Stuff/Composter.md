# Compositeur
## Paquet
`Importer des trucs mods.gardenics.CompostBin;`

## Méthodes
- **[IItemStack](/Vanilla/Liquids/IItemStack/) élément** L'élément à composter.
- **int processTime** Quantité d'énergie créée par tick dans une machine en ligne de base.
- **[IOreDictEntry](/Vanilla/OreDict/IOreDictEntry) oredictKey** Une entrée oreDictionnaire.

## Ajouter un élément compostable
```zenscript
mods.gardenics.CompostBin.add(IItemStack, int processTime);

mods.gardenstuff.CompostBin.add(<minecraft:carrot>, 150);
```

## Ajouter une entrée Compostable oreDictionary
```zenscript
mods.gardenics.CompostBin.add(oredictKey, int processTime);

mods.gardenstuff.CompostBin.add(<ore:cropCarrot>, 150);
```
