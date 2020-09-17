# Soils

Chemin de classe : `mods.botanypots.Soil`

## Utiliser

Pour l'utiliser, importez la classe avec `import mods.botanypots.Soil;` au début de votre script.

## Créer de nouveaux sols

`Soil.create(id, ingrédient, displayState, tickRate, catégories);`

- `id` &lt;string> L'id du nouveau sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ingrédient` <[Ingrédient](/vanilla/api/items/IIngredient)> L'ingrédient utilisé pour déterminer quels objets/blocs sont utilisés pour mettre le sol dans une casserole.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> L'état du bloc à afficher pour le sol dans le pot.
- `ticrate` &lt;int> Le taux de tick pour le sol.
- `catégories` &lt;chaîne[]> Une table de catégories associée au nouveau sol.

Crée une nouvelle entrée de sol que les joueurs peuvent utiliser dans le pot de botanique.

```zenscript
Soil.create("examplepack:rock", <item:minecraft:stone>, <blockstate:minecraft:stone>, 100, ["rocky"]);
```

## Enlever un sol

`Soil.remove(id);`

- `id` &lt;string> L'id du sol à enlever. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.

Enlève un sol des données du jeu.

```zenscript
Soil.remove("botanypots:soil/podzol");
```

## Changement du taux de tick du sol

`Soil.setTicks(id, tickRate);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ticrate` &lt;int> Le nouveau taux de tick pour le sol.

Modifie le taux de tick d'un sol donné.

```zenscript
Soil.setTicks("botanypots:sol/herbe", 1300);
```

## Ingrédient du sol en cours de modification

`Soil.setIngredient(id, ingrédient);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ingrédient` <[Ingrédient](/vanilla/api/items/IIngredient)> L'ingrédient utilisé pour déterminer quels objets/blocs sont utilisés pour mettre le sol dans une casserole.

Modifie les objets utilisés pour mettre le sol dans le pot de botanique.

```zenscript
Soil.setIngredient("botanypots:soil/soul_sand", <item:minecraft:sand>);
```

## Changement de l'affichage du sol

`Soil.setDisplayState(id, displayState);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `displayState` <[MCBlockState](/vanilla/api/blocks/MCBlockState)> L'état du bloc à afficher pour le sol dans le pot.

Modifie le bloc affiché pour le sol.

```zenscript
Soil.setDisplayState("botanypots:soil/dirt", <blockstate:minecraft:snow>);
```

## Changement des catégories de sol

Modifie les catégories associées au sol. Celles-ci sont utilisées pour correspondre aux cultures aux sols valides.

### Ajouter une catégorie à un sol

`format@@0 Soil.addCategory(id, categoriesToAdd);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `categoriesToAdd` &lt;string[]> Une table de catégories à associer au sol.

```zenscript
Soil.addCategory("botanypots:sol/soul_sable", ["nether"]);
```

### Retirer une catégorie d'un sol

`Soil.removeCategory(id, categoriesto to Remove);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `categoriesToRemove` &lt;string[]> Une table de catégories à dissocier avec le sol.

```zenscript
Soil.removeCategory("botanypots:sol/soul_sand", ["soul_sand"]);
```

### Effacer toutes les catégories d'un sol

`Soil.clearCategories(id);`

- `id` &lt;string> L'id du sol. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.

```zenscript
Soil.clearCategories("botanypots:sol/terres agricoles");
```

## Obtenir tous les identifiants

`Soil.getAllIds();`

- Retourne: &lt;string[]> Un tableau de tous les ids de sol connus au moment où il est ran.

Cela vous donnera un tableau de tous les identifiants de sol connus à l'époque.

```zenscript
// Enregistre tous les ids dans le fichier crafttweaker.log
pour soilId dans Soil.getAllIds() {
    println(soilId);
}
```

## Suppression de tout le sol

Cela supprimera complètement tous les sols actuellement enregistrés. Ceci est utile si vous voulez recréer toutes les données à partir de zéro à travers des scripts.

```zenscript
Soil.removeAll();
```
