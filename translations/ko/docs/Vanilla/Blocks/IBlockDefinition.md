# IBlockDefinition

IBlockDefinition 객체는 블럭의 추가정보를 제공합니다. 

## 패키지 임포트하기

예를 들어 [Array](/AdvancedFunctions/Arrays_and_Loops/)의 캐스팅하려면 관련된 패키지를 임포트해야만 합니다. 안전을 위해서도 말입니다.   
`import crafttweaker.block.IBlockDefinition;`

## IBlockDefinition 객체 호출

* [IBlock](/Vanilla/Blocks/IBlock/) 객체의 `definition` ZenGetter를 이용

## IBlockDefinition 객체 호출

* `Game.blocks`을 사용하여 게임의 모든 블럭 정의 목록을 획득

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | 기능                             | 타입                                                  |
| --------------- | ------------------- | ------------------------------ | --------------------------------------------------- |
|                 | canSpawnInBlock     | 만약 엔티티가 이 블럭에 스폰이 가능한지의 여부를 반환 | bool                                                |
| creativeTab     | creativeTab         |                                | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                | float                                               |
| id              |                     | 블럭 ID를 반환                      | string                                              |
| displayName     |                     | 블럭의 표시명을 반환                    | string                                              |
|                 | hardness            |                                | int                                                 |
| harvestLevel    |                     | 블럭의 하베스트 레벨을 반환                | int                                                 |
| harvestTool     |                     | 블럭의 하베스트 가능 툴을 반환              | string                                              |
|                 | lightOpacity        |                                | int                                                 |
|                 | lightLevel          |                                | int                                                 |
|                 | resistance          |                                | int                                                 |
| unlocalizedName |                     | 번역되지 않은 블럭의 이름을 반환             | string                                              |
| tickRandomly    | tickRandomly        |                                | bool                                                |

## ZenMethods

### 블럭을 부수지 못하게 설정

인수 없고, </0> 반환 없고, </0> hardness = -1과 동일한 결과입니다.

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