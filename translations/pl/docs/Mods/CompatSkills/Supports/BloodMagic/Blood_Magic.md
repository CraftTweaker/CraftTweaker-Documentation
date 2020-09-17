# Krew Magiczna

**To wsparcie to WIP** **Jeśli coś się zgubi, otwórz problem na liście zgłoszeń!** [Link do śledzenia zgłoszeń](https://github.com/Coders-After-Dark/CompatSkills/issues)

## Wiążący:

Spowoduje to anulowanie Wiązania w Magicznej Krew dla określonego przedmiotu, jeśli gracz nie spełnia wymagań.

### Składnia:

    Pusty przykład:
    mods.compatskills.BindHandler.addBindLock(String failureMessreMessage, IItemStack stack, String... wymagania);
    
    Test Przykład:
    mods.compatskills.BindHandler.addBindLock ("Nieznana ciemna energia wir wokół ciebie, a następnie na własne potrzeby", <bloodmagic:blood_orb>.withTag({orb: "blood magic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed");
    

## Rytuały:

Spowoduje to anulowanie aktywacji rytuału, jeśli gracz nie spełnia wymagań.

### Składnia:

    Pusty przykład:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... Wymagania)
    
    Test Przykład:
    mods.compatskills.RitualHandler.addRitualLock ("Ponieważ rytuał aktywuje, nie osiągasz oczekiwanego wyniku", "rytualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")