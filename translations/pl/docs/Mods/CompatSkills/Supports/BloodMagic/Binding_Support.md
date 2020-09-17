# Wiążące wsparcie

## Wiążący:

Spowoduje to anulowanie powiązania dla określonego przedmiotu, jeśli gracz nie spełnia wymagań.

### Przedmiot 1.4.0:

#### Składnia:

    Pusty przykład:
    mods.compatskills.BindHandler.addBindLock(String failureMessreMessage, IItemStack stack, String... Wymagania);
    
    Test Przykład:
    mods.compatskills.BindHandler.addBindLock ("Nieznana ciemna energia ruchu wokół ciemnej energii, a następnie na sucho", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|min|minec
    

### Po 1.4.0

Od wersji CompatSkills 1.4.0 blokowanie wiązania zostało teraz włączone jako część ItemStack-Locking. Oznacza to, że nie ma już dedykowanej składni skryptu do dodawania blokady powiązania do elementu.

Zmiana ta nastąpiła również z kilkoma innymi zmianami. Na przykład wyświetlany domyślny komunikat o błędzie został zmieniony w niektórych odpowiedziach:

- Wyświetla teraz obok wymagań na czacie jako komunikat statusu tylko dla gracza
- Komunikat o błędzie jest teraz ciągiem językowym: 

    compatskills.bloodmagic.bindingError=Nieznana Mroczna Energia wirl wokół ciebie, a następnie podboczne
    

Oznacza to, że autorzy paczek zasobów mogą teraz zlokalizować komunikat o błędzie w dowolnym języku. Oznacza to również, że możesz używać modów takich jak ResourceLoader lub Baza (prezentacja) aby zmienić ciąg błędów.