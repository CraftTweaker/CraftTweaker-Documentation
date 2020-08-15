# Verrouillage des tuiles

## Verrouillage de la tuile

Cette fonctionnalité vous permet de verrouiller la possibilité pour les joueurs d'interagir avec des Tile-Entités spécifiques.

### Syntaxe :

    // Exemple vide
    mods.compatskills.TileEntityLock.addTileEntityLock(String tileName, String... verrouillé);
    
    // Exemple de travail
    mods.compatskills.TileEntityLock.addTileEntityLock("minecraft:furnace", "reskillable:defense|5");