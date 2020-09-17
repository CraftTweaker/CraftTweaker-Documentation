# Difesa Scrigno Morte

## Importazione del pacchetto

`import mods.vanilladeathchest.DeathChestDefense;`

## Unlocker item

```zenscript
//DeathChestDefense.setUnlocker(stringa stage, IItemStack unlocker);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

Una quantità di consumo/danno può essere impostata specificando una dimensione dello stack come sopra.

## Danneggia l'oggetto di sblocco invece di consumarlo

```zenscript
//DeathChestDefense.setDamageUnlockerInsteadOfConsume(stringa stage, bool flag);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## Sblocco messaggio chat fallito

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(stringa stage, stringa message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "You need to get a %2$s to unlock your chest!");
```

La stringa prende due argomenti: la quantità e il nome visualizzato degli elementi richiesti.

## Entità di difesa

```zenscript
//DeathChestDefense.setDefenseEntity(stringa stage, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## Entità di difesa NBT

```zenscript
//DeathChestDefense.setDefenseEntityNBT(stringa stage, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        }
    ]
});
```

`nbt` dovrebbe essere una [DataMap](/Vanilla/Data/DataMap/).

## Numero di spawn dell'entità difesa

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(stringa stage, int count);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```