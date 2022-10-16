# Expansion for Many&lt;KnownTag<Block>&gt;

This expansion specifically targets itemTags. It adds implicit casters to IIngredient and IData, so that you can use them wherever you can use IIngredient.

 Only downside is that if you want to use Ingredient Transformers, you will need to call `asIIngredient()` first.

## Утилиты

| Result Type                                           | Является неявным |
| ----------------------------------------------------- | ---------------- |
| [BlockIngredient](/vanilla/api/block/BlockIngredient) | true             |

## Методы

:::group{name=asIngredient}

Return Type: [BlockIngredient](/vanilla/api/block/BlockIngredient)

```zenscript
// Many.asIngredient() as BlockIngredient

myMany.asIngredient();
```

:::


