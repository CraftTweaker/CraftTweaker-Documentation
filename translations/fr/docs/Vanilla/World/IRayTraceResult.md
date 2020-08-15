# Résultat de l'IRayTrace

Lorsqu'un joueur regarde ou clique sur quelque chose, il tire un rayon qui va jusqu'à ce qu'il touche ce dont il a besoin pour frapper ou manquer.  
Le résultat d'un tel coup est un objet IRayTraceResult.

## Importation de la classe

Il pourrait être nécessaire de [importer](/AdvancedFunctions/Import/) la classe pour éviter les erreurs.  
`importer crafttweaker.world.IRayTraceResult`

## ZenGetters

Tout ce que vous pouvez faire est récupérer des informations à partir de ces objets, voici qui:  
Soyez prudent cependant, car tous les getters qui ne retournent pas un bool peuvent retourner `null`!

| Nom          | Type de type                            |
| ------------ | --------------------------------------- |
| isMiss       | booléen                                 |
| isEntité     | booléen                                 |
| isBlock      | booléen                                 |
| Entité       | [IEntity](/Vanilla/Entities/IEntity/)   |
| Pos de blocs | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| sideHit      | [IFacing](/Vanilla/World/IFacing/)      |