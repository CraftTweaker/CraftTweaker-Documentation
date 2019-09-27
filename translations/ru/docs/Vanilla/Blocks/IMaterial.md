# IMaterial

Объект IMaterial представляет материал, из которого сделан блок.

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.block.IMaterial;`

## Геттеры/методы без параметров

| ZenGetter       | Метод               | Возвращаемый тип |
| --------------- | ------------------- | ---------------- |
| blocksLight     | blocksLight()       | bool             |
| blocksMovement  | blocksMovement()    | bool             |
| canBurn         | getCanBurn()        | bool             |
| mobilityFlag    | getMobilityFlag()   | string           |
| liquid          | isLiquid()          | bool             |
| opaque          | isOpaque()          | bool             |
| replaceable     | isReplaceable()     | bool             |
| solid           | isSolid()           | bool             |
| toolNotRequired | isToolNotRequired() | bool             |
|                 | setReplaceable()    | IMaterial        |

## ZenMethods with parameters

### Check if two IMaterials match

Uses an IMaterial.  
Returns a bool.

```zenscript
materialObj.matches(IMaterial other);
```

## Получение оригинальных материалов из Minecraft

You can use these methods to get the vanilla minecraft materials

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