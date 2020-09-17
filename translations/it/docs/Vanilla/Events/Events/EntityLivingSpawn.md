# EntityLivingSpawnEvent

L'evento EntityLivingSpawn viene sparato ogni volta che un'entità cerca di unirsi o lasciare un mondo.  
Ha una sottoclasse, l'EntityLivingExtendedSpawnEvent che contiene anche un riferimento [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic).

## Classe Evento

Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker. vent.EntityLivingSpawnEvent`  
`crafttweaker. vent.EntityLivingExtendedSpawnEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento

EntityLivingSpawn Events implementare le seguenti interfacce e sono in grado di chiamare tutti i loro metodi/getter/setter:

- [ILivingEvent](/Vanilla/Events/Events/ILivingEvent/)

## ZenGetters

Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter               | Tipo                                                             |
| ----------------------- | ---------------------------------------------------------------- |
| `mondo`                 | [IWorld](/Vanilla/World/IWorld/)                                 |
| `x`                     | galleggiante                                                     |
| `y`                     | galleggiante                                                     |
| `z`                     | galleggiante                                                     |
|                         |                                                                  |
| `spawner` (solo esteso) | [IMobSpawnerBaseLogic](/Vanilla/TileEntity/IMobSpawnerBaseLogic) |

## Funzioni evento

L'evento despawn offre anche tre funzioni per cambiare il risultato dell'evento:

| ZenMethod    | Descrizione                                             |
| ------------ | ------------------------------------------------------- |
| `consentire` | Forza l'entità a (de)generare                           |
| `nega`       | Forza l'entità a (de)spawn                              |
| `passa`      | Imposta il risultato dell'evento allo stato predefinito |