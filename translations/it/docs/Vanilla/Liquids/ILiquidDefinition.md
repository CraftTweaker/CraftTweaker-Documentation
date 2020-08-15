# Definizione

L'ILiquidDefinition definisce il liquido di cui è costituito un [ILiquidStack](/Vanilla/Liquids/ILiquidStack/). A differenza di ILiquidStack, questa interfaccia consente di cambiare le proprietà dei fluidi.

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.liquid.ILiquidDefinizione;`

## Metodi

Allora, cosa possiamo fare con esso?

### Moltiplicazione

Moltiplicando una ILiquidDefinizione si ottiene un nuovo [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) con la quantità specificata in millibuckets

```zenscript
val def = <liquid:lava>.definition;

//essentially the same
val bucketOfLava = def * 1000;
val bucketOfLava1 = <liquid:lava> * 1000;
```

## Ottieni e imposta proprietà fluide

Come ILiquidDefinizione rappresenta un liquido, si può ottenere, ma anche impostare le sue proprietà. Controllare la tabella sottostante per ulteriori informazioni.

Come nella tabella sopra, si imposta lo Zengetter/Setter alla fine della definizione di ILiquid. Alcuni ZenGetters non hanno secondo ZenSetter, dovrai fare affidamento su altri mezzi per modificare queste proprietà.

Attenzione con Zensetters, tuttavia, essi alterano solo il registro dei fluidi e non hanno alcun effetto sui fluidi nel mondo. Probabilmente avrai bisogno solo del regolatore di temperatura quando si disordinano con [Tinkers' Construct Smeltery fuels](/Mods/Modtweaker/TConstruct/Fuel/).

```zenscript
val definition = <liquid:lava>.definition;

//Zengetter: luminosity
val lavaL = definition.luminosity;

//Zensetter: luminosità
definition.luminosity = 0;
```

| Zengetter   | Zensetter   | Che cos'è questo?                                                    | Restituisci/Imposta Tipo |
| ----------- | ----------- | -------------------------------------------------------------------- | ------------------------ |
| nome        |             | Questo restituisce il nome del liquido non localizzato               | stringa                  |
| displayName |             | Questo restituisce il nome del liquido localizzato                   | stringa                  |
| luminosità  | luminosità  | Questo restituisce/imposta la luminosità del liquido di riferimento  | int                      |
| densità     | densità     | Questo restituisce/imposta la densità del liquido di riferimento     | int                      |
| temperatura | temperatura | Questo restituisce/imposta la temperatura del liquido di riferimento | int                      |
| viscosità   | viscosità   | Questo restituisce/imposta la viscosità del liquido di riferimento   | int                      |
| gassoso     | gassoso     | Questo restituisce/imposta se il liquido di riferimento è gassoso    | boolean                  |