# Termoelettrico
Il pacchetto termoelettrico può essere utilizzato per registrare o annullare la registrazione delle temperature dei blocchi per consentire loro di alimentare il Generatore Termoelettrico di Ingegneria Immersiva. I liquidi hanno intrinsecamente una temperatura, quindi non sono e non possono essere registrati. Le temperature sono a Kelvin.

## Chiamare Il Pacchetto
È possibile chiamare il pacchetto termoelettrico utilizzando `mods.immersiveengineering.Thermoelectric`.

## Aggiungi Sorgente Temperatura

| Richiesto | Tipo            | Tipo Di Dati                                         |
| --------- | --------------- | ---------------------------------------------------- |
| Richiesto | Blocco Target   | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |
| Richiesto | Temperatura (K) | Intero                                               |

### Esempio
```zenscript
//Esempio:
mods.immersiveengineering.Thermoelectric.addTemperatureSource(IIngredient source, int temperature);

mods.immersiveengineering.Thermoelectric.addTemperatureSource(<minecraft:obsidian>, 1272);
```


## Rimuovi Sorgente Temperatura

| Richiesto | Tipo          | Tipo Di Dati                                         |
| --------- | ------------- | ---------------------------------------------------- |
| Richiesto | Blocco Target | [IIngrediente](/Vanilla/Variable_Types/IIngredient/) |

### Esempio
```zenscript
//Esempio:
mods.immersiveengineering.Thermoelectric.removeTemperatureSource(IIngredient source);

mods.immersiveengineering.Thermoelectric.removeTemperatureSource(<minecraft:obsidian>);
```
