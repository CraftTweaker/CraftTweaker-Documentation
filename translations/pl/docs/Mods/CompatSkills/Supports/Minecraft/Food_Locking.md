# Zablokowanie żywności

## Funkcja:

Zablokowanie żywności to całkiem nowy typ blokady, i pozwala autorom paczek na blokowanie możliwości jedzenia jedzenia z określonymi wartościami głodu i nasycenia za zbiorem wymagań. Ma to pewne potencjalnie celowe zastosowania wraz z przepisami etapami, Etapy rozgrywki i nasze nowe funkcje [Zmiany Umiejętności](/Mods/CompatSkills/Supports/Reskillable/Skill_Change_Tweaker/) To teoretycznie pozwoliłoby autorom paczek na utworzenie systemu, w którym w graczach mogą jeść tylko jedzenie, które mogą tworzyć, a następnie pozwolić na zablokowanie wymaganych etapów rzemieślnictwa za poziomami umiejętności.

## Składnia głodu:

    mods.compatskills.FoodTweaker.addHungerLock(int level, String... wymagania);
    
    mods.compatskills.FoodTweaker.addHungerLock(3, "dim|1");
    

## Składnia Nasycenia:

    mods.compatskills.FoodTweaker.addSaturationLock(poziom zmienności, String... wymagania);
    
    mods.compatskills.FoodTweaker.addSaturationLock(1.25, "dim|1");