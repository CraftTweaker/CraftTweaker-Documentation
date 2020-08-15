# Wsparcie rytualne

## Rytuały:

Spowoduje to anulowanie aktywacji rytuału, jeśli określone wymagania nie są spełnione dla aktywacji rytuałów.

### Polecenie:

Obecnie w grze jest komenda do wyrzucenia wszystkich ciągów rytualnych do użycia przez Ritual Handler. Polecenie to: /ct rytualDump i wyśle wszystkie ciągi rytualne do "CraftTweaker.log".

### Przedmiot 1.4.0:

#### Składnia:

    Pusty przykład:
    mods.compatskills.RitualHandler.addRitualLock(String failureMessage, String ritual, String... Wymagania)
    
    Test Przykład:
    mods.compatskills.RitualHandler.addRitualLock ("Ponieważ rytuał aktywuje, nie osiągasz oczekiwanego wyniku", "rytualCrushing", "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minecraft:husbandry/plant_seed")
    

### Po 1.4.0:

Od wersji CompatSkills 1.4.0 dodano kilka nowych metod ZenMethods oraz dokonano pewnych zmian w istniejącej składni. Naprawiliśmy również problem, który sprawił, że wsparcie rytualne i wiążące wsparcie nie działają poprawnie!

#### Składnia:

    Pusty przykład:
    mods.compatskills.RitualHandler.addRitualLock(String rytual, String... Wymagania);
    mods.compatskills.RitualHandler.addRitualCostLock(int activationCost, String... Wymagania);
    mods.compatskills.RitualHandler.addRitualCrystalLock(int krystaliczny, string... Wymagania
    
    Test Przykład:
    mods.compatskills.RitualHandler.addRitualLock("rytualCrushing", "reskillable:magic|7");
    mods.compatskills.RitualHandler.addRitualCostLock(500, "reskillable:magic|7";
    mods.compatskills.RitualHandler.addRitualCrystalLock(1, "reskillable:magic|7");
    

#### Komunikat o błędzie

Podobnie jak w przypadku wsparcia wiążącego, komunikat o błędzie został przeniesiony do tłumaczalnego ciągu zamiast ciągu ustawionego w metodzie CrT. To sprawi, że twórcy paczek zasobów będą mogli zlokalizować i zmieniać ciągi w taki sposób, jak to będzie o wiele łatwiejsze.

    compatskills.bloodmagic.rytualError=Ponieważ rytuał aktywuje, nie osiągniesz oczekiwanego wyniku
    

Niektóre inne zmiany to na przykład, że domyślny komunikat o błędzie wyświetla się graczowi jako część wiadomości o czacie statusu. Oznacza to, że wiadomość jest pokazywana tylko graczowi i nie jest drukowana na czacie, aby wszyscy mogli ją zobaczyć. Oznacza to również, że będzie on wyświetlany obok wymagań na czacie. To, co ułatwia graczowi zidentyfikowanie tego, czego brakuje w zamku.