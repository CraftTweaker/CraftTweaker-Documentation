# MobInfo

This class was added by a mod with mod-id `zensummoning`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса

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


## Методы

:::group{name=mergeData}

Sets the data to be merged with default rather than overwriting the default. Does NOT need to be called after setData.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.mergeData() as MobInfo

myMobInfo.mergeData();
```

:::

:::group{name=setCount}

Sets the quantity of the mob to be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setCount(count as int) as MobInfo

myMobInfo.setCount(12);
```

| Параметр | Тип | Описание |
| -------- | --- | -------- |
| count    | int | quantity |


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

| Параметр | Тип                              | Описание |
| -------- | -------------------------------- | -------- |
| data     | [IData](/vanilla/api/data/IData) | NBT      |


:::

:::group{name=setMob}

Sets the mob to be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setMob(mob as MCEntityType) as MobInfo

myMobInfo.setMob("minecraft:zombie_villager");
```

| Параметр | Тип                                                | Описание          |
| -------- | -------------------------------------------------- | ----------------- |
| mob      | [MCEntityType](/vanilla/api/entities/MCEntityType) | resource location |


:::

:::group{name=setOffset}

Sets the offset from the altar where the mobs will be spawned.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setOffset(x as float, y as float, z as float) as MobInfo

myMobInfo.setOffset(1, 3, 1);
```

| Параметр | Тип   | Описание |
| -------- | ----- | -------- |
| x        | float | x        |
| y        | float | y        |
| z        | float | z        |


:::

:::group{name=setSpread}

Sets the random spread for spawning the mob. Values shouldn't be negative.

Return Type: [MobInfo](/mods/zensummoning/MobInfo)

```zenscript
// MobInfo.setSpread(x as float, y as float, z as float) as MobInfo

myMobInfo.setSpread(3, 3, 3);
```

| Параметр | Тип   | Описание |
| -------- | ----- | -------- |
| x        | float | x spread |
| y        | float | y spread |
| z        | float | z spread |


:::


