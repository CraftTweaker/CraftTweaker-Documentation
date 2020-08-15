# Util

El paquete utils le permite recuperar un [IIngredient](/Vanilla/Variable_Types/IIngredient/) dado de parámetros proporcionados.

## Importando el paquete

Si alguna vez te encuentras necesitando una importación para esto, esta es tu oportunidad:

```zenscript
importar mods.astralsoriceryṛtils;
```

## Consigue un Ingrediente de Cristal

Esto te devolverá un ingrediente que coincida con todos los cristales que se ajusten a los cristales AS.

```zenscript
//Utils.getCrystalORIngredient(booleano hasToBeCelestial, boolean hasToBeAttuned);

val myCrystal = Utils.getCrystalORIngredient(true, true); //as crafttweaker.item.IIngredient
```