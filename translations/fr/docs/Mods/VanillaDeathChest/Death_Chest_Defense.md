# Défense du Coffre de Mort

## Importation du paquet

`Importer mods.vanilladeathchest.DeathChestDefense;`

## Déverrouiller l'objet

```zenscript
//DeathChestDefense.setUnlocker(stage de chaîne, IItemStack déblocker);
DeathChestDefense.setUnlocker("exemple_stage", <minecraft:diamond_axe> * 1000);
```

Un montant de consommation/dommage peut être défini en spécifiant une taille de pile comme ci-dessus.

## Infligez des dégâts à l'objet de déverrouillage au lieu de le consommer

```zenscript
//DeathChestDefense.setDamageUnlocker<unk> adOfConsume(stage de cordes, drapeau de boolé);
DeathChestDefense.setDamageUnlocker<unk> adOfConsume("example_stage", true);
```

## Déverrouiller le message de chat échoué

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(string stage, string message);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "Vous devez obtenir un %2$s pour débloquer votre coffre!");
```

La chaîne prend deux arguments : la quantité et le nom d'affichage des éléments requis.

## Entité de défense

```zenscript
//DeathChestDefense.setDefenseEntity(stage de chaîne, IEntityDefinition defenseEntity);
DeathChestDefense.setDefenseEntity("exemple_stage", <entity:minecraft:zombie_pigman>);
```

## NBT de l'entité de défense

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

`nbt` doit être un [DataMap](/Vanilla/Data/DataMap/).

## Nombre d'apparition d'entités de défense

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(stage de cordes, nombre d'ints);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```