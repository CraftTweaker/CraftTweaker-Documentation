# Expansion for KnownTag&lt;EntityType<Entity>&gt;

## Casters

|                                                                                   Result Type                                                                                    | Is Implicit |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|
| [EntityIngredient](/vanilla/api/entity/EntityIngredient)                                                                                                                         | true        |
| [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt;&gt; | true        |

## Methods

:::group{name=asEntityIngredient}

Return Type: [EntityIngredient](/vanilla/api/entity/EntityIngredient)

```zenscript
// KnownTag.asEntityIngredient() as EntityIngredient

myKnownTag.asEntityIngredient();
```

:::

:::group{name=asList}

Return Type: [EntityIngredient](/vanilla/api/entity/EntityIngredient)

```zenscript
KnownTag.asList(other as EntityIngredient) as EntityIngredient
```

| Parameter |                           Type                           |
|-----------|----------------------------------------------------------|
| other     | [EntityIngredient](/vanilla/api/entity/EntityIngredient) |


:::

:::group{name=asManyTag}

Return Type: [Many](/vanilla/api/util/Many)&lt;[KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[EntityType](/vanilla/api/entity/EntityType)&lt;[Entity](/vanilla/api/entity/Entity)&gt;&gt;&gt;

```zenscript
// KnownTag.asManyTag() as Many<KnownTag<EntityType<Entity>>>

myKnownTag.asManyTag();
```

:::


