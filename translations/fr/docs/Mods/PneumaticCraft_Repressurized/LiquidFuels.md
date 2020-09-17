# Carburants liquides

Liquid Fuels sont utilisés dans PneumaticCraft : Repressurisé dans le compresseur liquide (avancé) pour créer de l'air comprimé, et (optionnellement) dans la lampe Kérosène pour produire de la lumière. Par défaut, les liquides produits dans la raffinerie sont définis comme du carburant, ainsi que tout liquide au-dessus d'une température de 305 degrés Kelvin.

## Appel en cours

Vous pouvez appeler le package Fuel Liquid en utilisant `mods.pneumaticcraft.liquidfuel`.

## Enlèvement

Cette fonction déegise la [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) `fluide` en tant que combustible :

```zenscript
mods.pneumaticcraft.liquidfuel.removeFuel(ILiquidStack fluid);
// Exemple
mods.pneumaticcraft.liquidfuel.removeFuel(<liquid:lpg>);
```

Cette fonction désengistes *tous les* carburants enregistrés :

```zenscript
mods.pneumaticcraft.liquidfuel.removeAllFuels();
```

## Ajout en cours

Les fonctions suivantes peuvent être utilisées pour ajouter des fluides au registre du carburant:

```zenscript
// Enregistrez un certain liquide comme combustible. mlPerBucket définit la quantité d'air comprimé produit par seau de carburant. Pour référence, 16000mL d'air est produit à partir d'un morceau de charbon dans un compresseur d'air.
mods.pneumaticcraft.liquidfuel.addFuel(ILiquidStack fluid, double mlPerBucket);

// Exemple: enregistrer l'eau comme un carburant qui produit 16000mL d'air par seau.
mods.pneumaticcraft.liquidfuel.addFuel(<liquid:water>, 16000);
```