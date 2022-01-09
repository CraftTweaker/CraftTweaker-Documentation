# FishingPredicate

Represents a predicate for a fishing hook, as a specialization of [EntityPredicate](/vanilla/api/predicate/EntityPredicate).

 This predicate can be used to check various properties of the fishing hook entity, such as being used for fishing in open waters instead of a closed pond.

 By default, the entity passes the checks without caring about the entity type. If at least one of the properties is set, then the entity must be a fishing hook to pass the checks.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.FishingPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

FishingPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in FishingPredicate

## 使用方式

:::group{name=withClosedWaters}

Indicates that the fishing hook has been used in not open waters, such as a pond.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [FishingPredicate](/vanilla/api/predicate/FishingPredicate)

```zenscript
// FishingPredicate.withClosedWaters() as FishingPredicate

myFishingPredicate.withClosedWaters();
```

:::

:::group{name=withOpenWaters}

Indicates that the fishing hook has been used in open waters.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [FishingPredicate](/vanilla/api/predicate/FishingPredicate)

```zenscript
// FishingPredicate.withOpenWaters() as FishingPredicate

myFishingPredicate.withOpenWaters();
```

:::


