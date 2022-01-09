# IBlockDefinition

IBlockDefinition 객체는 블럭의 추가정보를 제공합니다.

## 패키지 임포트하기
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.block.IBlockDefinition;`

## IBlockDefinition 객체 호출

* [IBlock](/Vanilla/Blocks/IBlock/) 객체의 `definition` ZenGetter를 이용

## IBlockDefinition 객체 호출

* `Game.blocks`을 사용하여 게임의 모든 블럭 정의 목록을 획득

## ZenGetters/ZenSetters

| ZenGetter       | ZenSetter           | 역할                                                | Type                                                |
| --------------- | ------------------- | ------------------------------------------------- | --------------------------------------------------- |
| canSpawnInBlock |                     | Returns true if an entity can spawn in this block | bool                                                |
| creativeTab     | creativeTab         |                                                   | [ICreativeTab](/Vanilla/CreativeTabs/ICreativeTab/) |
| defaultState    |                     |                                                   | [IBlockState](/Vanilla/Blocks/IBlockState/)         |
|                 | defaultSlipperiness |                                                   | float                                               |
| id              |                     | 블럭 ID를 반환                                         | string                                              |
| displayName     |                     | 블럭의 표시명을 반환                                       | string                                              |
| hardness        | hardness            |                                                   | int                                                 |
| harvestLevel    |                     | 블럭의 하베스트 레벨을 반환                                   | int                                                 |
| harvestTool     |                     | 블럭의 하베스트 가능 툴을 반환                                 | string                                              |
|                 | lightOpacity        |                                                   | int                                                 |
|                 | lightLevel          |                                                   | int                                                 |
|                 | resistance          |                                                   | int                                                 |
| unlocalizedName |                     | 번역되지 않은 블럭의 이름을 반환                                | string                                              |
| tickRandomly    | tickRandomly        |                                                   | bool                                                |


## ZenMethods
### 블럭을 부수지 못하게 설정
Uses no paramaeters.  
Returns nothing.  
Does the same as `hardness = -1;`
```zenscript
defObj.setUnbreakable();
```

### 특정 월드의 틱 속도 얻기
Uses an [IWorld](/Vanilla/World/IWorld/) object.  
Returns an int.
```zenscript
defObj.getTickRate(IWorld world);
```

### 블럭을 다른 블럭위에 위치할 수 있는지를  체크
Uses an [IWorld](/Vanilla/World/IWorld/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) object and, depending on the method used, also an [IFacing](/Vanilla/World/IFacing/) object.  
Returns a bool.
```zenscript
defObj.canPlaceBlockOnSide(IWorld world, IBlockPos pos, IFacing facing);
defObj.canPlaceBlockAt(IWorld world, IBlockPos pos);
```


### 블럭의 미끄러움 정도를 얻기
Uses an [IBlockState](/Vanilla/Blocks/IBlockState/), an [IBlockAccess](/Vanilla/World/IBlockAccess/) object, an [IBlockPos](/Vanilla/World/IBlockPos/) and an optional [IEntity](/Vanilla/Entities/IEntity/) object.  
Returns a float.
```zenscript
defObj.getSlipperiness(IBlockState state, IBlockAccess access, IBlockPos pos, @Optional IEntity entity);
```

### 블럭의 하베스트 레벨을 설정
Uses a string, an int and an optional [IBlockState](/Vanilla/Blocks/IBlockState/).  
if the IBlockState argument is ignored, it will set harvest level to all block states in the block definition.  
Returns void (nothing).
```zenscript
defObj.setHarvestLevel(string toolclass, int level, @Optional IBlockState state);
```

### Get harvest level of block state
returns an int.
```zenscript
defObj.getHarvestLevel(IBlockState state);
```

### Get harvest tool of block state
returns a string.
```zenscript
defObj.getHarvestTool(IBlockState state);
```

### Get a block state by metadata
Uses an int.  
Returns an [IBlockState](/Vanilla/Blocks/IBlockState/).
```zenscript
defObj.getStateFromMeta(int meta);
```

### Block effective for the tool
Uses a string and an [IBlockState](/Vanilla/Blocks/IBlockState/).  
Returns a bool.
```zenscript
defObj.isToolEffective(String type, IBlockState state);
```
