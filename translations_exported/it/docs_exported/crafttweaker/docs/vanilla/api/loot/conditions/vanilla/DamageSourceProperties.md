# DamageSourceProperties

Builder to create a 'DamageSourceProperties' loot condition.

 This condition checks the [DamageSource](/vanilla/api/util/DamageSource) obtained from the [LootContext](/vanilla/api/loot/LootContext), along with additional relevant data, such as origin and world, according to the given [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate).

 The condition then passes if and only if the predicate used when building it marks the damage source as valid.

 If no predicate is specified, the condition simply acts as a check for the presence of a [DamageSource](/vanilla/api/util/DamageSource).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.DamageSourceProperties;
```


## Interfacce Implementate
DamageSourceProperties implements the following interfaces. That means all methods defined in these interfaces are also available in DamageSourceProperties

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Methods

### withPredicate

Creates and sets the [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate) that will be matched against the damage source.

 Any changes that have already been made to the predicate will be overwritten, effectively replacing the previous predicate, if any.

 This parameter is <strong>optional</strong>.

Return Type: [DamageSourceProperties](/vanilla/api/loot/conditions/vanilla/DamageSourceProperties)

```zenscript
DamageSourceProperties.withPredicate(builder as Consumer<DamageSourcePredicate>) as DamageSourceProperties
```

| Parameter   | Type                                                                                              | Description                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| costruttore | Consumer&lt;[DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate)&gt; | A consumer that will be used to configure the [DamageSourcePredicate](/vanilla/api/predicate/DamageSourcePredicate). |



