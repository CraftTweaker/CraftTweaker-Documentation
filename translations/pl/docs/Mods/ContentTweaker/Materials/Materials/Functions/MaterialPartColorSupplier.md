# Dostawca MaterialPartColorColor

Możesz utworzyć obiekt MaterialPartColorColplier z [MaterialPart](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) , który będzie używany na każde żądanie.

## Importowanie klasy

Jeśli chcesz zaimportować swoją klasę, tutaj:

```zenscript
import mods.contenttweaker.MaterialPartColorSupplier;
```

## Metody statyczne

Metody statyczne można stosować na opakowaniu, a nie w przypadkach klasy.

```zenscript
//mods.contenttweaker.MaterialPartColorSupplier.create(IMaterialPart MaterialPart);
mods.contenttweaker.MaterialPartColorSupplier.create(myMaterialPart);
```