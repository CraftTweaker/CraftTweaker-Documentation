# IMaterial

An IMaterial object represents the material a block is made of.

## Importing the package

It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods without parameters

| ZenGetter       | ZenMethod           | Return Type |
| --------------- | ------------------- | ----------- |
| blocksLight     | blocksLight()       | bool        |
| blocksMovement  | blocksMovement()    | bool        |
| canBurn         | getCanBurn()        | bool        |
| mobilityFlag    | getMobilityFlag()   | string      |
| liquid          | isLiquid()          | bool        |
| opaque          | isOpaque()          | bool        |
| replaceable     | isReplaceable()     | bool        |
| solid           | isSolid()           | bool        |
| toolNotRequired | isToolNotRequired() | bool        |
|                 | setReplaceable()    | IMaterial   |

## ZenMethods with parameters

### Check if two IMaterials match

Uses an IMaterial.  
Returns a bool.

    materialObj.matches(IMaterial other);
    

## Getting Vanilla Minecraft Materials

You can use these methods to get the vanilla minecraft materials

    crafttweaker.blocks.IMaterial.air();
    crafttweaker.blocks.IMaterial.anvil();
    crafttweaker.blocks.IMaterial.barrier();
    crafttweaker.blocks.IMaterial.cactus();
    crafttweaker.blocks.IMaterial.cake();
    crafttweaker.blocks.IMaterial.carpet();
    crafttweaker.blocks.IMaterial.circuits();
    crafttweaker.blocks.IMaterial.clay();
    crafttweaker.blocks.IMaterial.cloth();
    crafttweaker.blocks.IMaterial.coral();
    crafttweaker.blocks.IMaterial.craftedSnow();
    crafttweaker.blocks.IMaterial.dragonEgg();
    crafttweaker.blocks.IMaterial.fire();
    crafttweaker.blocks.IMaterial.glass();
    crafttweaker.blocks.IMaterial.gourd();
    crafttweaker.blocks.IMaterial.grass();
    crafttweaker.blocks.IMaterial.ground();
    crafttweaker.blocks.IMaterial.ice();
    crafttweaker.blocks.IMaterial.iron();
    crafttweaker.blocks.IMaterial.lava();
    crafttweaker.blocks.IMaterial.leaves();
    crafttweaker.blocks.IMaterial.packedIce();
    crafttweaker.blocks.IMaterial.piston();
    crafttweaker.blocks.IMaterial.plants();
    crafttweaker.blocks.IMaterial.portal();
    crafttweaker.blocks.IMaterial.redstoneLight();
    crafttweaker.blocks.IMaterial.rock();
    crafttweaker.blocks.IMaterial.sand();
    crafttweaker.blocks.IMaterial.snow();
    crafttweaker.blocks.IMaterial.sponge();
    crafttweaker.blocks.IMaterial.structureVoid();
    crafttweaker.blocks.IMaterial.tnt();
    crafttweaker.blocks.IMaterial.vine();
    crafttweaker.blocks.IMaterial.water();
    crafttweaker.blocks.IMaterial.web();
    crafttweaker.blocks.IMaterial.wood();