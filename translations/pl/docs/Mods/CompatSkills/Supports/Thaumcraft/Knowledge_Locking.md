# Blokowanie wiedzy

## Funkcja:

Ta funkcja pozwala na zablokowanie zdobywania wiedzy obserwacyjnej lub teoretycznej w Thaumcraft.

## Typy wiedzy:

Aktualne typy wiedzy to O dla obserwacji i T dla teorii.

## Składnia:

    mods.compatskills.Thaumcraft.addKnowledgeLock(String categoryName, String knowledge Type, String... wymagania);
    
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "O", "dim|1");
    mods.compatskills.Thaumcraft.addKnowledgeLock("UNLOCKAUROMANCY", "T", "dim|1");