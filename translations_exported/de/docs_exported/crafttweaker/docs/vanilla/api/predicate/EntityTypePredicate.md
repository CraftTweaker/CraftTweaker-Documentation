# EntityTypePredicate

Represents the predicate for an [MCEntity](/vanilla/api/entity/MCEntity)'s type.

 This predicate will check an entity's type against either a tag ([MCTag](/vanilla/api/tags/MCTag)&lt;T&gt;) or a [MCEntityType](/vanilla/api/entities/MCEntityType) directly. The first check will override the second if they are both present.

 By default, any entity type is valid for this predicate.

## Diese Klasse importieren

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EntityTypePredicate;
```


## Extending AnyDefaultingVanillaWrappingPredicate

EntityTypePredicate extends [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate). That means all methods available in [AnyDefaultingVanillaWrappingPredicate](/vanilla/api/predicate/AnyDefaultingVanillaWrappingPredicate) are also available in EntityTypePredicate

## Methoden

:::group{name=withTag}

Sets the [MCTag](/vanilla/api/tags/MCTag)&lt;T&gt; that this predicate should use for matching the entity's type.

 The predicate will match successfully only if the given entity type is part of the given tag.

 Specifying both a tag and an entity type to check against will make the tag override the direct type comparison.

Returns: This predicate for chaining.  
Return Type: [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)

```zenscript
EntityTypePredicate.withTag(tag as MCTag<MCEntityType>) as EntityTypePredicate
```

| Parameter | Type                                                                                                   | Beschreibung                                   |
| --------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------- |
| tag       | [MCTag](/vanilla/api/tags/MCTag)&lt;[MCEntityType](/vanilla/api/entities/MCEntityType)&gt; | The tag the predicate should use for matching. |


:::

:::group{name=withType}

Sets the [MCEntityType](/vanilla/api/entities/MCEntityType) that this predicate should match exactly.

 If a tag to match against has already been set, then the tag check will override this check.

Returns: This predicate for chaining.  
Return Type: [EntityTypePredicate](/vanilla/api/predicate/EntityTypePredicate)

```zenscript
EntityTypePredicate.withType(type as MCEntityType) as EntityTypePredicate
```

| Parameter | Type                                               | Beschreibung                                 |
| --------- | -------------------------------------------------- | -------------------------------------------- |
| type      | [MCEntityType](/vanilla/api/entities/MCEntityType) | The entity type this predicate should match. |


:::


