# MaterialPartLocalizedNameDostawca

Możesz utworzyć MaterialPartLocalizedNameSupplier w postaci obiektu [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , który będzie używany na każde żądanie.

## Importowanie klasy

Jeśli chcesz zaimportować swoją klasę, tutaj:

```zenscript
import mods.contenttweaker.MaterialPartLocalizedNameSupplier,
```

## Metody statyczne

Metody statyczne można stosować na opakowaniu, a nie w przypadkach klasy.

```zenscript
//mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(IMaterialPart MaterialPart);
mods.contenttweaker.MaterialPartLocalizedNameSupplier.create(myMaterialPart);
```