# Fluidi XP

I fluidi XP sono utilizzati in PneumaticCraft: Repressurized by the Aerial Interface, un potente blocco in grado di interfacciarsi da remoto con un lettore collegato. I fluidi XP pompati nell'interfaccia aerea sono convertiti in livelli di esperienza del giocatore e i fluidi XP pompati fuori sono attirati dall'esperienza del giocatore.

Per impostazione predefinita, i seguenti fluidi sono riconosciuti dall'interfaccia aerea:

* Succo XP (EnderIO, Cyclic, Openblocks)
* Essenza della Conoscenza (Espansione Termica)
* Essenza Di Mob (Industrial Foregoing)

Questo pacchetto consente ad altri fluidi arbitrari di essere utilizzati dall'interfaccia aerea come fluidi XP, o per i fluidi XP esistenti di essere deregister.

## Chiamata

È possibile chiamare il pacchetto Fluidi XP utilizzando `mods.pneumaticcraft.xpfluid`.

## Rimozione

Questa funzione deregisters the [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluid`:

```zenscript
mods.pneumaticcraft.xpfluid.removeXPFluid(ILiquidStack fluid);
// Esempio
mods.pneumaticcraft.xpfluid.removeXPFluid(<liquid:xpjuice>);
```

Questa funzione deregisters *all* known XP fluids:

```zenscript
mods.pneumaticcraft.xpfluid.removeAllXPFluids();
```

## Aggiunta

Questa funzione può essere utilizzata per registrare fluidi come fluidi XP:

```zenscript
// Registra un liquido come liquido XP. xpRatio definisce la quantità di giocatore XP per millibucket di fluido.
mods.pneumaticcraft.xpfluid.addXPFluid(ILiquidStack fluid, doppio rapporto);

// Esempio: registrare il GPL come fluido XP del valore di 10 XP per mB
mods.pneumaticcraft.xpfluid.addXPFluid(<liquid:lpg>, 10);
```