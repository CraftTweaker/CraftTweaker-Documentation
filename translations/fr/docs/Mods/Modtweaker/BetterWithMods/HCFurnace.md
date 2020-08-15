# HCFurnace

Grâce à la fonction HCFurnace, les recettes de fours peuvent prendre un temps varié en fonction de l'objet en fonte. Cela n'affecte pas le fonctionnement du carburant, ce qui signifie que certaines recettes prendront plus ou moins de carburant.

Permet de définir le temps, en ticks, qu'il faut une recette de four spécifique pour fondre en fonction de son élément d'entrée

```zenscript
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(IIngredient ingredient, int time)

  //Faire une pomme de terre prendre environ 83 minutes pour fondre car pourquoi pas
  mods.betterwithmods.Misc.setFurnaceSmeltingTime(<minecraft:potato>,100000); 
```