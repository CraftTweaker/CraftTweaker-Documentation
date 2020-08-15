# Sieving

## Pakiet

Aby uzyskać dostęp do `Sieve` bez wyjaśnienia pełnej ścieżki, możesz zaimportować pakiet u góry swojego skryptu z następującymi danymi:

```zenscript
importuj mods.exnihilocreatio.Sieve;
```

## Metody

- **[Blok Igredient](/Vanilla/Variable_Types/IIngredient/)** Blok, który upuszcza wyjście.
- **[IItemStack](/Vanilla/Items/IItemStack/) wyjście** element, który usuwa się z bloku..
- **Szansa na pływanie** Szansa powinna wynosić od 0 do 1.

## Siatka String

```zenscript
Sieve.addStringMeshRecipe(IIngredient, IItemStack, Szansa Pływania);
Sieve.addStringMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.001);
```

## Siatka Krzemienia

```zenscript
Sieve.addFlintMeshRecipe(IIngredient, IItemStack, Szansa Pływania);
Sieve.addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Żelazna siatka

```zenscript
Sieve.addIronMeshRecipe(IIngredient, IItemStack, Szansa Pływania);
Sieve.addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Siatka diamentowa

```zenscript
Sieve.addDiamondMeshRecipe(Ingredient, IItemStack, Szansa Pływania);
Sieve.addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1;
```

## Usuwanie

```zenscript
Sieve.removeAll();
```
