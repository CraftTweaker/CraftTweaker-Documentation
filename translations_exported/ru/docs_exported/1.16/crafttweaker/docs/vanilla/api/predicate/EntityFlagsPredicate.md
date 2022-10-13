# EntityFlagsPredicate

Represents the predicate for an [MCEntity](/vanilla/api/entity/MCEntity)'s status flags.

 The status flags indicate whether the entity is currently burning, moving and at which speed, and whether it's a baby or an adult, for the entities that have a baby form.

 By default, the entity passes the check no matter what its status flags are.

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityFlagsPredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EntityFlagsPredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EntityFlagsPredicate

## Методы

:::group{name=withAdult}

Indicates that the entity must be in its adult form.

 If the predicate has already been set to check for the entity in its baby form, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withAdult() as EntityFlagsPredicate

myEntityFlagsPredicate.withAdult();
```

:::

:::group{name=withBaby}

Indicates that the entity must be in its baby form, if applicable.

 If the predicate has already been set to check for the entity in its adult form, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withBaby() as EntityFlagsPredicate

myEntityFlagsPredicate.withBaby();
```

:::

:::group{name=withBurningState}

Indicates that the entity must be on fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withBurningState() as EntityFlagsPredicate

myEntityFlagsPredicate.withBurningState();
```

:::

:::group{name=withSneakingState}

Indicates that the entity must be sneaking, if applicable to the current entity.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withSneakingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withSneakingState();
```

:::

:::group{name=withSprintingState}

Indicates that the entity must be sprinting, if applicable to the current entity.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withSprintingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withSprintingState();
```

:::

:::group{name=withSwimmingState}

Indicates that the entity must be swimming.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withSwimmingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withSwimmingState();
```

:::

:::group{name=withoutBurningState}

Indicates that the entity must not be on fire.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withoutBurningState() as EntityFlagsPredicate

myEntityFlagsPredicate.withoutBurningState();
```

:::

:::group{name=withoutSneakingState}

Indicates that the entity must not be sneaking.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withoutSneakingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withoutSneakingState();
```

:::

:::group{name=withoutSprintingState}

Indicates that the entity must not be sprinting.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withoutSprintingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withoutSprintingState();
```

:::

:::group{name=withoutSwimmingState}

Indicates that the entity must not be swimming.

 If the predicate had already been set to check the opposite condition, the setting will be overwritten.

Returns: This predicate for chaining.  
Return Type: [EntityFlagsPredicate](/vanilla/api/predicate/EntityFlagsPredicate)

```zenscript
// EntityFlagsPredicate.withoutSwimmingState() as EntityFlagsPredicate

myEntityFlagsPredicate.withoutSwimmingState();
```

:::


