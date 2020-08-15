# Gestionnaire de recettes

Un `MixRecipeManager` est utilisé pour modifier la recette existante de mélange haut de four, y compris celles ajoutées par ModTweaker.

## Importation du paquet

Mieux vaut être sûr que de regretter et d'importer le paquet

```zenscript
Importer mods.tcomplement.highoven.MixRecipeManager;
```

## Obtenir un `MixRecipeManager`

Le gestionnaire `HighOven` peut vous donner un `MixRecipeManager`:

```zenscript
// HighOven.manageMixRecipe(ILiquidStack sortie, ILiquidStack input);
var manager = HighOven.manageMixRecipe(<liquid:steel>);
```

+ `la sortie` est la sortie de la recette de mélange à modifier
+ L'entrée `` (facultatif) est l'entrée de la recette de mélange à modifier. Si `null` ou non spécifié, toute recette de mélange produisant la sortie sera affectée

## Suppression des additifs

Vous pouvez utiliser un `MixRecipeManager` pour retirer certains additifs de la recette de mélange affectée. Attention, car les déménagements sont toujours appliqués. Cela signifie que toute façon d'ajouter un additif qui ajouterait un additif que vous retirerez sera évitée.

Cela peut avoir des résultats surprenants avec des entrées de dictée. Puisque les entrées d'oredict sont ajoutées en l'état à la recette de mélange (il n'est pas étendu à une liste de `IItemStack` mais recherchées lors de la vérification des recettes), supprimer un élément bloquera toutes les entrées de dictée auxquelles il appartient.

En général, si vous supprimez quelque chose de spécifique (par exemple, un `IItemStack` avec des transformateurs) mais un ajout additif (simple) permettrait ce que vous avez supprimé plus quelques autres choses (par exemple, un plus générique `IItemStack`), l'intégralité de l'ajout sera annulée, empêchant les autres choses dites d'être acceptées par le Haut four.

| Méthode                                     | Infos                                                   |
| ------------------------------------------- | ------------------------------------------------------- |
| `removeOxidizer(IIngrédient oxydant)`       | Supprimez provisoirement l'oxydant du MixRecipe affecté |
| `removeReducer(réducteur d'ingrédients)`    | Retirer le réducteur du MixRecipe affecté               |
| `enlever Purifier(réducteur d'ingrédients)` | Retirer le purificateur du MixRecipe affecté            |


Toutes ces méthodes retournent la même instance qu'ils ont été appelés, autorisant la chaîne de méthodes.

## Ajout d'additifs à MixRecipe existante

Vous pouvez ajouter des additifs à toutes les recettes de mélange associées par le `MixRecipeManager`. Attention, les déménagements ayant la priorité (voir ci-dessus).

| Méthode                                                           | Infos                                                                             |
| ----------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `addOxidizer(@NotNull Igredient oxidizer, int consumeChance)`     | Ajouter l'oxydant avec la chance de consommation spécifiée (en pourcentage)       |
| `addReducer(@NotNull Igredient reducer, int consumeChance)`       | Ajouter le réducteur avec la chance de consommation spécifiée (en pourcentage)    |
| `addPurifier(@NotNull Igredient purificateur, int consumeChance)` | Ajouter le purificateur avec la chance de consommation spécifiée (en pourcentage) |


Toutes ces méthodes retournent la même instance qu'ils ont été appelés, autorisant la chaîne de méthodes.

## Avertissement

Créer un `MixRecipeManager` qui ne correspond à aucune recette de mélange ne déclenchera aucun avertissement, parce qu'il n'y a aucun moyen de savoir quelles recettes de mélange seront ajoutées (l'analyse de scripts se fait avant l'enregistrement des recettes de mixage). Si vous êtes `MixRecipeManager` n'a aucun effet, vérifiez d'abord qu'il correspond réellement à une recette de mélange