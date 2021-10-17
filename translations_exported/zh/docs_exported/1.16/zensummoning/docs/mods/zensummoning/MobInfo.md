# MobInfo

This class was added by a mod with mod-id `zensummoning`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.MobInfo;
```


## Static Methods

:::group{name=create}

Creates a new MobInfo with default values. <br />  See other methods for adding more customization.

Returns: new MobInfo  
Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.create() as MobInfo

MobInfo.create();
```

:::

## 使用方式

:::group{name=setCount}

Sets the quantity of the mob to be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setCount(count as int) as MobInfo

myMobInfo.setCount(12);
```

| 参数    | 类型  | 描述       |
| ----- | --- | -------- |
| count | int | quantity |


:::

:::group{name=setData}

Sets the NBT data of the mobs to be spawned.

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

| 参数   | 类型                                   | 描述  |
| ---- | ------------------------------------ | --- |
| data | [IData #数据](/vanilla/api/data/IData) | NBT |


:::

:::group{name=setMob}

Sets the mob to be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setMob(mob as string) as MobInfo

myMobInfo.setMob("minecraft:zombie_villager");
```

| 参数  | 类型     | 描述                |
| --- | ------ | ----------------- |
| mob | string | resource location |


:::

:::group{name=setOffset}

Sets the offset from the altar where the mobs will be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setOffset(x as int, y as int, z as int) as MobInfo

myMobInfo.setOffset(1, 3, 1);
```

| 参数 | 类型  | 描述 |
| -- | --- | -- |
| x  | int | x  |
| y  | int | y  |
| z  | int | z  |


:::

:::group{name=setSpread}

Sets the random spread for spawning the mob. Values shouldn't be negative.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setSpread(x as int, y as int, z as int) as MobInfo

myMobInfo.setSpread(3, 3, 3);
```

| 参数 | 类型  | 描述       |
| -- | --- | -------- |
| x  | int | x spread |
| y  | int | y spread |
| z  | int | z spread |


:::


