# Obrona Skrzyni Śmierci

## Importowanie pakietu

`import mods.vanilladeathchest.DeathChestDefense;`

## Element odblokowujący

```zenscript
//DeathChestDefense.setUnlocker(etap stringu, unlocker IItemStack);
Śmierć Obrony.setUnlocker("example_stage", <minecraft:diamond_axe> * 1000);
```

Ilość zużycia/obrażeń może być ustawiona przez określenie rozmiaru stosu jak powyżej.

## Uszkodz przedmiot odblokowanego zamiast go zużywać

```zenscript
//DeathChestDefense.setDamageUnlockerInsteadOfConsume(etap stringu, flaga boolu);
DeathChestDefense.setDamageUnlockerInsteadOfConsume("example_stage", true);
```

## Odblokuj wiadomość o nieudanym czacie

```zenscript
//DeathChestDefense.setUnlockFailedChatMessage(etap stringu, ciąg wiadomości);
DeathChestDefense.setUnlockFailedChatMessage("example_stage", "Musisz uzyskać %2$s , aby odblokować swoją skrzynię!");
```

Ciąg przyjmuje dwa argumenty: ilość i nazwa wyświetlana wymaganych elementów.

## Obrona obiektu

```zenscript
//DeathChestDefense.setDefenseEntity(etap stringu, IEntityDefinition defseEntity);
DeathChestDefense.setDefenseEntity("example_stage", <entity:minecraft:zombie_pigman>);
```

## Obrona obiektu NBT

```zenscript
//DeathChestDefense.setDefenseEntityNBT(etap stringowy, IData nbt);
DeathChestDefense.setDefenseEntityNBT("example_stage", {
    HandItems: [
        {
            Count: 1,
            id: "minecraft:diamond_sword"
        }
    ]
});
```

`nbt` powinien być [Mapą Data](/Vanilla/Data/DataMap/).

## Liczba pojawiających się obiektów obronnych

```zenscript
//DeathChestDefense.setDefenseEntitySpawnCount(etap ciągu, liczba intów);
DeathChestDefense.setDefenseEntitySpawnCount("example_stage", 500);
```