# Important

Un objet IMaterial représente le matériau dont un bloc est composé.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods sans paramètres

| ZenGetter             | Méthode Zen         | Type de retour       |
| --------------------- | ------------------- | -------------------- |
| format@@0 blocksLight | blocksLight()       | booléen              |
| mouvements de blocs   | blocksMovement()    | booléen              |
| Brûlure               | getCanBurn()        | booléen              |
| mobilityFlag          | getMobilityFlag()   | chaîne de caractères |
| liquide               | isLiquid()          | booléen              |
| opaque                | isOpaque()          | booléen              |
| remplaçable           | isReplaceable()     | booléen              |
| solid                 | isSolid()           | booléen              |
| toolNotRequired       | isToolNotRequired() | booléen              |
|                       | setReplaceable()    | Important            |

## Méthodes Zen avec les paramètres

### Vérifier si deux IMatériaux correspondent

Utilise un IMatérial.  
Renvoie un bool.

```zenscript
materialObj.matches(IMaterial autre) ;
```

## Obtention de matériaux Minecraft Vanilla

Vous pouvez utiliser ces méthodes pour obtenir le minecraft de vanille

```zenscript
crafttweaker.blocks.IMaterial.air();
crafttweaker.blocks.IMaterial.anvil();
crafttweaker.blocks.IMaterial.barrier();
crafttweaker.blocks.IMaterial.cactus();
crafttweaker.blocks.IMaterial.cake();
crafttweaker.blocks.IMaterial.carpet();
crafttweaker.blocks.IMaterial.circuits();
crafttweaker.blocks.IMaterial.clay();
crafttweaker.blocks.IMaterial.cloth();
crafttweaker. locks.IMaterial.coral();
crafttweaker.blocks.IMaterial.craftedSnow();
crafttweaker.blocks.IMaterial.dragonEgg();
crafttweaker.blocks.IMaterial.fire();
crafttweaker.blocks.IMaterial.glass();
crafttweaker.blocks.IMaterial.gourd();
crafttweaker.blocks.IMaterial.grass();
crafttweaker.blocks.IMaterial.ground();
crafttweaker.blocks.IMaterial.ice();
crafttweaker. locks.IMaterial.iron();
crafttweaker.blocks.IMaterial.lava();
crafttweaker.blocks.IMaterial.leaves();
crafttweaker.blocks.IMaterial.packedIce();
crafttweaker.blocks.IMaterial.piston();
crafttweaker.blocks.IMaterial.plants();
crafttweaker.blocks.IMaterial.portal();
crafttweaker.blocks.IMaterial.redstoneLight();
crafttweaker.blocks.IMaterial. ock();
crafttweaker.blocks.IMaterial.sand();
crafttweaker.blocks.IMaterial.snow();
crafttweaker.blocks.IMaterial.sponge();
crafttweaker.blocks.IMaterial.structureVoid();
crafttweaker.blocks.IMaterial.tnt();
crafttweaker.blocks.IMaterial.vine();
crafttweaker.blocks.IMaterial.water();
crafttweaker.blocks.IMaterial.web();
crafttweaker.blocks.IMaterial.wood();
```