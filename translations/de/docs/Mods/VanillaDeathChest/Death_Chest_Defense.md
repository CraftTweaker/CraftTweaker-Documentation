# Todestruhe Verteidigung

## Dieses Paket importieren

`import mods.vanilladeathchest.DeathChestDefense;`

## Entsperr-Element

```zenscript
//DeathChestDefense.setUnlocker(string stage, IItemStack unlocker);
DeathChestDefense.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

Ein Verbrauch/Schadensbetrag kann gesetzt werden, indem eine Stapelgröße wie oben angegeben wird.

## Beschädigung des Entsperrungsgegenstandes anstatt ihn zu verbrauchen

```zenscript
//DeathChestDefense.setDamageUnlocker<unk> adOfConsume(string stage, bool flag);
DeathChestDefense.setDamageUnlocker<unk> adOfConsume("example_stage", true);
```

## Schalte fehlgeschlagene Chat-Nachricht frei

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(string stage, string message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "Du musst ein %2$s bekommen, um deine Truhe freizuschalten!");
```

Die Zeichenkette enthält zwei Argumente: die Menge und der Anzeigename der benötigten Elemente.

## Abwehr Einheit

```zenscript
//DeathChestDefense.setDefenseEntity(string stage, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## Verteidigungseigentum NBT

```zenscript
//DeathChestDefense.setDefenseEntityNBT(string stage, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        }
    ]
});
```

`nbt` sollte eine [DataMap](/Vanilla/Data/DataMap/) sein.

## Verteidigung-Entität Spawn-Anzahl

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(string stage, int count);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```