# LocationCheck

Builder for a 'LocationCheck' loot condition.

 This condition checks the location at which a specific loot table has been rolled, barring a user-specified offset, as obtained via the [LootContext](/vanilla/api/loot/LootContext). The check is performed according to the specified [LocationPredicate](/vanilla/api/predicate/LocationPredicate).

 The condition passes when the origin location of the loot table passes the checks of the predicate, after having been offset by the amount specified by the user, if present.

 If no predicate is specified, the condition simply acts as a check on whether an origin location is available or not.

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.LocationCheck;
```


## 已实现的接口
LocationCheck implements the following interfaces. That means all methods defined in these interfaces are also available in LocationCheck

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## 方法

### withLocationPredicate

Creates and sets the [LocationPredicate](/vanilla/api/predicate/LocationPredicate) that will be matched against the offset location.

 Any changes that have already been made to the predicate will be overwritten, effectively replacing the previous predicate, if any.

 This parameter is <strong>optional</strong>.

Return Type: [LocationCheck](/vanilla/api/loot/conditions/vanilla/LocationCheck)

```zenscript
LocationCheck.withLocationPredicate(builder as Consumer<LocationPredicate>) as LocationCheck
```

| 参数  | 类型                                                                                        | 描述                                                                                                           |
| --- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| 生成器 | Consumer&lt;[LocationPredicate](/vanilla/api/predicate/LocationPredicate)&gt; | A consumer that will be used to configure the [LocationPredicate](/vanilla/api/predicate/LocationPredicate). |


### withOffset

Sets the offset which should be used to offset the location prior to the predicate check.

 This parameter is <strong>optional</strong>.

Return Type: [LocationCheck](/vanilla/api/loot/conditions/vanilla/LocationCheck)

```zenscript
LocationCheck.withOffset(pos as BlockPos) as LocationCheck
```

| 参数 | 类型                                     | 描述                                 |
| -- | -------------------------------------- | ---------------------------------- |
| 点  | [BlockPos](/vanilla/api/util/BlockPos) | The offset that should be applied. |


### withXOffset

Sets the offset along the X axis that should be used to offset the location prior to the predicate check.

 If an offset has already been specified along any other axis, the offset along those axis is preserved. On the other hand, any previous offset that had already been set on this axis will be overwritten.

 This parameter is <strong>optional</strong>.

Return Type: [LocationCheck](/vanilla/api/loot/conditions/vanilla/LocationCheck)

```zenscript
LocationCheck.withXOffset(x as int) as LocationCheck
```

| 参数 | 类型  | 描述                                               |
| -- | --- | ------------------------------------------------ |
| x  | int | The offset that should be applied to the X axis. |


### withYOffset

Sets the offset along the Y axis that should be used to offset the location prior to the predicate check.

 If an offset has already been specified along any other axis, the offset along those axis is preserved. On the other hand, any previous offset that had already been set on this axis will be overwritten.

 This parameter is <strong>optional</strong>.

Return Type: [LocationCheck](/vanilla/api/loot/conditions/vanilla/LocationCheck)

```zenscript
LocationCheck.withYOffset(y as int) as LocationCheck
```

| 参数 | 类型  | 描述                                               |
| -- | --- | ------------------------------------------------ |
| y  | int | The offset that should be applied to the Y axis. |


### withZOffset

Sets the offset along the Z axis that should be used to offset the location prior to the predicate check.

 If an offset has already been specified along any other axis, the offset along those axis is preserved. On the other hand, any previous offset that had already been set on this axis will be overwritten.

 This parameter is <strong>optional</strong>.

Return Type: [LocationCheck](/vanilla/api/loot/conditions/vanilla/LocationCheck)

```zenscript
LocationCheck.withZOffset(z as int) as LocationCheck
```

| 参数 | 类型  | 描述                                               |
| -- | --- | ------------------------------------------------ |
| z  | int | The offset that should be applied to the Z axis. |



