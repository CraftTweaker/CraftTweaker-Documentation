# IMaterial

Ein IMaterial-Objekt repräsentiert das Material, aus dem ein Block besteht.

## Dieses Paket importieren

Es kann erforderlich sein, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben. Seien Sie also besser sicher als entschuldigen und fügen Sie den Import hinzu.  
`import craftweaker.block.IMaterial;`

## ZenGetters/ZenMethoden ohne Parameter

| ZenGetter           | ZenMethode          | Rückgabetyp |
| ------------------- | ------------------- | ----------- |
| blockhell           | blocksLight()       | bool        |
| blocksbewegung      | blocksMovement()    | bool        |
| gebrannt            | getCanBurn()        | bool        |
| mobilityFlag        | getMobilityFlag()   | string      |
| flüssig             | isLiquid()          | bool        |
| undurchsichtig      | isOpaque()          | bool        |
| austauschbar        | isReplaceable()     | bool        |
| solid               | isSolid()           | bool        |
| toolNoterforderlich | isToolNotRequired() | bool        |
|                     | setReplaceable()    | IMaterial   |

## ZenMethoden mit Parametern

### Überprüfen Sie, ob zwei IMaterials übereinstimmen

Verwendet ein IMaterial.  
Gibt ein Bool.

```zenscript
materialObj.matches(IMaterial ander);
```

## Vanilla Minecraft Materialien erhalten

Du kannst diese Methoden verwenden, um die Vanilla Minecraft Materialien zu erhalten

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
```