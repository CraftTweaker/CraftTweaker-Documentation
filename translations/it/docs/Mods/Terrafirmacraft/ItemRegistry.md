# Registro Oggetti

## Pacchetto
```zenscript
// Importa metodi ItemRegistry nel tuo script
import mods.terrafirmacraft.ItemRegistry;
```

## Registra Dimensione Elemento
- Registra la dimensione e il peso dell'articolo. Questo cambia quanto una pila può trattenere.
- Dimensioni [TINY, VERY_SMALL, SMALL, NORMAL, LARGE, VERY_LARGE , HUGE]
- Pesi [VERY_LIGHT, LUCE, MEDIO, HEAVY, VERY_HEAVY]
```zenscript
ItemRegistry.registerItemSize(IIngredient input, String size, String weight);
```

## Registra Articolo Calore
- Registra la capacità di calore dell'articolo e se questo elemento è forgiabile (ad esempio: può essere utilizzato in incudine).
- La capacità di calore determina quanto velocemente un oggetto si raffredda e si riscalda. Il ferro battuto è 0.35.
- Temperatura di fusione è a quale temperatura l'elemento è fuso. Il ferro battuto è bianco brillante 1535 mentre il bronzo è 950 arancione. Per un riferimento completo, controlla [Temperature di riscaldamento](/Mods/Terrafirmacraft/HeatingTemperatures)
```zenscript
ItemRegistry.registerItemHeat(IIngredient input, float heatCapacity, float meltTemp, bool forgeable);
```

## Registra Articolo Metallo
- Registra l'articolo come un elemento metallico. Si noti che questo aggiunge automaticamente la capacità di riscaldamento e forgiatura. Se canMelt è falso, questo elemento non sopporta direttamente l'uscita (come il minerale di ferro ha bisogno di bloomero/altoforno)
- Gli elementi lingotti metallici registrati non sono registrati automaticamente come input valido per gli utensili (ad esempio: lingotto d'acciaio da altre mod registrate dal metodo registerMetalItem non sarà automaticamente utilizzabile per la testa del piccone in acciaio TFC)
```zenscript
ItemRegistry.registerItemMetal(IIngredient input, String metal, int unità, bool canMelt);
```

## Registra Cibo
- Registra le statistiche di prodotto alimentare (Does not work on TFC Foods), Questo ha la priorità rispetto ai valori esistenti. L'impostazione del decadimento a 0 impedisce il decadimento dall'accadere.
```zenscript
ItemRegistry.registerFood(IIngredient input, int hunger, float water, float saturation, float decay, float grain, float veg, galleggiante frutta, galleggiante carne, galleggiante caseario);
```

## Registra Armatura
- Registra le statistiche delle armature
```zenscript
ItemRegistry.registerArmor(IIngredient input, float crushingModifier, float piercingModifier, float slashingModifier);
```

## Registra Carburante
- Registrati come combustibile per pozzetti antincendio, forgiatura o fioritura
```zenscript
ItemRegistry.registerFuel(IItemStack itemStack, int burnTicks, float temperature, bool forgeFuel, bool bloomeryFuel);
```
