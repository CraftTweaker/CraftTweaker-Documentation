# IBlockEvent

Questa interfaccia è estesa da tutti gli Eventi che possono affrontare blocchi nel mondo.

## Importare la classe

Potrebbe essere necessario [importare](/AdvancedFunctions/Import/) la classe per evitare errori.  
`importare crafttweaker.event.IBlockEvent;`

## Estendere IEventPositionable

Questa interfaccia estende [IEventPositionable](/Vanilla/Events/Events/IEventPositionable/), il che significa che tutte le funzionalità che IEventPositionable offre sono presenti anche in IBlockEvent

## ZenGetters

| nome       | tipo                                        |
| ---------- | ------------------------------------------- |
| mondo      | [IWorld](/Vanilla/World/IWorld/)            |
| blockState | [IBlockState](/Vanilla/Blocks/IBlockState/) |
| blocco     | [IBlock](/Vanilla/Blocks/IBlock/)           |