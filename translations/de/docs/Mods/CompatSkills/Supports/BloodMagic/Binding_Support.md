# Bindungsunterstützung

## Bindung:

Dies wird die Bindung von Gegenständen für besagte Gegenstände abbrechen, wenn der Spieler die Anforderungen nicht erfüllt.

### Vor-1.4.0:

#### Syntax:

    Leeres Beispiel:
    mods.compatskills.BindHandler.addBindLock(String failureMessage, IItemStack stack, String... requirements);
    
    Test Beispiel:
    mods.compatskills.BindHandler.addBindLock("Untold Dark Energies swirl around you and then subside", <bloodmagic:blood_orb>.withTag({orb: "bloodmagic:weak"}), "reskillable:building|15", "reskillable:magic|7", "stage|test", "adv|minec
    

### Nach-1.4.0

Mit CompatSkills 1.4.0 wurde die Bindungssperre nun als Teil von ItemStack-Locking eingerollt. Dies bedeutet, dass es keine spezielle Skript-Syntax mehr gibt, um einem Element eine bindende Sperre hinzuzufügen.

Diese Änderung hat auch einige andere Änderungen mit sich gebracht. Zum Beispiel wurde die angezeigte Standardfehlermeldung in mancher Hinsicht geändert:

- Es wird nun neben den Anforderungen im Chat als Nur-Spieler-Statusmeldung angezeigt
- Die Fehlermeldung ist nun eine lokalisierbare Zeichenkette: 

    compatskills.bloodmagic.bindingError=Untold Dark Energies wirbeln um dich herum und dann subside
    

Das bedeutet, dass Autoren des Ressourcenpacks nun die Fehlermeldung in jede gewünschte Sprache übersetzen können. Dies bedeutet auch, dass Sie Mods wie ResourceLoader oder Base (ContentTweaker present) verwenden können, um den Fehlerstring zu ändern.