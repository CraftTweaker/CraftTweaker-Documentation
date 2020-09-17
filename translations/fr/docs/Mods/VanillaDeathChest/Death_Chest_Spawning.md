# Apparition du Coffre de la Mort

## Importation du paquet

`Importer mods.vanilladeathchest.DeathChestSpawning;`

## Message de chat

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "Un coffre apparaît à [%s, %s, %s]!");
```

La chaîne prend trois arguments : les coordonnées X, Y et Z de la poitrine de mort.

## Nom d'affichage du conteneur

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("exemple_stage", "Vos objets");
```

## regex du nom du registre

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Utiliser le conteneur dans l'inventaire

```zenscript
//DeathChestSpawning.setUseContainerInInventory(stage de cordes, drapeau de boolé);
DeathChestSpawning.setUseContainerInInventory("exemple_stage", false);
```