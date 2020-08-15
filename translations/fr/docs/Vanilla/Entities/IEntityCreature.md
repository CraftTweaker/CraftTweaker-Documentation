# Créature IEntity

Une créature.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.entity.IEntityCreature ;`

## Extension de [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature étend [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Cela signifie que toutes les fonctions disponibles pour les objets [IEntityLiving](/Vanilla/Entities/IEntityLiving/) sont également disponibles pour IEntityCreature.

## Méthodes

### ZenGetters/Setters

| ZenGetter                                   | Type de texte                           |
| ------------------------------------------- | --------------------------------------- |
| a le chemin d'accès                         | booléen                                 |
| La distance de la page d'accueil est grande | booléen                                 |
| Position de la maison                       | [Pos IBlock](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance                         | flottant                                |
| hasHome                                     | booléen                                 |

### Méthodes Zen

#### jouer un son vivant

La méthode n'attend rien.  
Ne retourne rien.

```zenscript
entCreObj.playLivingSound();
```

#### Définir ou détacher la maison

Première méthode attend un objet [IBlockPos](/Vanilla/World/IBlockPos/) et un int.  
La seconde méthode ne attend rien.  
Les deux méthodes ne retournent rien.

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Vérifier si une position est dans la distance de la maison

La méthode attend un objet [IBlockPos](/Vanilla/World/IBlockPos/) .  
Renvoie un bool.

```zenscript
format@@0 entAnObj.isPositionWithinHomeDistance
```