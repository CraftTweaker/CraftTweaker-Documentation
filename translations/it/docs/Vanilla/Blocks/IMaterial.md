# IMateriale

Un oggetto IMateriale rappresenta il materiale di cui è costituito un blocco.

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si verificano problemi, in modo da essere più sicuri di spiacenti e aggiungere l'importazione.  
`import crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods senza parametri

| ZenGetter       | ZenMethod           | Tipo Di Reso |
| --------------- | ------------------- | ------------ |
| blocksLight     | blocksLight()       | bool         |
| blocksMovement  | blocksMovement()    | bool         |
| canBurn         | getCanBurn()        | bool         |
| mobilityFlag    | getMobilityFlag()   | stringa      |
| liquido         | isLiquid()          | bool         |
| opaco           | isOpaque()          | bool         |
| sostituibile    | isReplaceable()     | bool         |
| solid           | isSolid()           | bool         |
| toolNotRequired | isToolNotRequired() | bool         |
|                 | setReplaceable()    | IMateriale   |

## ZenMethods con parametri

### Controlla se due IMateriali corrispondono

Usa un IMateriale.  
Restituisce un bool.

```zenscript
materialObj.matches(IMaterial other);
```

## Ottenere Materiali Minecraft Vaniglia

È possibile utilizzare questi metodi per ottenere i materiali minecraft vaniglia

```zenscript
crafttweaker.blocks.IMaterial.air();
crafttweaker.blocks.IMaterial.anvil();
crafttweaker.blocks.IMaterial.barrier();
crafttweaker.blocks.blocks.IMaterial.cactus();
crafttweaker.blocks.blocks.IMaterial.cake();
crafttweaker.blocks.IMaterial.carpet();
crafttweaker.blocks.IMaterial.circuits();
crafttweaker.blocks.IMaterial.clay();
crafttweaker.blocks.IMaterial.cloth();
crafttweaker. locks.IMaterial.coral();
crafttweaker.blocks.IMaterial.craftedSnow();
crafttweaker.blocks.IMaterial.dragonEgg();
crafttweaker.blocks.IMaterial.fire();
crafttweaker.blocks.blocks.IMaterial.glass();
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