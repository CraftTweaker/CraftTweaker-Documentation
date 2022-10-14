# MobInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.MobInfo;
```


## Static Methods

:::group{name=create}

Creates a new MobInfo with default values. <br />  See other methods for adding more customization. <br />  <br />  Same as constructor.

Returns: new MobInfo  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.create() as MobInfo

MobInfo.create();
```

:::

## Constructors

No Description Provided
```zenscript
new MobInfo() as MobInfo
new MobInfo();
```

## Methods

:::group{name=mergeData}

Sets the data to be merged with default rather than overwriting the default. Does NOT need to be called after setData.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.mergeData() as MobInfo

myMobInfo.mergeData();
```

:::

:::group{name=setCount}

Sets the quantity of the mob to be spawned.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setCount(count as int) as MobInfo

myMobInfo.setCount(12);
```

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| count     | int  | quantity    |


:::

:::group{name=setData}

Sets the NBT data of the mobs to be spawned.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setData(data as IData) as MobInfo

myMobInfo.setData({
 "Health":200,
 "Attributes":[
 {"Name":"generic.maxHealth", "Base":200},
 {"Name":"generic.movementSpeed", "Base":0.3},
 {"Name":"generic.attackDamage", "Base":6}
 ],
 "CustomName":"A Lost Soul",
 "PersistenceRequired":1,
 "CustomNameVisible":1
 });
```

| Parameter | Type                             | Description |
| --------- | -------------------------------- | ----------- |
| data      | [IData](/vanilla/api/data/IData) | NBT         |


:::

:::group{name=setMob}

Sets the mob to be spawned.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setMob(mob as EntityType) as MobInfo

myMobInfo.setMob("minecraft:zombie_villager");
```

| Parameter | Type                                         | Description       |
| --------- | -------------------------------------------- | ----------------- |
| mob       | [EntityType](/vanilla/api/entity/EntityType) | resource location |


:::

:::group{name=setOffset}

Sets the offset from the altar where the mobs will be spawned.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setOffset(x as float, y as float, z as float) as MobInfo

myMobInfo.setOffset(1, 3, 1);
```

| Parameter | Type  | Description |
| --------- | ----- | ----------- |
| x         | float | x           |
| y         | float | y           |
| z         | float | z           |


:::

:::group{name=setSpread}

Sets the random spread for spawning the mob. Values shouldn't be negative.

Returns: self  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setSpread(x as float, y as float, z as float) as MobInfo

myMobInfo.setSpread(3, 3, 3);
```

| Parameter | Type  | Description |
| --------- | ----- | ----------- |
| x         | float | x spread    |
| y         | float | y spread    |
| z         | float | z spread    |


:::


