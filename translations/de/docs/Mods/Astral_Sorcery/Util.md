# Util

Das utils-Paket erlaubt es Ihnen, ein gegebenes [IIngredient](/Vanilla/Variable_Types/IIngredient/) aus den angegebenen Parametern zu holen.

## Dieses Paket importieren

Wenn du jemals einen Import dafür benötigst, ist hier deine Chance:

```zenscript
importieren mods.astralsorcery.Utils;
```

## Hol dir einen Kristallgehalt

Dies gibt dir eine Zutat zurück, die allen passenden AS-Kristallen entspricht.

```zenscript
//Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```