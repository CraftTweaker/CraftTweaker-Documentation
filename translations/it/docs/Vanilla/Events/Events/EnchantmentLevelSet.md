# EnchantmentLevelSetEvent

L'evento EnchantmentLevelSet viene sparato quando i livelli per i tre potenziali incantesimi vengono generati nel Tavolo Incantesimo.

## Note

`event.enchantRow` elenca la riga (1-3) del Tavolo Incantesimo, mentre `event.originalLevel` rappresenta il livello originale della riga. `event.power` è il valore cumulativo delle librerie che circondano il Tavolo Incantesimo, mentre `event.item` è l'oggetto che viene incantato.

`event.level` può essere modificato arbitrariamente in un valore compreso tra 0 & 30.

## Classe Evento
Dovrai lanciare l'evento nell'intestazione della funzione come questa classe:  
`crafttweaker.event. nchantmentLevelSetEvent`  
È possibile, naturalmente, anche [importare](/AdvancedFunctions/Import/) la classe prima e utilizzare quel nome allora.

## Estensioni dell'interfaccia evento
EnchantmentLevelSet Events implementa le seguenti interfacce e sono in grado di chiamare anche tutti i loro metodi/getters/setter:

- [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/)

## ZenGetters

| ZenGetter       | ZenSetter | Tipo Di Reso                             |
| --------------- | --------- | ---------------------------------------- |
| `mondo`         |           | [IWorld](/Vanilla/World/IWorld/)         |
| `enchantRow`    |           | int                                      |
| `potenza`       |           | int                                      |
| `elemento`      |           | [IItemStack](/Vanilla/Items/IItemStack/) |
| `originalLevel` |           | int                                      |
| `livello`       | `livello` | int                                      |
