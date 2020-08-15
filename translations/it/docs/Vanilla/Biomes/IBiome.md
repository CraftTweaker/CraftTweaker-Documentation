# IBiome

L'interfaccia IBiome consente di recuperare le informazioni su una Bioma registrata.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.world.IBiome;`

## Chiamare un IBiome

Puoi ottenere un elenco di tutti i Biomi registrati utilizzando `game.biomes` da [IGame](/Vanilla/Game/IGame/) Questo è attualmente l'unico modo

## ZenGetters

Atm, tutto ciò che puoi fare con un oggetto IBiome sta recuperando alcune informazioni su di esso:

| ZenGetter                    | Tipo Di Reso |
| ---------------------------- | ------------ |
| nome                         | stringa      |
| canRain                      | boolean      |
| isSnowyBiome                 | boolean      |
| highUmidità                  | boolean      |
| probanzaprobanza             | galleggiante |
| baseAltezza                  | galleggiante |
| altezzaVariazione            | galleggiante |
| piovosità                    | galleggiante |
| acquaColorMultiplier         | int          |
| ignorePlayerSpawnSuitability | boolean      |
| temperatura                  | galleggiante |