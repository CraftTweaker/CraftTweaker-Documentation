# Distillation

## Ajouter une recette

La méthode de distillation "addRecipe" consiste de :

| Type de texte  | Type de données                                        |
| -------------- | ------------------------------------------------------ |
| Sortie         | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) Tableau[] |
| Sortie         | [ItemStack](/Vanilla/Items/IItemStack/) Tableau[]      |
| Input          | [Fluidstack](/Vanilla/Liquids/ILiquidStack/)           |
| Flux/t         | Nombre entier                                          |
| Temps en Ticks | Nombre entier                                          |
| Chance         | Tableau flottant []                                    |

### Préface:

Chaque entrée ItemStack est liée à l'entrée correspondante du tableau "Chance".

Exemple:

```zenscript
[<minecraft:diamond>, <minecraft:leather> * 2]
[1, 1]
```

La valeur Chance "Float" doit être comprise entre 0 et 1. Since it converts it from a float value to a percentage value between 0% and 100% I.E:

```zenscript
0.5     = 50%
0.22374 = 22.374%
1       = 100%
```

Bien que vous puissiez soumettre un float supérieur à 1, il ne donnera jamais de valeur supérieure à 100%

### Exemple de Code :

```zenscript
//mods.immersivepetroleum.Distillation.addRecipe(ILiquidStack[] fluidOutputs, IItemStack[] itemOutputs, ILiquidStack fluidInput, int energy, int time, float[] chance)

mods. mmersivepetroleum.Distillation.addRecipe([<liquid:lava> * 5, <liquid:gasoline> * 5], [<minecraft:diamond>, <minecraft:leather> * 2], <liquid:water>, 5, 5, [1, 1]);
```