# Miscela Minerale

## Importazione del pacchetto

Potrebbe essere necessario per importare il pacchetto se si incontrano problemi (come lanciare un array). Quindi meglio essere sicuri che spiacenti e aggiungere l'importazione `mods.immersiveengineering.MineralMix;`.

## Probabilità Fallita

È possibile ottenere e impostare la possibilità di fallimento per il mix di minerali utilizzando la probabilità di fallimento [ZenSetter/Getter] sull'oggetto.

## Ottieni Minerale

| Richiesto | Tipo | Tipo Di Dati |
| --------- | ---- | ------------ |
| Richiesto | Nome | stringa      |

```zenscript
//Esempio:
Excavator.getMineral(Nome Stringa);

var ferro = Excavator.getMineral("Iron_Ore");
```

## Aggiungi Minerale

| Richiesto | Tipo        | Tipo Di Dati |
| --------- | ----------- | ------------ |
| Richiesto | Minerale    | stringa      |
| Richiesto | Probabilità | stringa      |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```

Dovrai usare i nomi degli oreditti.

## Rimuovi Minerale

| Richiesto | Tipo     | Tipo Di Dati |
| --------- | -------- | ------------ |
| Richiesto | Minerale | stringa      |

```zenscript
mineralMixObject.removeOre("oreIron");
```

## Possibilità Di Fallimento Getter/Setter

### Esempio

```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```

## Esempio Completo

```zenscript
//Esempio:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering. xcavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Ferro = Excavator.getMineral("Iron_Ore");

Ferro.addOre("oreIron", 0. );

//Print Initial Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 25%
Ferro. ailChance = 0.25;

//Print Out The Fail Chance
print(Ferro. ailChance);

//Set The Fail Chance to 50%
Iron.failChance = 0.5;

//Print Final Fail Chance
print(Iron.failChance);
```