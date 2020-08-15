# Scrigno Della Morte

## Importazione del pacchetto

`import mods.vanilladeathchest.DeathChestSpawning;`

## Messaggio di chat

```zenscript
//DeathChestSpawning.setChatMessage(stringa stage, string message);
DeathChestSpawning.setChatMessage("example_stage", "A chest appears at [%s, %s, %s]!");
```

La stringa prende tre argomenti: le coordinate X, Y e Z dello scrigno della morte.

## Nome display contenitore

```zenscript
//DeathChestSpawning.setContainerDisplayName(stringa stage, stringa nome);
DeathChestSpawning.setContainerDisplayName("example_stage", "Your Items");
```

## Regex nome del registro

```zenscript
//DeathChestSpawning.setRegistryNameRegex(stringa stage, stringa regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Usa contenitore nell'inventario

```zenscript
//DeathChestSpawning.setUseContainerInInventory(stringa stage, bool flag);
DeathChestSpawning.setUseContainerInInventory("example_stage", false);
```