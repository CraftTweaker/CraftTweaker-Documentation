# Pojemność Skrzyni Śmierci

## Importowanie pakietu

`import mods.vanilladeathchest.DeathChestSpawning;`

## Wiadomość czatu

```zenscript
//DeathChestSpawning.setChatMessage(etap stringu, ciąg wiadomości);
DeathChestSpawning.setChatMessage("example_stage", "Skrzynia pojawia się w [%s, %s, %s]!");
```

Ciąg przyjmuje trzy argumenty: współrzędne X, Y i Z skrzyni śmierci.

## Nazwa wyświetlana kontenera

```zenscript
//DeathChestSpawning.setContainerDisplayName(etap ciągu, nazwa ciągu);
DeathChestSpawning.setContainerDisplayName("example_stage", "Twoje przedmioty");
```

## Nazwa rejestru regex

```zenscript
//DeathChestSpawning.setRegistryNameRegex(etap stringu, string regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Użyj kontenera w ekwipunku

```zenscript
//DeathChestSpawning.setUseContainerInventory(etap stringu, flaga bool);
DeathChestSpawning.setUseContainerInventory("example_stage", false);
```