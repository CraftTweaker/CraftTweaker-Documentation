# Desovando Cofre de la Muerte

## Importando el paquete

`importar mods.vanilladeathchest.DeathChestSpawning;`

## Mensaje de chat

```zenscript
//DeathChestSpawning.setChatMessage(etapa de cadena, mensaje de cadena);
DeathChestSpawning.setChatMessage("example_stage", "Un cofre aparece en [%s, %s, %s]!");
```

La cuerda tiene tres argumentos: las coordenadas X, Y y Z del cofre de muerte.

## Nombre del contenedor

```zenscript
//DeathChestSpawning.setContainerDisplayName(etapa de cadena, nombre de cadena);
DeathChestSpawning.setContainerDisplayName("example_stage", "Tus ítems");
```

## Regex nombre del registro

```zenscript
//DeathChestSpawning.setRegistryNameRegex(etapa de cadena, cadena regex);
DeathChestSpawning.setRegistryNameRegex("example_stage", ".*dirt.*");
```

## Usar contenedor en el inventario

```zenscript
//DeathChestSpawning.setUseContainerInventory(etapa de cadena, bandera de bool);
DeathChestSpawning.setUseContainerInventory("example_stage", false);
```