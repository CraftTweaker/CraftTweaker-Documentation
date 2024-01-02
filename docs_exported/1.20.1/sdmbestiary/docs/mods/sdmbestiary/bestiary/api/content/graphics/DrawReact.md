# DrawReact

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.graphics.DrawReact;
```


## Implemented Interfaces
DrawReact implements the following interfaces. That means all methods defined in these interfaces are also available in DrawReact

- [ISimpleGraphicsContent](/mods/sdmbestiary/bestiary/api/content/ISimpleGraphicsContent)

## Constructors


```zenscript
new DrawReact(consumer as Consumer<DrawReact>) as DrawReact
```
| Parameter |                                          Type                                          |
|-----------|----------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)&gt; |



## Methods

:::group{name=addPos}

Return Type: [DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)

```zenscript
DrawReact.addPos(x as int, y as int) as DrawReact
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |


:::

:::group{name=setColor}

Return Type: [DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)

```zenscript
DrawReact.setColor(color as Color4I) as DrawReact
```

| Parameter |                               Type                               |
|-----------|------------------------------------------------------------------|
| color     | [Color4I](/mods/sdmbestiary/bestiary/integration/ftblib/Color4I) |


:::

:::group{name=setColor}

Return Type: [DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)

```zenscript
DrawReact.setColor(red as int, green as int, blue as int) as DrawReact
```

| Parameter | Type |
|-----------|------|
| red       | int  |
| green     | int  |
| blue      | int  |


:::

:::group{name=setParent}

```zenscript
DrawReact.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=setPos}

Return Type: [DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)

```zenscript
DrawReact.setPos(x as int, y as int) as DrawReact
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |


:::

:::group{name=setSize}

Return Type: [DrawReact](/mods/sdmbestiary/bestiary/api/content/graphics/DrawReact)

```zenscript
DrawReact.setSize(weight as int, height as int) as DrawReact
```

| Parameter | Type |
|-----------|------|
| weight    | int  |
| height    | int  |


:::


## Properties

|      Name       |                               Type                               | Has Getter | Has Setter |                     Description                      |
|-----------------|------------------------------------------------------------------|------------|------------|------------------------------------------------------|
| color           | [Color4I](/mods/sdmbestiary/bestiary/integration/ftblib/Color4I) | true       | true       |                                                      |
| height          | int                                                              | true       | true       |                                                      |
| isGradient      | boolean                                                          | true       | true       |                                                      |
| isOffset        | boolean                                                          | true       | true       | Whether it takes into account the boundaries or not. |
| roundEdges      | boolean                                                          | true       | true       |                                                      |
| strangeGradient | int                                                              | true       | true       |                                                      |
| weight          | int                                                              | true       | true       |                                                      |
| x               | int                                                              | true       | true       |                                                      |
| y               | int                                                              | true       | true       |                                                      |

