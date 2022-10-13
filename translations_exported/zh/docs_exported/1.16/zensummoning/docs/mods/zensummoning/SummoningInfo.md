# SummoningInfo

This class was added by a mod with mod-id `zensummoning`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.zensummoning.SummoningInfo;
```


## Static Methods

:::group{name=create}
Creates a new SummoningInfo with default values. <br />  See other methods for adding more customization. <br />  <p> <br />  Same as constructor.

Returns: new info  
Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.create() as SummoningInfo

SummoningInfo.create();
```

:::

## Constructor #构造函数

No Description Provided
```zenscript
new SummoningInfo() as SummoningInfo
new SummoningInfo();
```


## 使用方式

:::group{name=addCondition}

Adds an additional condition for the summoning to work. This can be used to require a gamestage (or deny one I guess)

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.addCondition(condition as Predicate<SummoningAttempt>, failureMessage as string, jeiDescription as string) as SummoningInfo

mySummoningInfo.addCondition(Predicate for summoning to succeed, Chat message to show on failure, Line to show in JEI preview);
```

| 参数             | 类型                                                                                   | 描述                      |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------- |
| condition      | Predicate&lt;[SummoningAttempt](/mods/zensummoning/SummoningAttempt)&gt; | condition               |
| failureMessage | string                                                                               | chat message on failure |
| jeiDescription | string                                                                               | No Description Provided |


:::

:::group{name=addMob}

Adds a new mob to the summoning. Returns itself for builder pattern.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.addMob(info as MobInfo) as SummoningInfo

mySummoningInfo.addMob(MobInfo.create().setMob("minecraft:zombie"));
```

| 参数   | 类型                                    | 描述         |
| ---- | ------------------------------------- | ---------- |
| info | [MobInfo](/mods/zensummoning/MobInfo) | mob to add |


:::

:::group{name=setCatalyst}

Sets the catalyst that will be used to start the ritual.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setCatalyst(ingredient as IIngredientWithAmount) as SummoningInfo

mySummoningInfo.setCatalyst(<item:minecraft:stick> * 2);
```

| 参数         | 类型                                                                | 描述       |
| ---------- | ----------------------------------------------------------------- | -------- |
| ingredient | [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount) | catalyst |


:::

:::group{name=setConsumeCatalyst}

Determines whether or not the catalyst will be consumed.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setConsumeCatalyst(value as boolean) as SummoningInfo

mySummoningInfo.setConsumeCatalyst(false);
```

| 参数    | 类型  | 描述       |
| ----- | --- | -------- |
| value | 布尔值 | consumed |


:::

:::group{name=setMutator}

Custom callback to determine if a summon should be allowed.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setMutator(mutator as Consumer<SummoningAttempt>) as SummoningInfo

mySummoningInfo.setMutator((attempt as SummoningAttempt) => {
 if (attempt.world.raining) {
 attempt.success = false;
 attempt.message = "Can't summon this in the rain!";
 } else {
 attempt.message = "Good Luck!";
 }
 });
```

| 参数      | 类型                                                                                  | 描述       |
| ------- | ----------------------------------------------------------------------------------- | -------- |
| mutator | Consumer&lt;[SummoningAttempt](/mods/zensummoning/SummoningAttempt)&gt; | callback |


:::

:::group{name=setReagents}

Sets the ingredients to be required to start the summon.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setReagents(reagents as IIngredientWithAmount[]) as SummoningInfo

mySummoningInfo.setReagents([<item:minecraft:stone>, <item:minecraft:egg>*12]);
```

| 参数       | 类型                                                                  | 描述              |
| -------- | ------------------------------------------------------------------- | --------------- |
| reagents | [IIngredientWithAmount](/vanilla/api/items/IIngredientWithAmount)[] | ingredient list |


:::

:::group{name=setSound}

Sets the sound played when a summon completes.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setSound(sound as string) as SummoningInfo

mySummoningInfo.setSound("entity.evoker.prepare_wololo");
```

| 参数    | 类型     | 描述                      |
| ----- | ------ | ----------------------- |
| sound | string | sound resource location |


:::

:::group{name=setWeight}

Sets the weight that this summoning has. Summonings with the same catalyst and reagents are determined randomly using this.

Return Type: [SummoningInfo](/mods/zensummoning/SummoningInfo)

```zenscript
// SummoningInfo.setWeight(weight as double) as SummoningInfo

mySummoningInfo.setWeight(3);
```

| 参数     | 类型     | 描述 |
| ------ | ------ | -- |
| weight | double |    |


:::


