# AdvancementPredicate

Represents a predicate around an advancement.

 This predicate can be used to check the completion status of the advancement, either specifying specific criteria to check against, or the full advancement. It is not possible to check against both, since the two checks are effectively incompatible with each other.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.AdvancementPredicate;
```


## 已实现的接口
AdvancementPredicate implements the following interfaces. That means all methods defined in these interfaces are also available in AdvancementPredicate

- [IVanillaWrappingPredicate](/vanilla/api/predicate/IVanillaWrappingPredicate)

## 使用方式

:::group{name=withCompleted}

Specifies that the advancement must be completed to pass the check.

 If this predicate had already been set to check for an in-progress advancement status, this setting is overwritten. If the predicate had been set to check for a specific set of criteria, the predicate will be in an invalid state.

Returns: This predicate for chaining.  
Return Type: [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate)

```zenscript
// AdvancementPredicate.withCompleted() as AdvancementPredicate

myAdvancementPredicate.withCompleted();
```

:::

:::group{name=withInProgress}

Specifies that the advancement must not be completed, that is being in-progress, to pass the check.

 If this predicate had already been set to check for completion, this setting is overwritten. If the predicate had been set to check for a specific set of criteria, the predicate will be in an invalid state.

Returns: This predicate for chaining.  
Return Type: [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate)

```zenscript
// AdvancementPredicate.withInProgress() as AdvancementPredicate

myAdvancementPredicate.withInProgress();
```

:::

:::group{name=withInProgressCriterion}

Adds the criterion <code>name</code> to the list of criteria to check for in-progress status.

 If the predicate had already been set to check for this criterion's completion, the setting is overwritten. If the predicate had been set to check for a completion status, the predicate will be in an invalid state.

Returns: This predicate for chaining.  
Return Type: [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate)

```zenscript
AdvancementPredicate.withInProgressCriterion(name as string) as AdvancementPredicate
```

| 参数       | 类型     | 描述                                                         |
| -------- | ------ | ---------------------------------------------------------- |
| name（名称） | string | The name of the criterion to check for in-progress status. |


:::

:::group{name=withPassedCriterion}

Adds the criterion <code>name</code> to the list of criteria to check for completion.

 If the predicate had already been set to check for this criterion's in-progress status, the setting is overwritten. If the predicate had been set to check for a completion status, the predicate will be in an invalid state.

Returns: This predicate for chaining.  
Return Type: [AdvancementPredicate](/vanilla/api/predicate/AdvancementPredicate)

```zenscript
AdvancementPredicate.withPassedCriterion(name as string) as AdvancementPredicate
```

| 参数       | 类型     | 描述                                                 |
| -------- | ------ | -------------------------------------------------- |
| name（名称） | string | The name of the criterion to check for completion. |


:::


