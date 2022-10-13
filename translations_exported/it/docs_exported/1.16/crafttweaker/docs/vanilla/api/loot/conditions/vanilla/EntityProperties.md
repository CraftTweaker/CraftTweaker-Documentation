# EntityProperties

Builder to create an 'EntityProperties' loot condition.

 This condition checks the [LootContext](/vanilla/api/loot/LootContext) for an [MCEntity](/vanilla/api/entity/MCEntity) that matches the targeted one, specified via [TargetedEntity](/vanilla/api/predicate/TargetedEntity), along with some additional properties like world and origin. The entity, if present, is matched against an [EntityPredicate](/vanilla/api/predicate/EntityPredicate) which will be used to determine entity-specific properties.

 The condition passes if and only if there exists a valid entity to target and the predicate matches.

 A valid 'EntityProperties' loot condition has to specify a targeted entity. The predicate, on the other hand, is optional: a lack of predicate means that the condition will simply check for the presence of the targeted entity.

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.conditions.vanilla.EntityProperties;
```


## Interfacce Implementate
EntityProperties implements the following interfaces. That means all methods defined in these interfaces are also available in EntityProperties

- [ILootConditionTypeBuilder](/vanilla/api/loot/conditions/ILootConditionTypeBuilder)

## Metodi

:::group{name=withPredicate}

Creates and sets the [EntityPredicate](/vanilla/api/predicate/EntityPredicate) that will be matched against the targeted entity.

 Any changes that have already been made to the predicate will be overwritten, effectively replacing the previous predicate, if any.

 This parameter is <strong>optional</strong>.

Returns: This builder for chaining.  
Return Type: [EntityProperties](/vanilla/api/loot/conditions/vanilla/EntityProperties)

```zenscript
EntityProperties.withPredicate(builder as Consumer<EntityPredicate>) as EntityProperties
```

| Parametro   | Tipo                                                                                  | Descrizione                                                                                              |
| ----------- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| costruttore | Consumer&lt;[EntityPredicate](/vanilla/api/predicate/EntityPredicate)&gt; | A consumer that will be used to configure the [EntityPredicate](/vanilla/api/predicate/EntityPredicate). |


:::

:::group{name=withTargetedEntity}

Sets the entity that should be targeted by the loot condition.

 Refer to [TargetedEntity](/vanilla/api/predicate/TargetedEntity) for a full list and their respective meaning.

 This parameter is <strong>required</strong>.

Returns: This builder for chaining.  
Return Type: [EntityProperties](/vanilla/api/loot/conditions/vanilla/EntityProperties)

```zenscript
EntityProperties.withTargetedEntity(entity as TargetedEntity) as EntityProperties
```

| Parametro | Tipo                                                    | Descrizione                         |
| --------- | ------------------------------------------------------- | ----------------------------------- |
| entity    | [TargetedEntity](/vanilla/api/predicate/TargetedEntity) | The entity that should be targeted. |


:::


