# Zablokowanie obrażeń atakujących

## Funkcja:

Ta funkcja blokuje możliwość użycia przez gracza broni/narzędzia o wartości obrażeń ataku równej lub większej od ustalonej ilości. Oznacza to, że tak jak w poniższym przykładzie, każda broń z obrażeniami atakującymi 0.75 lub większą będzie użyteczna tylko na końcu.

Dla odniesienia: 1 obrażenia = 0.5 Serce Możesz zobaczyć szybki poradnik dotyczący obrażeń pod [tym linkiem](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Składnia:

    mods.compatskills.DamageLock.addDamageLock(podwójne obrażenia, String... wymagania);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim|1");