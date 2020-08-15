# Etapy blokady

## Etap-Blokada

Ta część wsparcia GameStage pozwala na zablokowanie konkretnego etapu za zestawem wymagań. Oznacza to, że jeśli gracz nie odpowiada ustawionym wymaganiom dla etapu po odblokowaniu sceny, anuluje odblokowanie i opublikuje komunikat o błędzie na czacie. Ta wiadomość na czacie nie jest obszerna dla całego serwera, ale dla gracza.

### Składnia:

    // Pusty przykład:
    mods.compatskills.GameStageLocks.addGameStageLock(String gamestage, String... domyślne wymagania);
    
    // Przykład:
    mods.compatskills.GameStageLocks.addGameStageLock("i", "reskillable:agility|10");
    mods.compatskills.GameStageLocks.addGameStageLock("like", "reskillable:agility|11");
    mods.compatskills.GameStageLocks.addGameStageLock("banana", "reskillable:agility|12");
    mods.compatskills.GameStageLocks.addGameStageLock"("pancakes", "reskilable:agility|13");