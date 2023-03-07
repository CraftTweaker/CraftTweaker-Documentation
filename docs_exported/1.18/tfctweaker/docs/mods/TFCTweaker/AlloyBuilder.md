# AlloyBuilder

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.tfc.AlloyBuilder;
```


## Methods

:::group{name=add}

add a metal to the alloy

```zenscript
// AlloyBuilder.add(metal as metal, min as double, max as double)

myAlloyBuilder.add(<metal:tfc:copper>, 0.88, 0.92);
```

| Parameter |                     Type                      | Description |
|-----------|-----------------------------------------------|-------------|
| metal     | [metal](/mods/TFCTweaker/Api/Expansion/Metal) | metal       |
| min       | double                                        | min amount  |
| max       | double                                        | max amount  |


:::

:::group{name=add}

add a metal to the alloy

```zenscript
// AlloyBuilder.add(metalName as string, min as double, max as double)

myAlloyBuilder.add("tfc:copper", 0.88, 0.92);
```

| Parameter |  Type  |    Description    |
|-----------|--------|-------------------|
| metalName | string | name of the metal |
| min       | double | min amount        |
| max       | double | max amount        |


:::

:::group{name=output}

Add a metal as output

```zenscript
// AlloyBuilder.output(metal as metal)

myAlloyBuilder.output(<metal:tfc:bronze>);
```

| Parameter |                     Type                      | Description |
|-----------|-----------------------------------------------|-------------|
| metal     | [metal](/mods/TFCTweaker/Api/Expansion/Metal) | metal       |


:::

:::group{name=output}

Add a metal as output

```zenscript
// AlloyBuilder.output(name as string)

myAlloyBuilder.output("bronze");
```

| Parameter |  Type  |    Description    |
|-----------|--------|-------------------|
| name      | string | name of the metal |


:::


