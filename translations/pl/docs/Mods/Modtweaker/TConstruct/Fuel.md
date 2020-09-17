# Paliwo

`Pakiet paliwa` pozwala na dodanie płynów paliwa hutniczego.

## Dzwonienie

Możesz wywołać pakiet stopu używając `mods.tconstruct.Fuel`

## Dodaj przepisy dotyczące paliwa

```zenscript
//mods.tconstruct.Fuel.registerFuel(ILiquidStack fuel, int duration);
mods.tconstruct.Fuel.registerFuel(<liquid:water> * 2, 300);
```

Parametry:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) paliwo → Płyn Ilość jest minimalnym przyrostem zużytym jednocześnie.
- Inny czas trwania → Ile kleszczy pion płynnego Stacka.

### Należy wziąć pod uwagę:

- [ILiquidStack](/Vanilla/Liquids/ILiquidStack/) jest minimalnym przyrostem, który jest zużywany na raz (np. hutnictwo zużywa tylko 2 mB naraz).
- Czas trwania wynosi ile kleszczy jeden stos płynów.
- Nie można ustawić temperatury, jaką płyn będzie miał w hutnictwie. Użyj [ILiquidDefinition](/Vanilla/Liquids/ILiquidDefinition/) ZenSetter, aby wcześniej zmienić temperaturę płynu!