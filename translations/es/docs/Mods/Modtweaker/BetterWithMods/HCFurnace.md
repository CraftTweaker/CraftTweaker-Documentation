# HCFurnace

La función HCFurnace hace que las recetas de hornos puedan llevar un tiempo variado dependiendo del objeto que se funde. Esto no afecta a la forma en que funciona el combustible, lo que significa que algunas recetas tomarán más o menos combustible.

Permite establecer el tiempo, en ticks, que se necesita una receta de horno específica para fundir basándose en su objeto de entrada

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(ingrediente IIngrediente, tiempo de intención)

  //Hacer una papa tarda unos 83 minutos en fundir, porque ¿por qué no
  mods.betterwithmods.Misc.setFurnaceFloeltingTime(<minecraft:potato>,100000); 
```