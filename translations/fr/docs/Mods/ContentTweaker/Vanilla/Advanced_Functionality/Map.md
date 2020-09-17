# Carte

Le paquet de carte vous permet de définir un waypoint en utilisant le gestionnaire d'événements waypoint de BASE.

## Importation du paquet

Vous pouvez importer le paquet pour que vous n'ayez pas à le taper à chaque fois.

    Importer mods.contenttweaker.Map ;
    

## Ajout de Waypoints

Il s'agit de la seule méthode exposée par le paquet Map et il vous permet de définir un waypoint à l'emplacement donné.  
C'est une méthode vide avec les paramètres :

- nom de la chaîne
- [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/)
- [Pos IBlock](/Mods/ContentTweaker/Vanilla/Types/Block/IBlockPos/)
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)

    Map.setWaypoint(String name, IWorld world, IBlockPos pos, CTColor color)