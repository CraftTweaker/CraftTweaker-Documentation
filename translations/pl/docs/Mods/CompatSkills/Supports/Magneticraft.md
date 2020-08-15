# Magneticraft

## Wyjaśnienie:

Obsługa Magneticraft obecnie składa się z:

- Polecenie do zrzucenia nazwy ciągu wszystkich bloków Magneticrafa. 
    - Polecenie to: /ct magMultiBlocks
- Wieloblokowe bramki za pomocą składni typu Crt-based

### Składnia:

    Pusty przykład:
    mods.compatskills.MagMultiBlockGates.addGate(String MultiBlockName, String failed MessreMessage, String... domyślne wymagania);
    
    Przykład:
    mods.compatskills.MagMultiBlockGates.addGate("solar_mirror", "Obawiam się, że jest to zbyt skomplikowane dla takiego idiota, jak ty!", "przekwalifikowalne:building|15", "reskillable:magic|7", "adv|minecraft:husbandry/plant_seed", "stage|test");