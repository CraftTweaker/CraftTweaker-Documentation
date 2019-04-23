# IMaterial

IMaterial 对象代表制作方块的材料。

## 导入相关包

如果你遇到问题 ，你可能需要导入相关包，为此，最安全的方法就是进行导入。  
`import crafttweaker.block.IBlockPattern;`

## 不带参数的 ZenGetters/ZenMethods

| ZenGetter       | ZenMethod           | 返回值类型     |
| --------------- | ------------------- | --------- |
| blocksLight     | blocksLight()       | bool      |
| blocksMovement  | blocksMovement()    | bool      |
| canBurn         | getCanBurn()        | bool      |
| mobilityFlag    | getMobilityFlag()   | string    |
| liquid          | isLiquid()          | bool      |
| opaque          | isOpaque()          | bool      |
| replaceable     | isReplaceable()     | bool      |
| solid           | isSolid()           | bool      |
| toolNotRequired | isToolNotRequired() | bool      |
|                 | setReplaceable()    | IMaterial |

## 带参数的 ZenMethods

### 检查两个 IMaterials 是否匹配

接受一个 IMaterial。  
返回一个 bool。

    materialObj.matches(IMaterial other);
    

## 获取原版 Minecraft 的材料

你可以使用这些方法来获取原版 Minecraft 的材料

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