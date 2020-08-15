# Magie sanglante

**This Support is WIP** **If Something Breaks, please open an issue on the issue tracker!** [Issue-Tracker Link](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Lier :

Ceci annulera l'objet Lié dans la Magie Sanglante pour ledit objet si le joueur ne remplit pas les conditions.

### Syntaxe :

    Exemple:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);
    
    Exemple:
    mods.compatskills.BindHandler.addBindLock("Les Energies Sombres inattendues tourbillonnent autour de vous et subventionnent", <bloodmagic:blood_orb>.withTag({orb: "Bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Rituels :

Ceci annulera l'activation d'un rituel si le joueur ne remplit pas les conditions requises.

### Syntaxe :

    Exemple:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... requirements)
    
    Exemple:
    mods.compatskills.RitualHandler.addRitualLock("Lorsque le rituel est activé, vous n'obtenez pas le résultat attendu", "ritualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")