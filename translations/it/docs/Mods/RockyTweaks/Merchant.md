# Commerciante

## Comandi

I seguenti comandi sono aggiunti per recuperare informazioni sulle professioni mercantili disponibili & carrers:

- `/ct professioni mercantili` - realizza un registro delle professioni mercantili valide
- `/ct carriere mercantili [profession]` - realizza un registro delle carriere valide per tutti o per la professione specificata

## Pacchetto

`mods.rockytweaks.Merchant`

## Addizione

Le trattative possono essere aggiunte a una professione mercantile specifica & carrer.

```zenscript
// addTrade(String profession, String career, IItemstack input1, @Optional IItemstack input2, IItemstack output, int level);
mods.rockytweaks.Merchant.addTrade("minecraft:nitwit", "nitwit", <minecraft:emerald>, <minecraft:diamond>, <minecraft:cobblestone>, 1);
```

## Rimozione

La rimozione dello scambio commerciale del commerciante non è attualmente possibile.
