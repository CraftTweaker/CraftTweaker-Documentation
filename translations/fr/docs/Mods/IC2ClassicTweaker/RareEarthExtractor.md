# Extracteur de terre rare

## Paquet

```zenscript
importer mods.ic2.RareEarthExtractor ;
```

## Méthode

- **valeur flottante**
- **[IItemStack](/Vanilla/Items/IItemStack/)... les entrées** peuvent avoir plus d'une fois spécifié pour l'entrée. Si c'est le cas, tous les éléments spécifiés donnent la même valeur spécifiée.

### Ajouter des entrées de Terre Rare

```zenscript
mods.ic2.RareEarthExtractor.addRareEarthEntries(valeur flottante, IItemStack... input);

mods.ic2.RareEarthExtractor.addRareEarthEntries(1.0F, <minecraft:bedrock>, <minecraft:iron_block>);
```