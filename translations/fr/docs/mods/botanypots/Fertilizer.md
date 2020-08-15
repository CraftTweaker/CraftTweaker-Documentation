# Engrais

Chemin de la classe : `mods.botanypots.Fertilizer`

## Utiliser

Pour l'utiliser, importez la classe avec `import mods.botanypots.Fertilizer;` au début de votre script.

## Création d'engrais

`Fertilizer.create(id, ingrédient, minTick, maxTick);`

- `id` &lt;chaîne> L'id du nouvel engrais. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ingrédient` <[Ingrédient](/vanilla/api/items/IIngredient)> L'objet utilisé pour l'engrais.
- `minTick` &lt;int> La quantité minimale de ticks ajoutée par l'engrais.
- `maxTick` &lt;int> La quantité maximale de ticks ajoutée par l'engrais.

Crée un nouvel engrais. Celles-ci peuvent être utilisées pour cultiver plus rapidement.

```zenscript
Fertilizer.create("examplepack:stick", <item:minecraft:stick>, 250, 550);
```

## Enlèvement des engrais

`Fertilizer.remove(id);`

- `id` &lt;chaîne> L'id de l'engrais. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.

Ceci peut être utilisé pour enlever un engrais.

```zenscript
Fertilizer.remove("botanypots:fertilizers/bone_meal");
```

## Changement des tickets d'engrais

`Fertilizer.setTicks(String id, int minTick, int maxTick);`

- `id` &lt;chaîne> L'id de l'engrais. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `minTick` &lt;int> La nouvelle quantité minimale de tiques ajoutée par l'engrais.
- `maxTick` &lt;int> La nouvelle quantité maximale de ticks ajoutée par l'engrais.

Cela changera la plage de tiques de croissance ajoutée par l'engrais.

```zenscript
Fertilizer.setTicks("botanypots:fertilizers/bone_meal", 800, 900);
```

## Changement des ingrédients de l'engrais

`Fertilizer.setIngredient(id, ingrédient);`

- `id` &lt;chaîne> L'id de l'engrais. Ceci est un identifiant d'espaces de noms qui doit être au format `namespace:path` valide.
- `ingrédient` <[Ingrédient](/vanilla/api/items/IIngredient)> Le nouvel élément à utiliser pour l'engrais.

Définit l'objet d'ingrédient qui est l'engrais.

```zenscript
Fertilizer.setIngredient("botanypots:fertilizers/bone_meal", <item:minecraft:sugar>);
```

## Obtenir tous les identifiants

`Fertilizer.getAllIds();`

- Retourne: &lt;string[]> Un tableau de tous les identifiants d'engrais connus au moment où il est couru.

Cela vous donnera une panoplie de tous les identifiants d'engrais connus à l'époque.

```zenscript
// Enregistre tous les ids dans le fichier crafttweaker.log
pour fertilizerId dans Fertilizer.getAllIds() {
    println(fertilizerId);
}
```

## Suppression de tous les engrais

Cela supprimera complètement tous les engrais actuellement enregistrés. Ceci est utile si vous voulez recréer toutes les données à partir de zéro à travers des scripts.

```zenscript
Fertilizer.removeAll();
```