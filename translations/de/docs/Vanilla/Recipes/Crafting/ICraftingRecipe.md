# ICraftingRecipe

Ein ICraftingRezept ist ein handwerkliches Tischrezept, wie es ZS sieht.

## Diese Klasse importieren

Es könnte erforderlich sein, [die Klasse](/AdvancedFunctions/Import/) zu importieren, um Fehler zu vermeiden.  
`importieren Sie crafttweaker.recipes.ICraftingRezept`

## ZenMethoden/Getter

### Zutaten erhalten

Gibt entweder einen [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] oder einen [IIngredient](/Vanilla/Variable_Types/IIngredient/) [][] zurück

```zenscript
rec.ingredients1D
rec.ingredients2D
```

### Get standart output

Gibt den ouptut als [IItemStack](/Vanilla/Items/IItemStack/) zurück. Vorsicht, kann null sein!

```zenscript
rec.output
```

### Auf Bedingungen prüfen

Jeder dieser gibt einen booleschen Wert zurück

```zenscript
rec.hasTransformers;
rec.hasRecipeAction;
rec.hasRecipeFunction;
rec.hidden;
rec.formiert;
```

### ressourcen-Domain

Grundsätzlich der Modid des Mods, der das Rezept hinzugefügt hat.

```zenscript
rec.resourceDomain;
rec.fullResourceDomain;
```

### Zutaten

Gibt die Zutatenliste als [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[] oder [IIngredient](/Vanilla/Variable_Types/IIngredient/)\[]\[] zurück.

```zenscript
rec.ingredients 1D;
rec.ingredients 2D;
```

### Ausgang

Die [IItemStack](/Vanilla/Items/IItemStack/) Ausgabe des Rezeptes.

```zenscript
rec.output;
```

### Zur Zeichenfolge

```zenscript
rec.commandString;
rec.toCommandString();

rec.name;
rec.getName();
```