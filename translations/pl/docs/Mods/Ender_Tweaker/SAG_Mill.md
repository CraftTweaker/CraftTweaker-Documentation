# SAG Mill

## Pakiet

`import mods.enderio.SagMill;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/)[] wyjście** wyniki receptury.
- **float[] szans** Szansa na pojawienie się tego przedmiotu. Musi mieć taką samą długość jak na wyjściu.
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście** Wejście
- **String bonusType** To wpływa na działanie kulek. Może być NONE (bez premii), MULTIPLY_OUTPUT (może zwiększyć szansę > 1.0) i CHANCE_ONLY (limit szansy na 1.0).
- **int energyCost** Ile FE używa przepisu. Domyślnie 5000.
- **float xp** xp jest przyznany z tego przepisu. Nie może być negatywny.

## Dodanie

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] wyjścia, float[] szans, IIngredient input, @Optional String bonusType, @Optional int energyCost, @Optional float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## Usuwanie

```zenscript
mods.enderio.SagMill.removeRecipe(IItemStack);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```