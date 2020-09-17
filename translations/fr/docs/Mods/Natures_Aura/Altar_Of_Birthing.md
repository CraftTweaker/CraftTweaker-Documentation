# Autel de la naissance

## Paquet
```zenscript
mods.naturesaura.format@@0 AnimalSpawner
```

## Méthodes
- **Nom de la chaîne**
- **Chaîne d'entité** Nom de l'entité à faire apparaître
- **int aura** La quantité d'Aura requise pour l'achèvement de la recette
- **int temps** Le temps des processus prennent en ticks
- **[Ingrédient[]](/Vanilla/Variable_Types/IIngredient) ingrédients** Les entrées

## Ajouter

```zenscript
mods.naturesaura.AnimalSpawner.addRecipe(String name, String entity, int aura, int time, Ingrédient[] ingrédients)
```

## Retirer

```zenscript
mods.naturesaura.format@@0 AnimalSpawner.removeRecipe(String name)
```