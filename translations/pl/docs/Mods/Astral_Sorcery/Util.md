# Util

Pakiet utils pozwala na pobranie podanego [IIngredient](/Vanilla/Variable_Types/IIngredient/) z dostarczonych parametrów.

## Importowanie pakietu

Jeśli kiedykolwiek potrzebujesz do tego importu, oto twoja szansa:

```zenscript
import mods.astralsorcery.Utils;
```

## Zdobądź Kryształowy Składnik

Spowoduje to zwrot składnika pasującego do wszystkich pasujących kryształów AS.

```zenscript
//Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);

walowy myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```