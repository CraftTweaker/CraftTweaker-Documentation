# Magia Del Sangue

**Questo supporto è WIP** **Se qualcosa si rompe, si prega di aprire un problema sul tracker del problema!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Legatura:

Questo annullerà l'Obbligazione nella Magia del Sangue per detto oggetto specifico se il giocatore non soddisfa i requisiti.

### Sintassi:

    Esempio vuoto:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requisiti);
    
    Esempio di prova:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies ruotano intorno a te e poi si sottomettono", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "stage<unk> test", "adv<unk> minecraft:husbandry/plant_seed");
    

## Rituali:

Questo annullerà l'attivazione di un rituale se il giocatore non soddisfa i requisiti.

### Sintassi:

    Esempio vuoto:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requisiti)
    
    Esempio di prova:
    mods.compatskills.RitualHandler.addRitualLock("As the ritual activates, you don't achieve the expected result", "ritualCrushing", "reskillable:building<unk> 15", "reskillable:magic<unk> 7", "stage<unk> test", "adv<unk> minecraft:husbandry/plant_seed")