# Carburant

Le pack `Carburant` vous permet d'ajouter des fluides combustibles de la fonderie.

## Appel en cours

Vous pouvez appeler le package Alliage en utilisant `mods.tconstruct.Fuel`

## Ajouter des recettes de carburant

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack carburant, durée int );
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Paramètres:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) combustible → Le fluide. La quantité est l'incrément minimal qui est consommé en même temps.
- int duration → Combien de ticks dure le consumtpion de la fluidStack.

### Considérez ceci:

- La quantité de [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) est l'incrément minimal qui est consommé en même temps (par exemple, la fonderie ne consomme que 2 mB à la fois).
- La durée est combien de ticks dure une pile de fluides.
- Vous ne pouvez pas régler la température que le liquide va avoir dans la fonderie. Utilisez un [ZenSetter](/Vanilla/Liquids/ILiquidDefinition/) d'ILiquidDefinition pour changer la température du fluide avant !