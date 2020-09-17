# CriticalHitEvent

L'evento CriticalHit viene sparato ogni volta che un giocatore attacca un'altra creatura. Ha un **risultato** che determina se il comportamento di default crit si verifica o meno:

- **allow**: the attack is forced to be a critical
- **deny**: l'attacco è impedito di essere critico
- **default**: l'attacco utilizza il comportamento predefinito della Vaniglia per determinare se è un crit.

È inoltre possibile regolare il modificatore di danno per il colpo critico.

## Note

`event.oldDamageModifier` contiene il modificatore di danno originale dell'evento, mentre `evento. sVanillaCrit` è un valore booleano che determina se questo sia già un successo critico.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. riticalHitEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
CriticalHit Events implementare le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IPlayerEvent](/Vanilla/Events/Events/IPlayerEvent/)

## ZenGetters
Le seguenti informazioni possono essere ricavate dall'evento:

| ZenGetter           | ZenSetter        | Tipo Di Reso                          |
| ------------------- | ---------------- | ------------------------------------- |
| `target`            |                  | [IEntity](/Vanilla/Entities/IEntity/) |
| `oldDamageModifier` |                  | galleggiante                          |
| `damageModifier`    | `damageModifier` | galleggiante                          |
| `isVanillaCrit`     |                  | boolean                               |

## ZenMethods

- `event.deny()` imposta il risultato da negare.
- `event.allow()` imposta il risultato da permettere.
- `event.default()` imposta il risultato a default.
