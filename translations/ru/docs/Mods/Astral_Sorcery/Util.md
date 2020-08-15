# Util

Пакет utils позволяет получить данный [IIngredient](/Vanilla/Variable_Types/IIngredient/) из предоставленных параметров.

## Импорт пакета

Если вы когда-нибудь обнаружили, что вам нужен для этого импорт, вот ваш шанс:

```zenscript
import mods.astralsorcery.Utils;
```

## Получить кристальный ингредиент

Это возвращает вам ингредиент, соответствующий всем кристаллам AS.

```zenscript
//Utils.getystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```