# IBlockDefinition

IBlockDefinition 객체는 블럭의 추가정보를 제공합니다. 

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)의 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlockDefinition;`

## IBlockDefinition 객체 호출

* Using the `definition` ZenGetter on an [IBlock](/Vanilla/Blocks/IBlock/) object.

## Calling an IBlockDefinition List

* Using `game.blocks` to get a list of all block definition in the game.

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | What does it do                              | Type                                                |
| --------------- | ------------------- | -------------------------------------------- | --------------------------------------------------- |
|                 | canSpawnInBlock     | Returns if an entity can spawn in this block | bool                                                |
| creativeTab     | creativeTab         |                                              | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                              | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                              | float                                               |
| id              |                     | Returns the block ID                         | string                                              |
| displayName     |                     | Returns the block's DisplayName              | string                                              |
|                 | hardness            |                                              | int                                                 |
| harvestLevel    |                     | Returns the block's harvest level            | int                                                 |
| harvestTool     |                     | Returns the block's harvest tool             | string                                              |
|                 | lightOpacity        |                                              | int                                                 |
|                 | lightLevel          |                                              | int                                                 |
|                 | resistance          |                                              | int                                                 |
| unlocalizedName |                     | Returns the block's unlocalized Name         | string                                              |
| tickRandomly    | tickRandomly        |                                              | bool                                                |

## ZenMethods

### Set Block unbreakable

Uses no paramaeters.  
Returns nothing.  
Does the same as `hardness = -1;`

    defObj.setUnbreakable();
    

### Get tickrate in a specific world

Uses an [IWorld](/Vanilla/World/IWorld/) object.  
Returns an int.

    defObj.getTickRate(IWorld world);
    

### Check if the block can be placed on another block

Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.

    defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
    defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
    

### Get the block's slipperiness

Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.

    defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
    

### Set the block's harvest level

Uses a string and an int.  
Returns void (nothing).

    defObj.setHarvestLevel(string toolclass, int level);