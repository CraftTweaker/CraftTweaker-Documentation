# Blokuj blokowanie poziomu zbiorów

## Funkcja:

Ta blokada sprawia, że gracz nie może zniszczyć bloku z ustawionym poziomem zbiorów, o ile nie zostanie spełniony zestaw wymagań. Na przykład poniżej możesz zobaczyć, że bloki o poziomie zbiorów 3 mogą zostać zniszczone tylko w końcu. Ten przykład nie jest tak wielki w praktyce, ale pokazuje to, co jest w stanie zrobić tego typu blokada.

## Składnia:

    mods.compatskills.HarvestLock.addBlockLevelLock(int poziom, String... wymagania);
    
    mods.compatskills.HarvestLock.addBlockLevelLock(3, "dim|1");