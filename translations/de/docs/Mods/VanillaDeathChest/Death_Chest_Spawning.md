# Todestruhe Spawnen

## Dieses Paket importieren

`import mods.vanilladeathchest.DeathChestSpawning;`

## Chat-Nachricht

```zenscript
//DeathChestSpawning.setChatMessage(string stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "Eine Truhe erscheint bei [%s, %s, %s]!");
```

Die Zeichenkette enthält drei Argumente: die Koordinaten X, Y und Z der Todeskiste.

## Container-Anzeigename

```zenscript
//DeathChestSpawning.setContainerDisplayName(string stage, string name);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## Registry-Name regex

```zenscript
//DeathChestSpawning.setRegistryNameRegex(string stage, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Container im Inventar verwenden

```zenscript
//DeathChestSpawning.setUseContainerInInventory(string stage, bool flag);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```