# 材料

材料对象表示组成方块所使用的材料

## Importing the package
It might be required for you to import the package if you encounter any issues, so better be safe than sorry and add the import.  
`import crafttweaker.block.IMaterial;`

## ZenGetters/ZenMethods without parameters

| ZenGetter       | ZenMethod           | 返回值       |
|-----------------|---------------------|-------------|
| blocksLight     | blocksLight()       | 布尔值       |
| blocksMovement  | blocksMovement()    | 布尔值       |
| canBurn         | getCanBurn()        | 布尔值       |
| mobilityFlag    | getMobilityFlag()   | 字符串       |
| liquid          | isLiquid()          | 布尔值       |
| opaque          | isOpaque()          | 布尔值       |
| replaceable     | isReplaceable()     | 布尔值       |
| solid           | isSolid()           | 布尔值       |
| toolNotRequired | isToolNotRequired() | 布尔值       |
|                 | setReplaceable()    | 材料         |


## ZenMethods with parameters
### 检测两个材料对象是否相同
传入材料对象。  
返回布尔值。
```
materialObj.matches(IMaterial other);
```

## 获取Minecraft原版材料
你可以使用以下方法获取Minecraft原版材料

```
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
