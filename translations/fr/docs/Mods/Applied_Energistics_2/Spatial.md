# Spatial

### Importation en cours

```zenscript
Importer mods.appliedenergistics2.Spatial ;
```

### Ajout en cours

Whitelist a TileEntity class for Spatial IO. Attention : Certaines entités de titre, en particulier les structures multiblocs, peuvent causer des erreurs inattendues ou des plantages lors du déplacement dans les E/S spatiales. Les développeurs de pack devraient tester tous les ajouts à la liste blanche des E/S spatiales.

```zenscript
Spatial.whitelistEntityName(String fullEntityClassName);

//Ajoute la petite caisse de stockage AA à la liste blanche des E/S spatiales
Spatial.whitelistEntity("de.ellpeck.actuallyadditions.mod.tile.TileEntityGiantChest");
```