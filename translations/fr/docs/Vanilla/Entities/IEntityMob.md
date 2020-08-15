# IEntityMod

A Mod.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import crafttweaker.entity.IEntityMob;`

## Extension de [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Cela signifie que toutes les fonctions disponibles pour les objets [IEntityCreature](/Vanilla/Entities/IEntityCreature/) sont également disponibles pour IEntityMob.

## Méthodes

### Méthodes Zen

#### Vérifier si le monstre empêche le sommeil d'un joueur

La méthode nécessite un objet [IPlayer](/Vanilla/Players/IPlayer/) .  
Renvoie un bool.

```zenscript
entMobObj.isPreventingPlayerRest(joueur IPlayer);
```