# Blutmagie

**This Support is WIP** **If Something Breaks, please open an issue on the issue tracker!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Bindung:

Dies wird die Bindung von Gegenständen in der Blutmagie für diesen Gegenstand abbrechen, wenn der Spieler die Anforderungen nicht erfüllt.

### Syntax:

    Leeres Beispiel:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);
    
    Test Beispiel:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Rituale:

Dies wird die Aktivierung eines Rituals abbrechen, wenn der Spieler die Anforderungen nicht erfüllt.

### Syntax:

    Leeres Beispiel:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Testbeispiel:
    mods.compatskills.RitualHandler.addRitualLock("Da das Ritual aktiviert ist, erreichen Sie nicht das erwartete Ergebnis", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")