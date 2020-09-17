# Outil de création de recettes

Un `MixRecipeBuilder` est utilisé pour construire et ajouter la recette de Mixe Haut de Four au jeu.

## Importation du paquet

Mieux vaut être sûr que de regretter et d'importer le paquet

```zenscript
Importer mods.tcomplement.highoven.MixRecipeBuilder;
```

## Obtenir un `MixRecipeBuilder`

Le gestionnaire `mods.tcomplement.highoven.HighFour` peut vous donner un `MixRecipeBuilder`

```zenscript
// HighOven.newMixRecipe(ILiquidStack sortie, ILiquidStack input, int temp);
var builder = HighOven.newMixRecipe(<liquid:steel> * 72, <liquid:iron> * 144, 1350);
```

+ `la sortie` est le fluide et la grandeur à produire
+ `entrée` est le fluide et la grandeur à consommer
+ `temp` est la température minimale du four haut pour que la recette fonctionne, en Kelvin

## Attributs

| Attribut      | ZenGetter       | ZenSetter            | Type de texte              | Infos                                                                            |
| ------------- | --------------- | -------------------- | -------------------------- | -------------------------------------------------------------------------------- |
| Sortie        | `Sortie`        | :heavy_check_mark: | `ILiquidStack`             | la sortie produite par MixRecipe                                                 |
| input         | `input`         | :heavy_check_mark: | `ILiquidStack`             | l'entrée du MixRecipe                                                            |
| température   | `temp`          | :heavy_check_mark: | `Indice`                   | la température minimale, en Kelvin                                               |
| oxydants      | `oxydants`      | :x:                  | `Liste<IIngredient>` | les oxydants valides pour la recette au moment où l'attribut est accédé          |
| réducteurs    | `réducteurs`    | :x:                  | `Liste<IIngredient>` | les réducteurs valides pour la recette au moment où l'attribut est accédé        |
| purificateurs | `purificateurs` | :x:                  | `Liste<IIngredient>` | les purificateurs valides pour la recette au moment où l'attribut est accessible |


Methods

| Méthode                                                    | Type de retour                  | Infos                                                                                             |
| ---------------------------------------------------------- | ------------------------------- | ------------------------------------------------------------------------------------------------- |
| `getOxidizerChance(IIngrédient oxydant)`                   | `Indice`                        | La chance en pourcentage que l'oxydant soit consommé, ou `-1` si l'oxydant n'est pas valide       |
| `format@@0 getReducerChance(IIngredient reducer)`          | `Indice`                        | La chance en pourcentage que le réducteur soit consommé, ou `-1` si le réducteur n'est pas valide |
| `getOxidizerChance(purificateur d'ingrédients)`            | `Indice`                        | La chance en pourcentage que le purificateur soit consommé, ou `-1` si l'oxydant n'est pas valide |
| `addOxidizer(IIngrédient oxydant, int consumeChance)`      | `Outil de création de recettes` | Ajouter l'oxydant avec la chance de consommation donnée (en pourcentage)                          |
| `addReducer(réducteur d'ingrédients, chance de consommer)` | `Outil de création de recettes` | Ajouter le réducteur avec la chance de consommation donnée (en pourcentage)                       |
| `addPurifier(IIngrédient purifiant, int consumeChance)`    | `Outil de création de recettes` | Ajouter le purificateur avec la chance de consommation donnée (en pourcentage)                    |
| `removeOxidizer(IIngrédient oxydant)`                      | `Outil de création de recettes` | Retirer l'oxydant s'il a été ajouté                                                               |
| `removeReducer(réducteur d'ingrédients)`                   | `Outil de création de recettes` | Retirer le réducteur s'il a été ajouté                                                            |
| `enlever Purifier(purificateur d'ingrédients)`             | `Outil de création de recettes` | Retirer le purificateur s'il a été ajouté                                                         |
| `removeAllOxidizer()`                                      | `Outil de création de recettes` | Retirer tous les oxydants                                                                         |
| `removeAllReducer()`                                       | `Outil de création de recettes` | Supprimer tous les réducteurs                                                                     |
| `removeAllPurifier()`                                      | `Outil de création de recettes` | Retirer tous les purificateurs                                                                    |
| `register()`                                               |                                 | Ajouter un nouveau MixRecipe avec les données actuellement ajoutées dans MixRecipeBuilder         |


Toutes les méthodes qui retournent un `MixRecipeBuilder` retournent la même instance sur laquelle ils ont été appelés, autorisant le chaînage de méthodes.

How to use Once you have a `MixRecipeBuilder`, add the oxidizers, reducers and purifiers for your new recipe to the builder, then `register()` a recipe. Un `MixRecipeBuilder` peut être utilisé pour enregistrer autant de recettes que vous le souhaitez : chaque fois que vous appelez `register()`, il ajoute une nouvelle recette avec les infos qu'il a au moment où vous appelez la fonction. Cela facilite l'ajout de variantes de recettes ou de recettes en ajoutant progressivement de nouveaux additifs et/ou en augmentant le rendement, etc.

Les additifs prennent en charge tout type d' `Ingrédient`: `IOreDictEntry`, `IItemStack` et leurs transformations, conteneurs liquides, etc.

Warning Don't forget to **register** your recipe, the `MixRecipeBuilder` is just a builder to specify all the parts of the recipe !