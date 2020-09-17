# Defensa del Cofre de la Muerte

## Importando el paquete

`importar mods.vanilladeathchest.DeathChestDefense;`

## Objeto de desbloqueo

```zenscript
//DeathChestDefense.setUnlocker(etapa de cadena, desbloqueo de IIItemStack);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

Una cantidad de consumo/daño puede establecerse especificando un tamaño de pila como arriba.

## Dañar el objeto de desbloqueador en lugar de consumirlo

```zenscript
//DeathChestDefense.setDamageUnlockerInsteadOfConsume(etapa de cadena, bandera del bool);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## Desbloquear mensaje de chat fallido

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(etapa de cadena, mensaje de cadena);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "¡Necesitas obtener un %2$s para desbloquear tu cofre!");
```

La cadena toma dos argumentos: la cantidad y el nombre a mostrar de los elementos requeridos.

## Entidad de defensa

```zenscript
//DeathChestDefense.setDefenseEntity(etapa de cadena, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## Entidad de defensa NBT

```zenscript
//DeathChestDefense.setDefenseEntityNBT(etapa de cadena);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        }
    ]
});
```

`Espíritu` debe ser un [DataMap](/Vanilla/Data/DataMap/).

## Conteo de generación de entidades de defensa

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(string stage, int count);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```