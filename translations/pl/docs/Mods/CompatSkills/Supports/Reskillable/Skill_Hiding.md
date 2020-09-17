# Ukrycie Umiejętności / Widoczność Blokowania

Ta blokada pozwala ukrywać Umiejętności aż do momentu, w którym gracz spełni wymagania do zobaczenia umiejętności. Ma to pewne ograniczone zastosowania przykładowo podczas dodawania umiejętności "Klasa" w koszach, gdzie nie chcesz, aby ktoś, kto jest "inżynierem", widział lub miał dostęp do strony umiejętności "Mage".

## Składnia:

    Pusty przykład:
    mods.compatskills.VisibilityLock.addVisibilityLock(CTSkill, String... Wymagania domyślne);
    
    Przykład:
    mods.compatskills.VisibilityLock.addsibilityLock(<skill:reskillable:attack>, "dim|1");