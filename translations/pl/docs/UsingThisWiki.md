# Używanie tej wiki

Ta wiki ma na celu dostarczenie zarysu, na którym istnieją typy słabszych rzemieślników i jakie są ich zastosowania.  
W niektórych pozycjach znajdują się również przykłady zapewniające większą przejrzystość.

# Regulamin

Zanim zaczniemy, są pewne terminy, które możesz użyć do:

## ZenGetter

ZenGetter to sposób na pobranie informacji z określonego obiektu. Na przykład [IItemStack](/Vanilla/Items/IItemStack/) ma ZenGetter o nazwie "displayName".  
Używamy ZenGettera w następujący sposób:

```zenscript
//object.zenGetter;
<minecraft:iron_ingot>.displayName;
```

ZenGetter zawsze zwróci coś, w tym przypadku ciąg reprezentujący nazwę przedmiotu ("żelazna sztaba").

## ZenSetter

ZenSetter działa prawie tak samo jak ZenGetter, jedyna różnica polega na tym, że zestaw ZenSetter, ZenGetter dostaje się.  
Pozostańmy z naszym [IItemStack](/Vanilla/Items/IItemStack/), ponieważ ma również ZenSetter o nazwie "displayName". Z wpisu wiemy, że jest to ciąg typu.

Używamy ZenSetter w następujący sposób:

```zenscript
//object.zenSetter = newValue;
<minecraft:iron_ingot>.displayName = "Niepodejrzana Sztaba";
```

ZenSetter nigdy nie zwróci czegoś, ponieważ ma być ustawiony, a nie do uzyskania.

## Przypisz operatorów

Jeśli przedmiot ma oba elementy, ZenGetter i ZenSetter o tej samej nazwie (np. [IItemStack](/Vanilla/Items/IItemStack/) "displayName"), możesz użyć operatorów przypisania innych niż `=`:

W zależności od typu, z którego możesz korzystać: `&=`, `|=`, `+=`, `-=`, `*=`, `/=`, `%=`, `~=`  
Zobaczmy, co robią:

```zenscript
//Ponieważ mamy ZenGetter i ZenSetter o tej samej nazwie, pierwszy robi to tak samo jak drugi:
//obiekt. enSetter += wartość;
//obiekt. enSetter = object.zenGetter + value;

<minecraft:iron_ingot>.displayName += " Doom";
<minecraft:iron_ingot>.displayName = <minecraft:iron_ingot>.displayName + " Doom”;
```