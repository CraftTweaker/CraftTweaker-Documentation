# Mágica de sangre

**This Support is WIP** **If Something Breaks, please open an issue on the issue tracker!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Vinculando:

Esto cancelará la vinculación de objetos en la Magia de sangre para dicho objeto específico si el jugador no cumple con los requisitos.

### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, ItemStack stack, String... requisitos);
    
    Ejemplo de prueba:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Rituales:

Esto cancelará la activación de un ritual si el jugador no cumple con los requisitos.

### Sintaxis:

    Ejemplo en blanco:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requisitos)
    
    Ejemplo de prueba:
    mods.compatskills.RitualHandler.addRitualLock("Como el ritual se activa, no alcanzas el resultado esperado", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")