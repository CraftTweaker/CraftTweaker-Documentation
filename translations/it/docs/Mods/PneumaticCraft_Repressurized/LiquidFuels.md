# Combustibili Liquidi

I combustibili liquidi sono utilizzati in PneumaticCraft: Repressurizzato nel Compressore Liquido (Advanced) per creare aria compressa e (opzionalmente) nella Lampada Cherosene per produrre luce. Per impostazione predefinita, i liquidi prodotti nella raffineria sono definiti come carburante, così come qualsiasi liquido al di sopra di una temperatura di 305 gradi Kelvin.

## Chiamata

È possibile chiamare il pacchetto Combustibili liquidi utilizzando `mods.pneumaticcraft.liquidfuel`.

## Rimozione

Questa funzione deregisterà il [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluido` come carburante:

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluido);
// Esempio
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Questa funzione deregist *tutti i* combustibili registrati:

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Aggiunta

Per aggiungere fluidi al registro dei carburanti possono essere utilizzate le seguenti funzioni:

```zenscript
// Registra un determinato liquido come carburante. mlPerBucket definisce la quantità di aria compressa prodotta per secchio di carburante. Per riferimento, 16000 mL di aria sono prodotti da un pezzo di carbone in un compressore d'aria.
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// Esempio: registrare l'acqua come un carburante che produce 16000 mL di aria per secchio.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```