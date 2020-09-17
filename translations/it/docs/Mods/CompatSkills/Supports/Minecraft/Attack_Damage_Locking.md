# Attacco Blocco Danno

## Caratteristica:

Questa funzione blocca l'abilità del giocatore di usare un'arma/uno strumento con un valore di danno d'attacco pari o superiore alla quantità impostata. Questo significa che, come nell'esempio sottostante, qualsiasi arma con Danno Attacco 0.75 o superiore sarà utilizzabile solo alla fine.

Per riferimento: 1 Danno = 0.5 Cuori Puoi vedere una guida di riferimento rapida ai danni sotto [Questo Link](https://minecraft.gamepedia.com/Damage#Dealing_damage)

## Sintassi:

    mods.compatskills.DamageLock.addDamageLock(doppio danno, String... requisiti);
    
    mods.compatskills.DamageLock.addDamageLock(0.75, "dim<unk> 1");