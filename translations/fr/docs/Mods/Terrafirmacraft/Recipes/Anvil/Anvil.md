# Enclume

## Paquet
```zenscript
Importer mods.terrafirmacraft.Enclume;
```

## Ajouter

```zenscript
Anvil.addRecipe(String registryName, IIngredient input, IItemStack sortie, int minTier, String skillType, String... forgeRules);
```
- L'entrée ne peut pas être empilée. Les ancres n'acceptent qu'un seul objet par emplacement.
- l'entrée doit être forgeable (veuillez vous référer à la [Liste d'éléments](/Mods/Terrafirmacraft/ItemRegistry) pour enregistrer la capacité de forgeage à un élément).
- Les paliers sont 0 = Pierre, 1 = Cuivre, 2 = Bronze, 3 = Fer forgé, 4 = Acier, 5 = Acier noir et 6 = Acier rouge/bleu.
- Le type de compétence est la catégorie de compétence à laquelle la forge doit contribuer. Les entrées valides sont `générales`, `outils`, `armes`, `armure`, ou nulles. Si le type de compétence est `outils`, `armes`, ou `armure` alors l'objet du résultat aura un bonus de compétence appliqué à lui.
- Une recette doit avoir 1, 2 ou 3 règles. Les règles sont composées d'un type (`HIT`, `DRAW`, `PUNCH`, `BEND`, `UPSET`, ou `SHRINK`), suivi par une commande (`ANY`, `NOT_LAST`, `DAST`, `SECOND_DAST`, `THIRD_DAST`), séparés par un tiret bas. Par exemple, `HIT_ANY`, `DRAW_SECOND_LAST`, et `UPSET_NOT_LAST` sont des noms de règles valides.

## Retirer

```zenscript
Envil.removeRecipe(IItemStack sortie);
Anvil.removeRecipe(String registryName);
```