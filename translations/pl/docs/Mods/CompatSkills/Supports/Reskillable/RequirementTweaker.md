# Tłumacz wymagań

## PSA:

Od 1.2.0 i do przodu trwają prace nad ponownymi umiejętnościami, aby ulepszyć wewnętrzne systemy Reskillable i CompatSkill. Ma to na celu umożliwienie w przyszłości silniejszych mechanizmów blokujących.

## Blokowanie wymagań:

Obecnie głównym wsparciem CrT jest blokowanie wymagań. Można to również osiągnąć za pomocą systemu konfiguracji. Jednak system konfiguracyjny **NIE** obsługuje NBT!

### Składnia:

    // Pusty przykład:
    mods.compatskills.Requirement.addRequirement(IItemStack itemem, String... Zablokowane)
    
    Przykłady pracy:
    
    // Dodaje blokadę Diamentowego Kilof z Metadanymi Dzikarda
    mods.compatumiejętności. equirement.addRequirement(<minecraft:diamond_pickaxe:*>, "reskillable:mining|4");
    
    // Dodaje blokadę NBT dla wydajności 5
    . ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 5 as short, id: 32 as short}]}), "reskillable:mining|5", "reskillable:magic|7");
    
    // Dodaje NBT Lock dla jedwabnego styku
    mody. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 1 as short, id: 33 as short}]}), "reskillable:mining|6", "reskillable:agility|7");
    
    // Dodaje NBT Lock do Unbreaking 3
    mods. ompatskills.Requirement.addRequirement(<minecraft:diamond_pickaxe:*>.withTag({ench: [{lvl: 3 as short, id: 34 as short}]}), "reskillable:mining|7", "reskillable:attack|7");
    

Przykład 3 bloków zaklęć połączonych w pojedynczą blokadę:

![Niesamowita blokada](https://i.imgur.com/gCfETAh.png)