# Util

Il pacchetto utils consente di recuperare un dato [IIngredient](/Vanilla/Variable_Types/IIngredient/) dai parametri forniti.

## Importazione del pacchetto

Se ti trovi mai bisogno di un'importazione per questo, ecco la tua possibilità:

```zenscript
import mods.astralsorcery.Utils;
```

## Ottieni un ingrediente di cristallo

Questo ti restituirà un ingrediente corrispondente a tutti i cristalli AS.

```zenscript
//Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```