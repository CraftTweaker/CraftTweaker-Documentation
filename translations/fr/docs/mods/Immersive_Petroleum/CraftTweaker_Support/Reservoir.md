# Réservoir

## Enlever

| Nom               | Type de texte        |
| ----------------- | -------------------- |
| Nom de la recette | Chaîne de caractères |

Exemple:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.remove(String recipeName);

mods.immersivepetroleum.ReservoirRegistry.remove("aquifer");
```

## Retirer tout

| Nom | Type de texte |
| --- | ------------- |
|     |               |

Exemple:
```ZenScript
// mods.immersivepetroleum.ReservoirRegistry.removeAll();

mods.immersivepetroleum.ReservoirRegistry.removeAll();
```

# Constructeur du réservoir

## constructeur

| Nom                         | Type de texte                               |
| --------------------------- | ------------------------------------------- |
| Fluide                      | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |
| Taille minimale             | Indice                                      |
| Taille maximale             | Indice                                      |
| Taux de réapprovisionnement | Indice                                      |
| Poids                       | Indice                                      |

### Poids

Le poids est la chance pondérée d'un morceau contenant ce réservoir de fluide spécifique. Le poids est compté comme en X en Total.

So if you have 5 Reservoir values at: 5, 5, 6, 8, 10

Alors chaque entrée respective aura une chance pondérée de:
```
5 en 34
5 en 34
6 en 34
8 en 34
10 en 34
```

Exemple:
```zenscript
// new mods.immersivepetroleum.ReservoirBuilder(IFluidStack fluid, int minSize, int maxSize, int traceAmount, int traceAmount, int weight);

new mods.immersivepetroleum.ReservoirBuilder(<fluid:minecraft:lava>, 1000, 5000, 0, 0, 0, 0, 20);
```

## ajouterDimensions

| Nom                 | Type de texte    |
| ------------------- | ---------------- |
| Liste noire         | Boolean          |
| Noms des dimensions | String[] tableau |

Exemple:
```zenscript
// builderInstance.addDimensions(boolean isBlacklist, String[] dimensionNames);

builderInstance.addDimensions(false, ["minecraft:overworld"]);
```

## addBiomes

| Nom           | Type de texte    |
| ------------- | ---------------- |
| Liste noire   | Boolean          |
| Noms de Biome | String[] tableau |

Exemple:
```zenscript
// builderInstance.addBiomes(boolean isBlacklist, String[] biomeNames);

builderInstance.addBiomes(false, ["minecraft:plains"]);
```

## construire

| Nom | Type de texte        |
| --- | -------------------- |
| Nom | Chaîne de caractères |

### Préface
Les réservoirs de base sont en minuscules au fur et à mesure qu'ils sont traduits - les réservoirs douaniers devraient être correctement en majuscule (par exemple "réservoir de pétrole profond de l'océan").

Exemple:
```zenscript
// builderInstance.build(String name);

builderInstance.build("Exemple Name");
```

---

Copier/Coller l'exemple :
```ZenScript
new ReservoirBuilder(<fluid:minecraft:lava>, 25000, 100000, 0, 20)
    .addDimensions(false, ["overworld"])
    .addBiomes(false, ["minecraft:desert"])
    .build("Lave du désert");
```
