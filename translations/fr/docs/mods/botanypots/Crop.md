# Cultures

Chemin de la classe : `mods.botanypots.Crop`

## Utiliser

Pour l'utiliser, importez la classe avec `import mods.botanypots.Crop ;` au début de votre script.

## Créer un recadrage

`Crop.create(id, seed, display, tickRate, multiplicateur, catégories);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `seed` <[IIngrédient](/vanilla/api/items/IIngredient)> L'élément utilisé pour planter la culture.
- `afficher` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Le bloc à afficher lors du rendu de la culture.
- `ticRate` &lt;int> Un des facteurs pour combien de temps une culture prend pour grandir.
- `le multiplicateur` &lt;float> Un autre facteur pour le temps de croissance de la culture.
- `catégories` &lt;chaîne[]> Une table de catégories de sol dans laquelle cette culture peut être cultivée.

Ceci peut être utilisé pour créer une nouvelle culture. Gardez à l'esprit que les gouttes doivent être ajoutées séparément.

```zenscript
Crop.create("examplepack:gold", <item:minecraft:gold_nugget>, <blockstate:minecraft:gold_block>, 3000, 2, ["stone"]);
```

## Retirer une culture

`Rop.remove(id);`

- `id` &lt;chaîne> L'id du recadrage à supprimer. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.

Supprime un rognage basé sur son identifiant.

```zenscript
Crop.remove("botanypots:crop/blé");
```

## Définir un élément de graine

`Crop.setSeed(id, seed);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `seed` <[IIngrédient](/vanilla/api/items/IIngredient)> L'élément utilisé pour planter la culture.

Définit l'élément utilisé pour planter la culture.

```zenscript
Crop.setSeed("botanypots:crop/wheat", <item:minecraft:diamond>);
```

## Définir le bloc d'affichage

`Crop.setDisplay(id, state);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `afficher` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> Le bloc à afficher lors du rendu de la culture.

Définit le bloc rendu pour le rognage.

```zenscript
Crop.setDisplay("botanypots:crop/wheat", <blockstate:minecraft:snow_block>);
```

## Définir le taux de tick

`Crop.setTickRate(id, ticketRate);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ticrate` &lt;int> Le taux de tick mis à jour. Un des facteurs expliquant combien de temps une culture prend pour grandir.

Définit le facteur de tick de culture.

```zenscript
Crop.setTickRate("botanypots:crop/blé", 5000);
```

## Définir le multiplicateur de croissance

`Crop.setGrowthModifier(id, multiplicateur) ;`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `multiplicateur` &lt;float> Le multiplicateur mis à jour. Un autre facteur pour combien de temps la culture prend pour pousser.

Définit le multiplicateur/modificateur de croissance pour la culture.

```zenscript
Crop.setGrowthMofieir("botanypots:crop/blé", 1.8);
```

## Changement des catégories de culture

Modifie les catégories associées à la culture. Les catégories sont utilisées pour correspondre aux sols valides à la culture.

### Ajouter une catégorie à une culture

`Rop.addCategory(id, categoriesToAdd);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `categoriesToAdd` &lt;string[]> Une table de catégories à associer avec la culture.

```zenscript
Crop.addCategory("botanypots:crop/blé", ["pierre", "neige"]);
```

### Retirer une catégorie d'une culture

`Recadrer la catégorie (id, les catégories à supprimer);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `categoriesToRemove` &lt;string[]> Une table de catégories à dissocier avec la culture.

```zenscript
Crop.removeCategory("botanypots:crop/blé", ["sale"]);
```

### Effacer toutes les catégories d'une culture

`Rop.clearCategories(id);`

- `id` &lt;chaîne> L'id de la culture. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.

```zenscript
Culp.clearCategories("botanypots:crop/wheat");
```

## Gouttes de culture

### Ajouter des gouttes

`Crop.addDrop(id, drop, chance, min, max);`

- `id` &lt;string> L'id du recadrage à ajouter un drop à. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `déposer` <[IItemStack](/vanilla/api/items/IItemStack)> L'élément à lâcher.
- `chance` &lt;float> La chance qu'il tombe.
- `min` &lt;int> La quantité minimale de cet élément à donner.
- `max` &lt;int> La quantité maximale de cet élément à donner.

Cela ajoute une nouvelle goutte potentielle à la culture.

```zenscript
Crop.addDrop("botanypots:crop/wheat", <item:minecraft:diamond>, 0.05, 1, 1);
```

### Suppression des gouttes

`Rop.removeDrop(id, toRemove);`

- `id` &lt;string> L'id du recadrage pour enlever un butin. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `à supprimer` <[Igredient](/vanilla/api/items/IIngredient)> L'ingrédient à faire correspondre à celui à supprimer

Supprime les gouttes qui ont un objet correspondant.

```zenscript
Crop.removeDrop("botanypots:crop/wheat", <item:minecraft:wheat_seeds>);
```

## Obtenir tous les identifiants

`Crop.getAllIds();`

- Renvoie : &lt;string[]> Un tableau de tous les ids de cultures connus au moment où il est ran.

Cela vous donnera un tableau de tous les identifiants de cultures connus à l'époque.

```zenscript
// Log tous les ids dans le fichier crafttweaker.log
pour cropId dans Crop.getAllIds() {
    println(cropId);
}
```

## Suppression de toutes les cultures

Cela supprimera complètement toutes les cultures actuellement enregistrées. Ceci est utile si vous voulez recréer toutes les données à partir de zéro à travers des scripts.

```zenscript
Tout recadrer ;
```
