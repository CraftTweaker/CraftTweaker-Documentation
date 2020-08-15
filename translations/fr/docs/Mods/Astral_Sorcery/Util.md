# Util

Le paquet utilitaires vous permet de récupérer un [IIngrédient](/Vanilla/Variable_Types/IIngredient/) donné à partir des paramètres fournis.

## Importation du paquet

Si jamais vous avez besoin d'une importation pour cela, voici votre chance :

```zenscript
Importer mods.astralsorcery.Utils;
```

## Obtenir un ingrédient de cristal

Cela vous renverra un ingrédient correspondant à tous les cristaux AS appropriés.

```zenscript
//Utils.getCrystalORIngredient(boolean hasToBeCelestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```